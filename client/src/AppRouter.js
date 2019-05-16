import React, { Component } from 'react';
import { Switch , HashRouter as Router , Route , Redirect  } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Views/Home';
import Poste from './Views/Poste';
import NotFound from './Views/NotFound';
import NewCommande from './Views/NewCommande';
import Header from './Components/Header/Header.js';


export default function AppRouter(){
    return (
        <Router>
            <Header/>
            <div className="container">
                <Switch>

                    <Route exact path='/' render={Home}/>

                    <Route path='/new-commande' render={NewCommande}/>

                    <Route path='/poste/:id' render={Poste}/>

                    <Route path='/not-found'render={NotFound}/>

                    <Redirect to='not-found'/>
                </Switch>
            </div>
            <Footer/>
        </Router>
    )
}
