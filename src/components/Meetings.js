import React from 'react'
import '../App.css'
import Title from './Title'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import aum0 from '../images/aum_meeting_0.jpg'
import aum1 from '../images/aum_meeting_1.jpg'
import aum2 from '../images/aum_meeting_2.jpg'
import aum3 from '../images/aum_meeting_3.jpg'
import aum4 from '../images/aum_meeting_4.jpg'

const itemData = [
    {
        img: aum0,
        title: 'AUM Meeting Image'
    },
    {
        img: aum1,
        title: 'AUM Meeting Image'
    },
    {
        img: aum2,
        title: 'AUM Meeting Image'
    },
    {
        img: aum3,
        title: 'AUM Meeting Image'
    },
    {
        img: aum4,
        title: 'AUM Meeting Image'
    },
]

const Meetings = () => {
    return(
        <div className="container">
            <div className="page-body">
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