import { useState } from "react";
import { Input } from '@chakra-ui/react'

function Add() {
  const [movie, setMovie] = useState({
    name: "",
    description: "",
    rating: "",
    imgUrl: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = JSON.parse(localStorage.getItem("movies"));
      let toAdd = movie;
      toAdd.id = data.length + 1;
      data.push(toAdd);
      localStorage.setItem("movies", JSON.stringify(data));

      setMovie({
        name: "",
        description: "",
        rating: "",
        imgUrl: "",
      });
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };
function key(e){
    console.log(e);
}
  return (
    <form  style={{display:"flex",justifyContent :"center" ,flexDirection:"column",width:"50%"}} onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={movie.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={movie.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Rating:</label>
        <Input
          type="number"
          step="0.1"
          name="rating"
          value={movie.rating}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Image URL:</label>
        <Input
          type="text"
          name="imgUrl"
          value={movie.imgUrl}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default Add;
