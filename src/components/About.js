import React from 'react'
import '../App.css'
import Title from './Title'

const About = () => {
    return(
        <div className="container">
            <div className="collaborators">
                <Title text="About" />
                <div className="home-text">
                    <div className="text-block">
                        <p>
                            The framework aims to automatically identify various regions within a 
                            hyperspectralimage by classifying each pixel of 
                            the image and associating them to class segments.  We will develop a multi-layer
                            system, where each layer’s responsibility is to perform an operation on its input, 
                            generateregion classification data, and pass the resultant output to the next layer. 
                            Importantly, each layer analyzesits input from distinct viewpoints, utilizing spectral 
                            and spatial data, resulting in a multi-layer frameworkwhere the layers complement each
                            other. Since the system is highly parallelizable, we will exploit highperformance 
                            computing (HPC) tools and resources to achieve a real-time performance.
                        </p>
                    </div>
                    
                    <div className="text-block">
                        <p>
                            Although the proposed framework is a domain independent solution, we will apply it to the 
                            atmo-spheric cloud detection problem, where cloud albedos on the earth’s surface 
                            are measured by field experts.We have chosen this problem for two reasons: 1) 
                            cloud detection is a unique and challenging probleminvolving multi-class classificatio
                            n and segmentation to evaluate our framework; and 2) to the best of ourknowledge, HSI 
                            has not been applied to the cloud detection problem.  With the rich spectral 
                            information from a large portion of the spectrum, HSI has a big potential for accurate 
                            cloud region detection. Our initialdata analysis supported this argument by identifying 
                            e informative features at beyond visible light.
                        </p>
                    </div>
                    
                    <div className="text-block">
                        <p> 
                            The research will introduce multiple novel ideas including:  
                            1) a multi-layer segmenta-tion (region classification) system in hyperspectral images, 
                            2) two novel pixel classification methods basedon spectral band features, 3) a 
                            new probability based classifier based on spatial features, 4) integrationof real-time 
                            optimization using HPC techniques, and 5) preparation of the framework as an 
                            open-sourcesoftware for the research community.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About