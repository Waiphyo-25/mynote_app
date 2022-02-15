import React, { useEffect, useState } from "react";
import "./item.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Item = ({ data, setItems, getItems }) => {
  const { id, title, noteId } = data;

  const history = useHistory();

  const editItems = () => {
    history.push("/edit/item", { id });
  };

  const ViewItems = () => {
    history.push("/view/item", { data });
  };

  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:3001/items/${id}`)
      .then(() => {
        getItems();
        // setItems();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div class="item">
      <i class="sticky note icon"></i>
      <div class="content">
        <a class="header">{data.title}</a>
        <div class="description">{data.desc}</div>
      </div>
      <span onClick={() => deleteItem(id)} class="right floated trash">
        <i class="trash alternate outline icon"></i>
      </span>
      <span onClick={editItems} class="right floated edit">
        <i class="edit outline icon"></i>
      </span>
      <span onClick={ViewItems} class="right floated view">
        <i class="envelope open outline icon"></i>
      </span>
    </div>
  );
};

export default Item;
