
import fruit from './fruitcakePng.png'
import cheese from './cheesecakePng.png'
import queen from './queencake.png'
import sponge from './spongecake.png'

import birthday from './birthdayPng.png'
import anniversary from './anniversaryPng.png'
import graduation from './graduationPng.png'
import wedding from './weddingPng.png'

const our_cakes = [
    {id: 'frck', cakeName: "Fruit Cake", cakePrice: "1000", cakeImage: fruit},
    {id: 'chck', cakeName: "Cheese Cake", cakePrice: "1000", cakeImage: cheese},
    {id: 'qqck', cakeName: "Queen Cake", cakePrice: "1000", cakeImage: queen},
    {id: 'spck', cakeName: "Sponge Cake", cakePrice: "1000", cakeImage: sponge},
  ]

const event_cakes = [
    {id: 'evBd', cakeName: "Birthdays", cakePrice: "", cakeImage: birthday},
    {id: 'frck', cakeName: "Anniversaries", cakePrice: "", cakeImage: anniversary},
    {id: 'frck', cakeName: "Graduation", cakePrice: "", cakeImage: graduation},
    {id: 'frck', cakeName: "Wedding", cakePrice: "", cakeImage: wedding},
]
export {our_cakes, event_cakes}