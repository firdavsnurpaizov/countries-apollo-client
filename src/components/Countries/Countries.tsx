import React, {useEffect} from 'react';
import {useDebounce} from "../../hooks";
import {useQuery} from "@apollo/client";
import {GET_COUNTRY} from "../../apollo/queries";
import CountryCard from "../CountryCard/CountryCard";
import styles from "./Countries.module.scss"
import {Loader} from "../common/Loader";
import {Query} from "../../types";

type IProps = {
    countrySearchName: string
    setCountry: (value: string) => void
    countries: Query
}

const Countries = ({countrySearchName, setCountry, countries}: IProps) => {

    const debouncedSearchTerm = useDebounce(countrySearchName, 1000);

    useEffect(() => {
        debouncedSearchTerm && setCountry(debouncedSearchTerm)
    }, [debouncedSearchTerm])

    const {loading, error, data: country} = useQuery<Query>(GET_COUNTRY, {
        variables: {
            "filter": {
                "code": {
                    "in": debouncedSearchTerm
                }
            }
        },
    })
    if (loading) return <Loader/>;
    if (error) return <div>`Error! ${error.message}`</div>

    return (
        <div className="container">
            <div className={styles.wrapper}>
                {
                    country?.countries.length === 0
                        ? countries?.countries?.map((item: any) => <CountryCard key={item.code} item={item}/>)
                        : country?.countries?.map((item: any) => <CountryCard key={item.code} item={item}/>)
                }
            </div>
        </div>
    );
};

export default Countries;