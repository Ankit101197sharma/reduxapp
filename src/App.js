

import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Home from './Components/Home';
import HomeContainers from "./Containers/HomeContainers"
import HeaderContainer from './Containers/HeaderContainer';


function App() {
  return (
    <div className="App">
      <HeaderContainer/>
     <HomeContainers/>
    </div>
  );
}

export default App;
