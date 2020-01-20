import React, {Component} from 'react';
import ThankYou from "../ThankYou"
import Date from "../SelectDates"
import Checkout from "../Checkout";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Routes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Date/>
                    </Route>
                    <Route path="/checkout">
                        <Checkout/>
                    </Route>
                    <Route path="/thank-you">
                        <ThankYou/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Routes;
