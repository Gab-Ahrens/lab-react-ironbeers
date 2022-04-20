import React from "react";
import { Link } from "react-router-dom";
import {Routes, Route} from 'react-router-dom';
import beers from "../../assets/beers.png"
import newBeer from '../../assets/new-beer.png'
import randomBeer from '../../assets/random-beer.png'


function Home() {
    return (
        <div>

            <div>
                <img src={beers} alt="all beers" />
                <Link to={'/ListBeers'}>
                    <h2>All Beers</h2>
                    <p>See all beers.</p>
                </Link>
            </div>

            <div>
                <img src={randomBeer} alt="random beers"/>
                <Link to={'/RandomBeer'}>
                    <h2>Random Beer</h2>
                    <p>See a random beer.</p>
                </Link>
            </div>

            <div>
                <img src={newBeer} alt="random beer"/>
                <Link to={'/NewBeer'}>
                    <h2>New Beer</h2>
                    <p>Enter a new beer.</p>
                </Link>
            </div>

        </div>

    );
}

export default Home;