import Anime from "./Anime";
import { useState, useEffect } from "react";
import React from "react";
import Anime from "./Anime";

const API = process.env.REACT_APP_API_URL;

function Animes() {
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data

  const [animes, setAnimes] = useState([]);
  useEffect(() => {
    fetch(`${API}/animes`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setAnimes(data);
    })
    .catch((error) => console.error(error));
  }, []);

  return (
    <section className="index" id="anime-list">
      {animes.map((anime) => {
        return <Anime key={anime.name} anime={anime} />
      })}
    </section>
  );
}

export default Animes;
