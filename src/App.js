import DateTime from "./Components/Date-Time/Date-Time";
import './App.css';
import File from "./Components/File/File";
import React, {useEffect, useState} from "react";
import axios from "axios";


function App() {

    const[data,setData] = useState([]);

    const [location, setLocation] = useState('');
    // const [lat, setLat] = useState([]);
    // const [long, setLong] = useState([]);
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=5&units=metric&appid=f3a0cc4d285545966101dd973fc259a8`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            const getResponse = async () => {
                try {
                    await axios.get(url).then((response) => {
                        // console.log(response.data.list);
                        setData([response.data.list]);

                    });

                } catch (err) {
                    console.log('err');
                }
            }
            getResponse()
            // axios.get(url).then((response) => {
            //     setData(response.data)
            //     console.log(response.data)
            // })
            setLocation('')
        }
    }

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         setLat(position.coords.latitude);
    //         setLong(position.coords.longitude);
    //     });
    //
    //     console.log("Latitude is:", lat)
    //     console.log("Longitude is:", long)
    // }, [lat, long]);
    return (
        <div className="App">
            <DateTime/>
            <div className="search">
                <input
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder='Enter Location'
                    type="text"/>
            </div>




            {/*<File/>*/}
        </div>
    );
}

export default App;
