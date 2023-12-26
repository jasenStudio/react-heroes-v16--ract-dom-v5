import React from 'react'
import { Navbar } from '../components/ui/NavBar'
import { MarvelScreen } from '../components/marvel/MarvelScreen';

import { Switch, Route, Redirect } from 'react-router-dom';
import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { DcScreen } from '../components/dc/DcScreen';


export const DashboardRouters = () => {
  return (
    <>
    <Navbar />
    
    <div>
        <Switch>
            <Route  path="/marvel" component={MarvelScreen} />
            <Route  path="/heroe/:heroeId" component={HeroesScreen} />
            <Route  path="/dc" component={DcScreen} />

            <Redirect to="/marvel" />
        </Switch>
    </div>
    
    </>
  )
}
