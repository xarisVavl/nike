
import Nav from "./components/Nav";
import AboutUs from "./sections/AboutUs";
import Home from "./sections/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () =>  ( 

  <Router>
     
     <main className="relative">
  
<Nav/>
 
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route  path="/about-us" element={<AboutUs/>} />

    

    </Routes>
  


    </main>

</Router>
 );

 
export default App;