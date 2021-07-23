import React from 'react'
import '../App.css'
import BottomBar from './BottomBar';

const Home = () => {
    return(
        <div className="container not-scrollable">
            <video autoPlay="autoplay" muted loop="loop" className="cloud-image">
                <source src="/Videos/clouds.mp4" type="video/mp4"></source>
            </video>
            <h1 className="home">Hyperspectral Image Segmentation Research Project</h1>
            <BottomBar />
        </div>
    )
}

export default Home