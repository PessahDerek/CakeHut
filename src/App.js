
import './App.css';
import './AppPhone.css'
import {useState} from 'react'
import logo1 from './images/logo1.png';
import logo2 from './images/logo2.png';
import whats from './images/whatsapp.png';
import twitter from './images/twitter.png';
import gmail from './images/gmail.png';
import insta from './images/insta.png';
import Selections from './components/Selections';
import landing1 from './images/landing1.jpg';
import CakeItem from './components/CakeItem';
import Catalogue from './components/Catalogue'
import RegularOrder from './components/RegularOrder';

import one from './images/1.jpeg';
import two from './images/2.jpeg';
import three from './images/3.jpeg';
import four from './images/4.jpeg';
import five from './images/5.jpeg';
import six from './images/6.jpeg';
import seven from './images/7.jpeg';
import eight from './images/8.jpeg';
import nine from './images/9.jpeg';

const weddings = [one, two, three, four, five, six];
const graduation = [one, two, three, four, five, six];
const anniversary = [one, two, three, four, five, six]
const valentines = [one, two, three, four, five, six];
const birthday = [one, two, three, four, five, six];

function App() {
  var [cakeFamily, setCakeFam] = useState(birthday);
  function differentFamily(fam){
    setCakeFam(fam);
  }
  function ScrollTo(element){
    document.querySelector(element).scrollIntoView({behavior: 'smooth'});
  }
  return (
    <div className="App">
      <nav>
        <div id="logoContainer">
          <img id='logo' src={logo1} />
        </div>
        <div className="contIcons">
          <a href="" id='whats'>
            <img src={whats} />
          </a>
          <a href="" id="twit">
            <img src={twitter} />
          </a>
          <a href="" id='gmail'>
            <img src={gmail} />
          </a>
          <a href="" id='insta'>
            <img src={insta} />
          </a>
        </div>
      </nav>
      <div className='landingPage'>
        <div className='landingPageImage'>
          
        </div>
        <div className="navigations">
          <Selections 
            title="Welcome"
            function="scroll"
            options={[
              {name: "About", func: ()=>ScrollTo(".homePage")},
              {name: "Catalogue", func: ()=>ScrollTo(".catalogue")},
              {name: "Order", func: ()=>ScrollTo(".order")},
              {name:"Careers", func: ()=>ScrollTo("")},
              {name: "Events", func: ()=>ScrollTo(".events")}
            ]}
          />
        </div>
      </div>
      
      <div className='homePage'>
            <div className='text' role="business-description">
              <article>
                <h1>Welcome To Aunty's Cakes</h1>
                Welcome to Aunty's Cakes, We pride ourselves 
                in the best baking in the country since 2005.
                Our experience of over a decade guarantees 
                our customers quality and value.

                Do you have an occasion or event? Let us 
                bake for you and add flavour to your mark.

                We have all sorts of cakes and if you don't 
                mind pay us a visit at 2nd floor, 2 rivers Mall,
                Ruaka, and you taste a flavour or two 
                before you make a selection.
                <br/><br/>
                <span role="business location">
                  2nd Floor Two Rivers Mall, Ruaka.
                  +254712345678
                </span>
              </article>
            </div>
            <div className='businessImage'>
              <div>
                <img src={logo2} />
                <h2>Since 2005</h2>
              </div>
            </div>
      </div>

      <div className='catalogue'>
            <Catalogue />
      </div>
      <div className="order">
        <div className='quoteImage'>
            
        </div>
        <div className="orderSide">
          <nav>
            <h1>Make Order</h1>
            <div className="chooseCustom">
              <a href="#" onClick="">Regular Order</a>
              <a href="#" onClick="">Cusome Order</a>
            </div>
          </nav>
          <div className="makeOrder">
            <RegularOrder />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
