import React, {useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Person from "./components/Person";
import Lonely from "./components/Lonely";
import data from "./data.json";

function App() {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const activeUser = 0;

  switch (key) {
    case "ADD_TO_LIKED_USER":
      break;
    case "ADD_TO_DISLIKED_USER":
      break;
    case "ADD_TO_SUPERLIKED_USER":
      break;

    default:
      return people;
  }

  return (
    <div className='App'>
      <h1>hi</h1>
    </div>
  );
}

export default App;
