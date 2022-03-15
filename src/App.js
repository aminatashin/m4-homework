
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import WellcomePart from './components/WellcomePart';

function App() {
  return (
    <div className="App">
     < MyNavbar/>
     <WellcomePart/>
      <MyFooter/>
    </div>
  );
}

export default App;
