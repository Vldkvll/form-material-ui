import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Step1 from "./Components/Step1";

const Step2 = () => <>Step2</>;
const Step3 = () => <>Step3</>;
const Result = () => <>Result</>;
// const Header = () => <h1>Full React Form</h1>;

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
