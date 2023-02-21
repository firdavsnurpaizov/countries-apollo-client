import './App.css';
import {useQuery} from '@apollo/client';
import {useState} from "react";
import {GET_COUNTRIES} from "./apollo/queries";
import Countries from "./components/Countries/Countries";
import Header from "./components/Header/Header";

function App() {
    const {data} = useQuery(GET_COUNTRIES);
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error : {error.message}</p>;
    const [country, setCountry] = useState('')

    return (
        <div className="container">
            <Header setCountry={setCountry}/>
            <Countries countrySearchName={country} setCountry={setCountry} countries={data}/>
        </div>
    );
}

export default App;
