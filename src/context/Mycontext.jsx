import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const MyContext = createContext();

export const Myprovider = ({ children }) => {
  const [Data, setData] = useState([]);
  const [filtred, setfiltred] = useState([]);


  useEffect(() => {
    if (!localStorage.getItem("movies")) {
      axios
        .get("Movielsite.json")
        .then((res) => {
          localStorage.setItem("movies", JSON.stringify(res.data.movies));
          setData(res.data.movies);
        })
        .catch((err) => console.log(err));
    } else {
      setData(JSON.parse(localStorage.getItem("movies")));
    }
  }, []);

  function handleTitleSearch(e) {
    const TitleRegex = new RegExp(e.target.value, "i");
    const filtred = Data.filter((e) => TitleRegex.test(e.name));
    if (filtred.length != 0) setfiltred(filtred);
  }

  return (
    <MyContext.Provider
      value={{
        Data,
        filtred,
        setData,
        handleTitleSearch,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
