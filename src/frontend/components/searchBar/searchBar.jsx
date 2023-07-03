import { useState } from "react";
import { useNavigate } from "react-router";

import searchBarCSS from "./searchBar.module.css";

export const SearchBar = ({ searchData }) => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const changeHandler = (e) => {
    setSearch(e.target.value);
    setResults(
      searchData.filter(({ username, firstName, lastName }) => {
        return (
          username.toLowerCase().includes(e.target.value.toLowerCase()) ||
          firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
          lastName.toLowerCase().includes(e.target.value.toLowerCase())
        );
      })
    );
  };
  const handleClick = (id) => {
    if (typeof(id)==="string") {
      navigate(`/user/${id}`)
    }
    setSearch("")
  };
  return (
    <div className={searchBarCSS.searchWrapper}>
      <div className={searchBarCSS.container}>
        <div className={searchBarCSS.searchBar}>
        <input
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="Search user..."
          onChange={changeHandler}
          onFocusCapture={() => setShowSuggestions(true)}
          onBlur={() => {
            setTimeout(() => {
                setShowSuggestions(false);
            }, 300);
          }}
          value={search}
        />
        <span className="material-symbols-outlined">search</span>
        </div>
        <div
          className={searchBarCSS.suggestionList}
          style={{ display: showSuggestions ? "block" : "none" }}
        >
          {search !== "" && results.length !== 0
            ? results.map((user, index) => (
                <div key={index} onClick={()=>handleClick(user._id)} className={searchBarCSS.suggestion}>
                  <span className={searchBarCSS.profile} style={{backgroundImage:`url(${user?.profile})`}}></span>
                  <div>
                    <p>
                      {user.firstName} {user.lastName}
                    </p>
                    <p>@{user.username}</p>
                  </div>
                </div>
              ))
            : search !== "" && <p>No match found</p>}
        </div>
      </div>
    </div>
  );
};
