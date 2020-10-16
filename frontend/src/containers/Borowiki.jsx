import React, { useState, useEffect } from "react";
import Mushroom from "../components/Mushroom"

const Borowiki = () => {

  const [data,setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/mushroom/borowik/")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
    {!loaded && <h4>Wczytywanie...</h4>}
    <Mushroom />
    </div>
  )
};

export default Borowiki;
