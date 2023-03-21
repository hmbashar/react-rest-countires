import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoadCountries from './components/LoadCountries/LoadCountries';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LoadCountries></LoadCountries>
      <Footer></Footer>
    </div>
  );
}




export default App;
