import React from 'react';
import {Route} from 'react-router-dom';
import StartPage from './Components/StartPage';
import AuthBody from './Components/AuthBody';
import ViewDataBase from './Components/ViewDataBase';

function App(){
    return(
        <div className="app-wrapper">
            <Route exact path='/' component={StartPage}/>
            {!localStorage.getItem("user") && <Route exact path='/registration' component={AuthBody}/> }
            {!localStorage.getItem("user") &&<Route exact path='/auth' component={AuthBody}/>}
            <Route exact path='/db' component={ViewDataBase}/>
        </div>
    );
}
export default App;