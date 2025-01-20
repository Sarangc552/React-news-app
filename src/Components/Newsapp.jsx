import React, { useEffect, useState } from "react";
import Newscard from "./Newscard";

const Newsapp = () => {
  const Api_key = "3f276462413a4da9b2ab373c6472e4d7";
  const [search, setsearch] = useState("india");
  const [newsdata, setnewsdata] = useState(null);

  const getdata = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${Api_key}`
    );
    const jsondata = await response.json();
    // console.log(jsondata.articles);
    setnewsdata(jsondata.articles);
  };

  useEffect(() => {
    getdata();
  }, []);

  const handleinput = (e) => {
    console.log(e.target.value);
    setsearch(e.target.value);
  };

  const userbtn = (event) => {
    setsearch(event.target.value);
  };

  return (
    <div>
      <nav>
        <div>
          <h1>Trending News</h1>
        </div>
        <div className="searchbar">
          <input
            type="text"
            placeholder="search news.."
            value={search}
            onChange={handleinput}
          />
          <button onClick={getdata}>Search</button>
        </div>
      </nav>

      <div className="updatenews">
        <p>Stay Update with new News</p>
      </div>

      <div className="button-category">
        <button onClick={userbtn} value="sports">
          Sports
        </button>
        <button onClick={userbtn} value="politics">
          Politics
        </button>
        <button onClick={userbtn} value="entertainment">
          Entertainment
        </button>
        <button onClick={userbtn} value="health">
          Health
        </button>
        <button onClick={userbtn} value="fitness">
          Fitness
        </button>
      </div>

      <div>{newsdata ? <Newscard data={newsdata} /> : null}</div>
    </div>
  );
};

export default Newsapp;
