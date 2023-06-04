import logo from './logo.svg';
import './App.css';
import Allroutes from './Allroutes/Allroutes';
import { Navbar } from './homePage';
import { NavbarCode } from './Components/navbar';
import { Footer } from './Components/footer';
function App() {
  return (
    <div className="App">
 <NavbarCode/>
      <Allroutes/>
    
      <Footer/>
    </div>
  );
}

export default App;
