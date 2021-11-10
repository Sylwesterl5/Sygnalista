import React, { useCallback, useEffect, useState } from "react";
import './Root.module.scss';
import ListWrapper from "../../Listwrapper/ListWrapper";
import Form from "../../Form/Form";
import { listApplications } from "data/ListApplications";
import SignIn from '../../SignIn/SignIn';
import {getData} from 'services/UseAnoucmans';

let i = 0;
const givemeid = () => {
  return i++;
};

const App = () => {
  const [items, setItems] = useState([...listApplications]);

  const addItem = useCallback((e) => {
    e.preventDefault();

    const newItem = {
      id: givemeid(),
      status: e.target[0].value,
      title: e.target[1].value,
      data: new Date().toISOString(),
      description: e.target[2].value,
    };

    setItems((prevState) => [...prevState, newItem]);

    e.target.reset();
  }, []);

  

  const signIn = useCallback((e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    e.target.reset();

  },[])

  

  useEffect(()=>{
    
    getData().then(data=>{console.log(data)})

  },[])
  return (
    <div className="App">
      <ListWrapper items={items} />
      <Form submitFn={addItem} />
      {/* <SignIn submitSignIn={signIn} /> */}
      
    </div>
  );
};

export default App;
