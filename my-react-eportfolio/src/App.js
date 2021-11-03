import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import data from "./data";

import Eportfolio from "./components/Eportfolio";
import Backend from "./components/Backend";

//console.log(typeof data)
//console.dir(data)
//console.log(Math.random().toString(36).substr(2, 6))
//const eportfolio = JSON.parse(data)
//console.log(eportfolio)

function App() {
  //const APP_KEY =
  //  "$2b$10$ivpXQdDDS2iZg51CyZoTOexyot0GfQv9fWFA2pynpbjIGD.MJ3TqC";
 // const API_URL = "https://api.jsonbin.io/b/6167f2f2aa02be1d445933c7/latest";

  //const [eData, setEData] = useState(data);
  const [state, setState] = useState({
    loading: true,
    edata: null,
    error: null,
  });

   useEffect(() => {
/*     async function fetchJSON() {
      await fetch(API_URL, {
        method: "GET",
        headers: { "secret-key": APP_KEY },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.hasOwnProperty("name")) {
            setState({ loading: false, edata: result, error: null });
            console.log("Got data");
          } else {
            console.log(result.message);
            setState({ loading: true, edata: null, error: result });
          }
        });
    } */
    //fetchJSON();
    if (state.loading)
    {
      setState({ loading: false, edata: data, error: null })
    } else
    {
      return
    }
  }, [state.loading]); 

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/admin">
            {state.loading || !state.edata ? (
              <div className="loading">Loading...</div>
            ) : (
              <Backend data={state.edata} />
            )}
          </Route>
          <Route path="/">
            {state.loading || !state.edata ? (
              <div className="loading">Loading...</div>
            ) : (
              <Eportfolio data={state.edata} />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
