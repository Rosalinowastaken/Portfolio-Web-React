import React, { useState } from "react";
import "./App.css";
import WishInput from "./App/WishInput";
import Wishlist from "./App/Wishlist";

const InitialWishes = [
    { text: 'travel to the moon', done: false },
    { text: 'pay the gym', done: true },
    { text: 'go to the gym', done: false }
]

const App = () => {
    const [wishes,setWishes] = useState(InitialWishes)
    return(
        <div className="wishlist-container">
        <h1 className="wishlist-title">My Wishlist</h1>
        <WishInput onNewWish={wish=> setWishes([wish, ... wishes] )}></WishInput>
        <Wishlist wishes={wishes} onWishesChange={setWishes}/>
        <button type="button" className="archive-button" onClick={() => setWishes(wishes.filter(wish => !wish.done))}
        >Archive Done</button>

        </div>
    )

};

export default App;
