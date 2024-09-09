import logo from './logo.svg';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Main from './Components/Main';
import TransferSteps from './Components/transferSteps';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <TransferSteps />
    </div>
  );
}

export default App;
