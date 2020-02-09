import React from 'react';
import {Route} from 'react-router-dom';
import StartPage from './Components/StartPage';
import AuthBody from './Components/AuthBody';
import ViewDataBase from './Components/ViewDataBase';
import Profile from './Components/Profile';

function App(){
    return(
        <div className="app-wrapper">
            <Route exact path='/' component={StartPage}/>
            {!localStorage.getItem("user") && <Route exact path='/registration' component={AuthBody}/> }
            {!localStorage.getItem("user") && <Route exact path='/auth' component={AuthBody}/>}
            {localStorage.getItem("user") && <Route exact path='/profile' component={Profile}/>}
            <Route exact path='/db' component={ViewDataBase}/>
        </div>
    );
}
export default App;