import React from 'react';
import {Route} from 'react-router-dom';
import StartPage from './Components/StartPage';
import AuthBody from './Components/AuthBody';

function App(){
    return(
        <div className="app-wrapper">
            <Route exact path='/' component={StartPage}/>
            <Route exact path='/registration' component={AuthBody}/>
            <Route exact path='/auth' component={AuthBody}/>
        </div>
    );
}
export default App;