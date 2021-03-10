import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Header from "./Components/Header";
import Step1 from "./Components/Step1";
import Step2 from "./Components/Step2";
import Step3 from "./Components/Step3";
import Result from "./Components/Result";


function App() {
    return (
        <>
            <Header />
            <Router>
                <Switch>
                    <Route path="/" exact component={Step1} />
                    <Route path="/step2" component={Step2} />
                    <Route path="/step3" component={Step3} />
                    <Route path="/result" component={Result} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
