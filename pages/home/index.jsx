import React from 'react'
import Campaigns from '../../components/Campaigns'
import Carousel from '../../components/Carousel'
import MenuWrapper from '../../components/product/MenuWrapper'

function Home() {
    return (
        <div>
            <Carousel />
            <Campaigns />
            <MenuWrapper />
        </div>
    )
}

export default Home