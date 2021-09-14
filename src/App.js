import { BrowserRouter as Router,Route} from "react-router-dom";
import "semantic-ui-css/semantic.min.css"
import './App.css';
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update"

function App() {
  return (
    <Router>
    <div className="main">
      <h1>React Crud App</h1>
      <div>
      <Route exact path="/create" component={Create}/>
      <Route exact path="/read" component={Read}/>
      <Route exact path="/update" component={Update}/>
       </div>
      
    </div>
    </Router>
  );
}

export default App;
