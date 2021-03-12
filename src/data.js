import burger from './assets/popular/burgerking.png' 
import kfc from './assets/popular/kfc.png' 
import jco from './assets/popular/jco.png' 
import starbuck from './assets/popular/starbuck.png' 

import geprek from './assets/nearyou/geprek.png' 
import nasgor from './assets/nearyou/nasgor.png' 
import pecel from './assets/nearyou/pecel.png' 
import kopi from './assets/nearyou/kopi.png' 


import geprekk from './assets/partner/geprekbensu/geprek.png'
import geprekkeju from './assets/partner/geprekbensu/geprekkeju.png'
import gepreklele from './assets/partner/geprekbensu/gepreklele.png'
import sambelmetah from './assets/partner/geprekbensu/sambelmetah.png'
import miegeprek from './assets/partner/geprekbensu/miegeprek.png'
import miegeprekkeju from './assets/partner/geprekbensu/miegeprekkeju.png'
import mieayamleleh from './assets/partner/geprekbensu/mieayamleleh.png'
import mieayamsambel from './assets/partner/geprekbensu/mieayamsambel.png'

export const popular=[
  {image: burger, title: 'Burger King'},
  {image: starbuck, title: 'Starbuck'},
  {image: kfc, title: 'KFC'},
  {image: jco, title: 'Jco'},
]

export const nearyou=[
  {id: 1, image: geprek, title: 'Geprek Bensu', distance: '0.2 km',
  products: [
    {name: 'Paket Geprek', image: geprekk, price: '15.000'},
    {name: 'Paket Geprek Keju', image: geprekkeju, price: '20.000'},
    {name: 'Paket Geprek Leleh', image: gepreklele, price: '25.000'},
    {name: 'Paket Sambel Matah', image: sambelmetah, price: '15.000'},
    {name: 'Mie ayam Geprek', image: miegeprek, price: '17.000'},
    {name: 'Mie ayam Geprek keju', image: miegeprekkeju, price: '22.000'},
    {name: 'Mie Ayam Leleh', image: mieayamleleh, price: '27.000'},
    {name: 'Mie ayam Sambel Telur Asin', image: mieayamsambel, price: '22.000'},
  ]
  },
  {id: 2, image: nasgor, title: 'Nasi Goreng Mas Rony', distance: '0.6 km'},
  {id: 3, image: pecel, title: 'Pecel Ayam Prambanan', distance: '0.6 km'},
  {id: 4, image: kopi, title: 'Burger King', distance: '1.6 km'},
]
