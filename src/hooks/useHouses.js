import {useEffect, useMemo, useState} from "react";
import featuredHouse from "../main-page/featured-house";

const useHouses = () =>{
    const [allHouses, setAllHouses] = useState([]);

    useEffect(() => {
    const fetchHouses = async () => {
        const rsp = await fetch("/houses.json");
        const houses = await rsp.json();
        setAllHouses(houses);
    };
    fetchHouses();
    }, []);

    return allHouses;
};
export default useHouses;