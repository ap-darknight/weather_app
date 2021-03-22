import Forecast from './components/Forecast/Forecast';
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className="container-fluid p-0 d-flex flex-column h-100">
      <header className="container-fluid p-3 d-flex flex-column m-0 border bg-info">
        <Logo />
        <h1 className="d-flex justify-content-center text-light">React Weather App</h1>
      </header>
      <main className="container-fluid d-flex flex-column">
        <Forecast/>
      </main>
      <footer className=" text-light container-fluid d-flex justify-content-center p-2 bg-dark fixed-bottom">
        Created with 💛 by ap.darknight 
      </footer>
    </div>
  );
}

export default App;
