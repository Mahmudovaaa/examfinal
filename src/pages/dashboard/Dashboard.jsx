import React, { useEffect, useState } from "react";
import DashCard from "./DashCard";
import Header from "../../components/header/Header";
import axios from "axios";
import { useFormik } from "formik";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("https://6653b8561c6af63f46756780.mockapi.io/basket")
      .then((res) => {
        setData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const removeItem = (id) => {
    axios.delete(`https://6653b8561c6af63f46756780.mockapi.io/basket/${id}`);
    setTimeout(() => {
      getData();
    }, 500);
  };

  const [power, setPower] = useState([]);
  const [search, setSearch] = useState("");

  const buttonclick = (e) => {
    setSearch(e.target.value);
    const db = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setPower(db);
  };

  const [sort, setSort] = useState();
  const clickSort = (db) => {
    setSort(db);
  };
  useEffect(() => {
    if (sort) {
      setData((prevData) =>
        [...prevData].sort((a, b) => {
          if (sort === "asc") {
            return a.title.localeCompare(b.title);
          } else {
            return b.title.localeCompare(a.title);
          }
        })
      );
    }
  });

  const formik = useFormik({
    initialValues: {
      thumbnail: "",
      title: "",
      price: "",
    },
    onSubmit: (values) => {
      axios.post("https://6653b8561c6af63f46756780.mockapi.io/basket", values);
    },
  });
  return (
    <div>
      <Header />
      <div>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={buttonclick}>Search</button>
        <button onClick={() => clickSort("asc")}>A-Z</button>
        <button onClick={() => clickSort("desc")}>Z-A</button>
        {power && power.map((item) => <p>{item.title}</p>)}
      </div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <input
            id="thumbnail"
            onChange={formik.handleChange}
            value={formik.values.thumbnail}
          />
          <input
            id="price"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <input
            id="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h1>Our Products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
          perspiciatis!
        </p>
        <div>
          {data &&
            data.map((item) => (
              <DashCard item={item} sil={() => removeItem(item.id)} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
