import logo from './logo.svg';
import './App.css';
import Noticia from './components/Noticias';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Noticia/>
      </header>
    </div>
  );
}

export default App;
