import React from 'react'
import '../App.css'
import BottomBar from '../components/BottomBar';

const Home = () => {
    return(
        <div className="container not-scrollable cloud-background">
            <h1 className="home">Hyperspectral Image Segmentation Research Project</h1>
            <BottomBar />
        </div>
    )
}

export default Home