
import './App.css';
import Earn from './components/earn/earn';
import Feature from './components/featured/feature';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Feature />
      <Earn />
      <Footer />
    </div>
  );
}

export default App;
