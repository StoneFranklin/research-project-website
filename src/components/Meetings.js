import React from 'react'
import '../App.css'
import Title from './Title'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'

const itemData = [
    {
        img: '/images/aum_meeting_0.jpg',
        title: 'AUM Meeting Image'
    },
    {
        img: '/images/aum_meeting_1.jpg',
        title: 'AUM Meeting Image'
    },
    {
        img: '/images/aum_meeting_2.jpg',
        title: 'AUM Meeting Image'
    },
    {
        img: '/images/aum_meeting_3.jpg',
        title: 'AUM Meeting Image'
    },
    {
        img: '/images/aum_meeting_4.jpg',
        title: 'AUM Meeting Image'
    },
]

const Meetings = () => {
    return(
        <div className="container">
            <div className="collaborators">
                <Title text="Meetings" />
                <ImageList rowHeight={200} className="" cols={3}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={1}>
                            <img src={item.img} alt={item.title} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </div>
    )
}

export default Meetings