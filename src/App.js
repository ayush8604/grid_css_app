
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./component/home/home";
import Navbar from "./component/navbar/navbar";
import Sidebar from "./component/sidebar/sidebar";
import Sidebarcard from "./component/sidebar cards/sidebar-card";
import Sidebarcardd from "./component/sidebar cards/sidebar-card2";
import Main from "./component/main/main";
import Carousell from "./component/caraousel/Carousel";
import { Games } from "./component/games/games";

function App() {
  return (
   <div>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/navbar" element={<Navbar />}/>
        <Route path="/sidebar" element={<Sidebar />}/>
        <Route path="/Sidebarcard" element={<Sidebarcard />}/>
        <Route path="/Sidebarcardd" element={<Sidebarcardd />}/>
        <Route path="/main" element={<Main />}/>
        <Route path="/Carousell" element={<Carousell />}/>
        <Route path="/Games" element={<Games />}/>
      </Routes>
    </Router>

 
  </div>
  );
}

export default App;
