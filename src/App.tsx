import './App.css';
import {useQuery} from '@apollo/client';
import {useState} from "react";
import {GET_COUNTRIES} from "./apollo/queries";
import Countries from "./components/Countries/Countries";
import Header from "./components/Header/Header";
import {Loader} from "./components/common/Loader";

function App() {
    const {data, loading} = useQuery(GET_COUNTRIES);
    const [country, setCountry] = useState('')
    if (loading) return <Loader/>;

    return (
        <div className="container">
            <Header setCountry={setCountry}/>
            <Countries countrySearchName={country} setCountry={setCountry} countries={data}/>
        </div>
    );
}

export default App;
