import './App.css';
import Header from './components/Header/Header'
import {Outlet} from "react-router-dom"


function App() {
  return (
    <div className="App bg-slate-100 ">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
