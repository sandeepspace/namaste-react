import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { useEffect, useState } from "react";
import { Shimmer } from "../Shimmer/Shimmer";
import { LIST_API } from "../../utils/constants";
import { Link } from "react-router-dom";

export const Body = () => {
    // Local normal js variable
    // let listOfRestaurants = [];

    // Local react state variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    const fetchDataFromApi = async () => {
        const data = await fetch(LIST_API)
        const json = await data.json();
        setListOfRestaurants(json?.products);
        setFilteredListOfRestaurants(json?.products);
    }

    //Conditional Rendering
    // if(!listOfRestaurants.length){
    //     return <Shimmer/>
    // }


    return !listOfRestaurants.length ? <Shimmer count={12} /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-input" value={searchText} onChange={(e) => {
                        setSearchText(e?.target?.value)
                    }} />
                    <button type="button" className="search-btn" onClick={() => {
                        const searchedList = listOfRestaurants.filter((p) => p.title.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredListOfRestaurants(searchedList);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.rating > 4
                    )
                    setFilteredListOfRestaurants(filteredList)
                }}>Top Rated Products</button>
            </div>
            <div className="rest-container">
                {
                    filteredListOfRestaurants.map(restData =>
                      <Link key={restData?.id}  to={"/product/" + restData?.id}><RestaurantCard restData={restData} /></Link>  
                    )
                }
            </div>
        </div>
    )
}