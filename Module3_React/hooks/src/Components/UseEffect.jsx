import React, { useState, useEffect } from "react";

const HookTwo = () => {
  const [dataType, setDataType] = useState("Posts");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${dataType}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [dataType]);

  return (
    <div>
      <div>
        <button onClick={() => setDataType("Posts")}>Posts</button>
        <button onClick={() => setDataType("Comments")}>Comments</button>
        <button onClick={() => setDataType("Albums")}>Albums</button>
      </div>
      <h1>{dataType}</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default HookTwo;
