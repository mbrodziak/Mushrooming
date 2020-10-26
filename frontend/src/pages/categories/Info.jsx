import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from "react-query";

const fetchDetails = async (id) => {
    const res = await fetch(`http://127.0.0.1:8000/api/mushroom/borowik/${id}`);
    return res.json();
}

const Info = () => {

    let {id} = useParams();
    console.log(id);
    
    const { data, status } = useQuery("details", fetchDetails(id));
    console.log(status);

    if(status === "success") console.log(data);

    return (
        <div>
            {status === "error" && <p>Błąd pobierania danych z bazy!</p>}
            {status === "loading" && <p>Wczytywanie danych...</p>}
            {status === "success" && <p>DZIAŁA</p>}
        </div>
    )
}

export default Info;