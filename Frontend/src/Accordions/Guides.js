import { useState, useEffect } from "react";
import { View, Text } from 'react-native';
import WateringGuide from "./WateringGuide";

function Guides (props){
    const [waterGuide, setWaterGuide] = useState({})
    const [sunlightGuide, setSunlightGuide] = useState({})
    useEffect(()=>{
        async function getWatering(){
            const address = "http://localhost:3000/guides"
            try{
                const response = await fetch(address)
                const jsonData = await response.json()
                const watering = jsonData.data.map((item)=>{
                    return item.watering_description
                })
                console.log(watering)
                setWaterGuide(watering)
                const sunlight = jsonData.data.map((item)=>{
                    return item.sunlight_description
                })
                setSunlightGuide(sunlight)
            }catch(err){
                console.error(err)
            }
        }
        getWatering()

    },[])

    return(
        <>
            <View>
                <WateringGuide data={waterGuide}/>
            </View>
        </>
    )
}
export default Guides
