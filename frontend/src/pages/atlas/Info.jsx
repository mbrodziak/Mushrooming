import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useQuery } from "react-query";

const fetchDetails = async (id,loc) => {
    if(loc.pathname.includes("borowiki")) {
        const res = await fetch(`http://127.0.0.1:8000/api/mushroom/borowik/${id}`);
        return res.json();
    }
    else if(loc.pathname.includes("podgrzybki")) {
        const res = await fetch(`http://127.0.0.1:8000/api/mushroom/podgrzybek/${id}`);
        return res.json();
    }
    else if(loc.pathname.includes("maslaki")) {
        const res = await fetch(`http://127.0.0.1:8000/api/mushroom/maslak/${id}`);
        return res.json();
    }
    else if(loc.pathname.includes("muchomory")) {
        const res = await fetch(`http://127.0.0.1:8000/api/mushroom/muchomor/${id}`);
        return res.json();
    }
    else return null;
}

const Info = () => {

    let {id} = useParams();
    let location = useLocation();
    
    const { data, status } = useQuery([id, location], fetchDetails);

    if(status === "success") console.log(data);

    return (
        <div>
            {status === "error" && <p>Błąd pobierania danych z bazy!</p>}
            {status === "loading" && <p>Wczytywanie danych...</p>}
            {status === "success" && <h1>{data[0].introduction}</h1>}
        </div>    
        )
}

export default Info;