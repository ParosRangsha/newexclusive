import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
let Apidata = createContext()
const ProductApi = ({children}) => {
    let [data, setData] = useState([]);
  let getData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setData(response.data.products);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Apidata.Provider value={data}>{children}</Apidata.Provider>
    </>
  );
}

export {ProductApi, Apidata}