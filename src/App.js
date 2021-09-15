import AmazonData from'./Amazon'
import Navbar from './Navbar'
import HomePage from './homePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import FlipkartData from './Flipkart';

function App() {
  return (
   <Router>
     <div id="wrapper">
       <div id="content-wrapper" className="d-flex flex-column">
         <div id="content">
           <Navbar/>
           <Switch>
             <Route path="/" component={HomePage} exact={true}/>
             <Route path="/amzn" component={AmazonData} exact={true}/>
             <Route path="/flip" component={FlipkartData} exact={true}/>
           </Switch>
         </div>
       </div>
     </div>
   </Router>
  );
}

export default App;
