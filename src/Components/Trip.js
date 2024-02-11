import { useEffect, useState } from 'react';
import './Trip.css'
import Tripdata from './Tripdata';


const Trip =(props)=>{
    const [trip,setTrip]= useState([])
    console.log(trip);

    useEffect(()=>{
        var tripArr = []
        const fetchTrips = async ()=>{
        
            const response = await fetch(props.fetchUrl)
            const responseData = await response.json()
            // responseData.map((item,index)=>{
            //     tripArr.push({
            //         id:index,
            //         name:item.name,
            //         desc:item.desc,
            //         image:item.image
            //     })
            // })
            // tripArr = [...responseData];
            setTrip(responseData)
        }

        fetchTrips()
        // console.log(tripArr);
        // setTrip(tripArr)
    },[])

    const trip_content = trip.map(((item)=>{
        console.log('render');
        return(
            <Tripdata image={item.image} text={item.desc} heading={item.name}/>
        )
        }))

return(
    <div className='trip'>
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
        <div className='tripcard'>

        {trip_content}
            {/* <Tripdata 
             image='/assets/5.jpg'
             heading="Trip in Indonesia"
             text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
             />
             <Tripdata 
             image='/assets/8.jpg'
             heading="Trip in Malaysia"
             text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences."
             />
             <Tripdata 
             image='/assets/6.jpg'
             heading="Trip in France"
             text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
             /> */}
             
        </div>
    </div>
)
}

export default Trip;