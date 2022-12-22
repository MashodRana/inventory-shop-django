import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/HomePage/Home';
import LoggedHome from './Pages/HomePage/LoggedHome';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Home/> */}
      <LoggedHome></LoggedHome>

      <Footer></Footer>
    </div>
  );
}

export default App;
