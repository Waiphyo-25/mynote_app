import React, {
  useState,
  useEffect
} from 'react';
import Layout from '../Layout/Layout';
import {
  useHistory
} from 'react-router-dom';
import axios from 'axios';

const EditItem = () => {
  const history = useHistory();

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');


  console.log("location", history.location);
  useEffect(() => {
    setId(history.location.state.id);
  }, [])

  const handleOnSubmit = (id, e) => {
    e.preventDefault();
    axios.patch(`http://localhost:3001/items/${id}`, {
        title: title,
        desc: desc
      })
      .then(() => {
        history.push('/');
        //   getItems();
        //   setItems();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  console.log('history from add item : ', history);
  return ( <
    Layout >
    <
    div class = "column" >
    <
    form onSubmit = {
      (e) => handleOnSubmit(id, e)
    }
    class = "ui form" >
    <
    div class = "field" >
    <
    label > Title < /label> <
    input type = "text"
    name = "title"
    placeholder = "Enter title"
    value = {
      title
    }
    onChange = {
      (e) => setTitle(e.target.value)
    }
    /> <
    /div> <
    div class = "field" >
    <
    label > Description < /label> <
    input type = "text"
    name = "description"
    placeholder = "Enter description"
    value = {
      desc
    }
    onChange = {
      (e) => setDesc(e.target.value)
    }
    /> <
    /div> <
    button class = "ui button"
    type = "submit" > Add Item < /button> <
    /form> <
    /div> <
    /Layout>
  )
}

export default EditItem;