import React from 'react'
import '../App.css'
import BottomBar from './BottomBar';

const Home = () => {
    return(
        <div className="container">
            {/* <div className="cloud-image"></div> */}
            
            <h1 className="home-text">Hyperspectral Image Segmentation Research Project</h1>
            <BottomBar />
        </div>
    )
}

export default Home