
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import WellcomePart from './components/WellcomePart';
import LatestRelease from './components/LatestRelease';

function App() {
  return (
    <div className="App">
     < MyNavbar/>
     <WellcomePart/>
     <LatestRelease/>
      <MyFooter/>
    </div>
  );
}

export default App;
