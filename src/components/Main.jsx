import SearchBar from "./SearchBar";
import data from "../data.json";
import "../cards.css";
import { useState } from "react";
import "./css/Main.css";

const ModalUI = () => {
  return (
    <div className="modalUI">
      <h1>Title</h1>
      <hr />
      <p>Description</p>
    </div>
  );
};

export const Main = () => {
  const [modalInfo, setModalInfo] = useState(false);
  const [itemData, setItemData] = useState({});

  const handleClick = (id) => {
    setModalInfo(true);
    console.log("Json Item ID: ", id);
    alert("Slide down to the bottom")

    setItemData(data.filter((item) => item.id === id)[0]);
  };
  return (
    <>
      <SearchBar />
      <div className="cards-container">
        {data.map((post) => (
          <div className="card" key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button
              className="btn"
              onClick={() => {
                handleClick(post.id);
              }}
            >
              See more...
            </button>
          </div>
        ))}
      </div>
      {modalInfo && (
        <div className="modalUI">
          <h1>{itemData.title}</h1>
          <hr />
          <p>{itemData.body}</p>
        </div>
      )}
    </>
  );
};
