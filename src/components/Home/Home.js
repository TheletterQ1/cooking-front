import React from "react";
import {withRouter} from 'react-router-dom'

import Navigation from '../Nav'

const Home = (props) => {


    return(
         <>
          <h1>Home</h1>
          <div className="App">
        <Navigation />
        <Header />
        <section>
          <h1 id="all_about_the_food">It's All About the Food!</h1>
          <br />
          <div id="cake">
            <p id="cake-text">
              <span>click on it once your done drooling over it</span>
              <small>
                Just one of the mouth drooling examples we have here, wanna
 
               learn this recipe? Click<a href="#"> here</a> the link to book a
                spot on our course schedule
              </small>
            </p>
          </div>
          <p id="kitchen-goal">
            Here at In the Kitchen Cooking School, we invite you to join us for
            a deliciously fun and unique way to spend some time. You’ll want to
            try all of our wonderful classes, where you will learn new skills,
            make new friends, have a ball, and dine on the most delectable food
            around.
            <br />
            We have a class for everyone!
          </p>
          <br />
          <h2>Never Cook Anything Else But Toast?</h2>
          <h2>Is The Microwave Your Best Friend?</h2>
          <h2>Does Cooking Breakfast Really Mean Pouring Milk In Cereal?</h2>
          <br />
          <p>
            Take a bite out of our World Flavors series and explore a universe
            of delicious and unique cuisines. Try it all, from French, Italian,
            Spanish and Mexican, to Vietnamese, Thai, Greek and more.
            <br />
            Learn more about our <a href="#">Cooking Classes</a> and{" "}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
           {/*}  eslint-disable-next-line jsx-a11y/anchor-is-valid  */}
            <a href="#">Team Building events!</a>
            <br />
            If there is something you want to learn that is not already on our
            menu, In the Kitchen Cooking School will create a class especially
            for you! So bring your spouse, or a friend, or come meet some new
            friends and join us for some delicious food and great fun.
          </p>
          <br />
          <h3>Get ready to spice up your life!</h3>
        </section>
      
        
       
      </div>
    </>
         
    );
}
export default withRouter(Home);