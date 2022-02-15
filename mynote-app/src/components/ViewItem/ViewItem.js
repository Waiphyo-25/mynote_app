import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./view.scss";

const ViewItem = () => {
  const history = useHistory();

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  console.log("location", history.location);
  useEffect(() => {
    setId(history.location.state.data.id);
    setTitle(history.location.state.data.title);
    setDesc(history.location.state.data.desc);
  }, []);

  const handleOnSubmit = (id, e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:3001/items/${id}`, {
        title: title,
        desc: desc,
      })
      .then(() => {
        history.push("/");
        //   getItems();
        //   setItems();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("history from add item : ", history);
  return (
    <Layout>
      <div class="item">
        <i class="sticky note icon"></i>
        <div class="content">
          <a class="header">{title}</a>
          <div class="description">{desc}</div>
        </div>
        <span class="right floated trash">
          <i class="trash alternate outline icon"></i>
        </span>
        <span class="right floated edit">
          <i class="edit outline icon"></i>
        </span>
        <span class="right floated view">
          <i class="envelope open outline icon"></i>
        </span>
      </div>
    </Layout>
  );
};

export default ViewItem;
