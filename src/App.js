import { useEffect, useState } from "react";

import { CardsRick } from "./CardsRick";
import { Filter } from "./Filter";
import { Pagination } from "./Pagination";
import "./styles.css";

/*
  1.- Change to arrow function
  2.- Using Rick&Morty's API (https://rickandmortyapi.com/documentation)
      display a list of cards with the character's image, name and 

  EXTRA:
  - Add a search bar which filters the list of characters by name
  - Add pagination (20 characters per page)
*/

const App = () => {
  const [char, setChar] = useState([]);
  const [info, setInfo] = useState({});
  const [text, setText] = useState("");

  const inintUrl = "https://rickandmortyapi.com/api/character";

  const filterChar = char.filter((char) =>
    char.name.toLowerCase().includes(text.toLowerCase())
  );

  const FetchCahar = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data.info);
        setChar(data.results);
      })
      .catch((error) => console.error(error));
  };

  const onPrev = () => {
    FetchCahar(info.prev);
  };

  const onNext = () => {
    FetchCahar(info.next);
  };

  useEffect(() => {
    FetchCahar(inintUrl);
  }, []);

  return (
    <div className="App">
      <h1 className="header">Rick and Morty</h1>
      <Filter text={text} setText={setText} />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrev={onPrev}
        onNext={onNext}
      />
      <div className="grid container my-3">
        <CardsRick char={filterChar} />
      </div>
    </div>
  );
};

export default App;
