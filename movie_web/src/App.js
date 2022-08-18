import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./routes/Home";

function App() {
  return <Router>
    
      <Route path="/">
        <Home />
      </Route>
  
  </Router>;
}
export default App;
