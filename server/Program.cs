using System.Net;
using Microsoft.VisualBasic;

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

app.MapGet("/", () => "Hello from server");

app.MapGet("/api/codes", () =>
{
    string codesUrl = url + "/codes";
    try
    {
        var codesResponse = new WebClient().DownloadString(codesUrl);
        return codesResponse;
    }
    catch (Exception e)
    {
        Console.WriteLine(e);
        return "fail";
    }
});

app.MapGet("/api/convert/from={from}&to={to}&amount={amount}", (string from, string to, double amount) =>
{
    string convertString = $"{url}/pair/{from}/{to}/{amount}";
    try
    {
        var convertResponse = new WebClient().DownloadString(convertString);
        return convertResponse;
    }
    catch (Exception e)
    {
        Console.WriteLine(e);
        return "fail";
    }
});

app.MapGet("/api/latest/code={code}", (string code) =>
{
    string latestUrl = $"{url}/latest/{code}";
    try
    {
        var latestResponse = new WebClient().DownloadString(latestUrl);
        return latestResponse;
    }
    catch (Exception e)
    {
        Console.WriteLine(e);
        return "fail";
    }
});

app.Run();


