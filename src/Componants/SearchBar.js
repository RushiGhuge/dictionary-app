import React, { useState } from "react";
import "../Css/SearchBar.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { add_result } from "../Redux/action";
import CircularProgress from "@mui/material/CircularProgress";

const SearchBar = ({ setResult }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch(); // call the dispatch...

  const handelSearch = (e) => {
    e.preventDefault();
    fetchSearchResult();
    setInput("");
  };

  async function fetchSearchResult() {
    try {
      setIsLoading(true);
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      );
      setResult(data.data);
      dispatch(add_result(data.data));
      setIsLoading(false);
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="search-bar">
      <form onSubmit={handelSearch} className="search">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && (
        <div className="slider">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
