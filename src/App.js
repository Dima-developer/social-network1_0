import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />

                <Navbar state={props.state.sidebar} />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer
                    // dialogPage={props.state.dialogPage}
                    // dispatch={props.dispatch}
                    //addMessage={props.addMessage}
                    //updateNewMessageText={props.updateNewMessageText}
                    />} />


                    <Route path='/profile' render={() => <Profile />} />

                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/settings' render={() => <Settings />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
