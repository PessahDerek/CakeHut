import {React, useState, useLayoutEffect} from 'react'
import CakeItem from './CakeItem';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Selections from './Selections';
import CakeTray from './CakeTray';

import one from '../images/1.jpeg';
import two from '../images/2.jpeg';
import three from '../images/3.jpeg';
import four from '../images/4.jpeg';
import five from '../images/5.jpeg';
import six from '../images/6.jpeg';
import seven from '../images/7.jpeg';
import eight from '../images/8.jpeg';
import nine from '../images/9.jpeg';

const weddings = [one, two, three, four, five, six];
const graduation = [one, two, three, four, five, six];
const anniversary = [one, two, three, four, five, six]
const valentines = [one, two, three, four, five, six, seven, eight, nine];
const birthday = [one, two, three, four, five, six];
const events = [
    {event: "Birthday", images: birthday},
    {event: "Wedding", images: weddings},
    {event: "Graduation", images: graduation},
    {event: "Anniversary", images: anniversary},
    {event: "Valentines", images: valentines},
]

function Catalogue() {
    var [cakeFamily, setCakeFam] = useState(birthday);
    let [view, setView] = useState(pcView());

    function chooseCakeFam(fam){
        setCakeFam(fam);
    }
    
    function pcView(){
        return (
            <div>
                <nav>
                    <h1>Aunty's Cakes</h1>
                </nav>
                <div className="catalogSubPage">
                    <div className='navigations'>
                        <Selections 
                            title="Take a Pick"
                            function="scroll"
                            options={[
                                {name: "Birthday", func: ()=>chooseCakeFam(birthday)},
                                {name: "Wedding", func: ()=>chooseCakeFam(weddings)},
                                {name: "Graduation", func: ()=>chooseCakeFam(graduation)},
                                {name:"Anniversary", func: ()=>chooseCakeFam(anniversary)},
                                {name: "Valentines", func: ()=>chooseCakeFam(valentines)},
                                {name: "Cusom", link: ""}
                            ]}/>
                    </div>
                    <div className='showCatalogue'>
                        {cakeFamily.map(cake => <CakeItem key={cakeFamily.indexOf(cake)} img={cake} /> )}
                    </div>
                </div>
            </div>
        )
    }
    function phoneView(){
        return (<div>
            <nav><h1>Aunty's Cakes</h1></nav>
                <div className='showCatalogue'>
                        {events.map(event => 
                        <CakeTray key={events.indexOf(event)} 
                        cake={event.images} title={event.event} />)}
                </div>
            </div>
        )
    }
    useLayoutEffect(()=>{
        window.addEventListener('resize', ()=>{
            if (window.innerWidth < 600){
                setView(phoneView());
            }else{
                setView(pcView());
            }
        })
    }, [window.innerWidth])
    return view;
}

export default Catalogue