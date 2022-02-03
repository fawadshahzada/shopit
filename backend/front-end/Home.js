import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import Index from '../Navbar/index'
import "./Home.css"

const Home = () => {
    return (
        <div className='home-container' id="Home">
            <Index />
            <Profile />
            <Footer />
        </div>
    )
}

export default Home
