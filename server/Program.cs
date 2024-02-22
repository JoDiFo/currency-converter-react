using System.Net;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                      });
});

builder.Services.AddControllers();

var app = builder.Build();
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

const string url = "https://v6.exchangerate-api.com/v6/b9a59150bb14d420c71e9883";

app.MapGet("/api/codes", () =>
{
    string codesUrl = url + "/codes";
    var codesResponse = new WebClient().DownloadString(codesUrl);
    return codesResponse;
});

app.MapGet("/api/convert/from={from}&to={to}&amount={amount}", (string from, string to, double amount) =>
{
    string convertString = $"{url}/pair/{from}/{to}/{amount}";
    var convertResponse = new WebClient().DownloadString(convertString);
    return convertResponse;
});

app.MapGet("/api/latest/code={code}", (string code) =>
{
    string latestUrl = $"{url}/latest/{code}";
    var latestResponse = new WebClient().DownloadString(latestUrl);
    return latestResponse;
});

app.Run();


