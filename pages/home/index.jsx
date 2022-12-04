import React from 'react'
import Campaigns from '../../components/Campaigns'
import Carousel from '../../components/Carousel'
import MenuWrapper from '../../components/product/MenuWrapper'
import About from './../../components/About';
import Reservation from '../../components/Reservation';
import Customers from './../../components/customers/Customers';

function Home() {
    return (
        <div>
            <Carousel />
            <Campaigns />
            <MenuWrapper />
            <About />
            <Reservation />
            <Customers />
        </div>
    )
}

export default Home