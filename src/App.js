import React from 'react'
import configureStore from "./store/configureStore";
// import { Provider } from "react-redux";
import { browserHistory, Router, Route } from "react-router";
import { Switch } from 'react-router-dom';
import { syncHistoryWithStore } from "react-router-redux";
import Layout from "./Containers/Layout";
import Items from "./Containers/Items";
import Basket from "./Containers/Basket";
import Login from "./Containers/Login";
import { useGlobalContext } from './context';
// import { connect } from 'react-redux';



const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const App = () => {

    const { edame } = useGlobalContext()

    if (!edame) {
        return (<Login />)
    }


    return (
        <div>
            <Router history={history}>
                <Switch >
                    <Route component={Layout}>
                        <Route exact path="/" component={Items} />
                        <Route path="/categories/:id" component={Items} />
                    </Route>
                    <Route path="/basket" component={Basket} />
                </Switch>

            </Router >
        </div >
    )
}

// const mapStateToProps = state => {
//     return { edame: state.edame }
// }

export default App
