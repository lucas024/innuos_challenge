import React from 'react'
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from './Navigation';
import Albums from './Albums';

const Root = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Navigation/>
                    </Route>
                    <Route path="/albums">
                        <Albums/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Root