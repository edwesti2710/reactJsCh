import React, { useEffect, useState } from "react";

export default function TestPokeApi() {
  //   let arrayDePokes;
  const [arrayDePokes, setArrayDePokes] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson.results);
        // arrayDePokes = resJson;
        setArrayDePokes(resJson.results);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        console.log("Fin del proceso");
      });
    return () => {};
  }, []);

  return (
    <div>
      {arrayDePokes.map((item) => (
        <div>
          <a href={item.url}>{item.name}</a>
        </div>
      ))}
    </div>
  );
}
