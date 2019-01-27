import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Films from "./pages/Films";
import HomePage from "./pages/HomePage";

class App extends Component {

    render() {
        return (
            <BrowserRouter basename="/">
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/films" component={Films} exact/>
                    <Route path="/bookmark" component={Films} exact/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;