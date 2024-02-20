import { Converter, NavBar, SingleCurrencies } from "./components";

function App() {
  return (
    <>
      <main>
        <div className="container">
          <h1>Check live foreign currency exchange rates</h1>

          <div className="main">
            <div className="wrapper">
              <NavBar />
              <Converter />
              <SingleCurrencies />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
