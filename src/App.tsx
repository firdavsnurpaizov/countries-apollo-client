import './App.css';
import {useQuery} from '@apollo/client';
import {useState} from "react";
import {GET_COUNTRIES} from "./apollo/queries";
import Countries from "./components/Countries/Countries";
import Header from "./components/Header/Header";
import {Loader} from "./components/common/Loader";
import {Query} from "./types";

function App() {
    const {data, loading} = useQuery<Query>(GET_COUNTRIES);
    const [country, setCountry] = useState<string>('')
    if (loading) {
        <Loader/>;
    }
    return (
        <div className="container">
            <Header setCountry={setCountry}/>
            {
                data && <Countries countrySearchName={country} setCountry={setCountry} countries={data}/>
            }
        </div>
    );
}

export default App;
