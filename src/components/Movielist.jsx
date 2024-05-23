import Moviecard from "./Moviecard";
import { useContext } from "react";
import { MyContext } from "../context/Mycontext";
import { Input } from "@chakra-ui/react";
function Movielist() {
  const { Data, handleTitleSearch, filtred } = useContext(MyContext);
  console.log(filtred);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <Input onInput={handleTitleSearch} placeholder="filtre by name" />
      <Input
        onChange={(e) => {
          console.log(e.target.value);
        }}
        placeholder="filtre by rate"
      />
      {filtred.length == 0
        ? Data.map((e, i) => {
            return <Moviecard key={i} movie={e} />;
          })
        : filtred.map((e, i) => {
            return <Moviecard key={i} movie={e} />;
          })}
    </div>
  );
}

export default Movielist;
