import React, { useCallback, useEffect, useState } from "react";
import './Root.module.scss';
import ListWrapper from "../../Listwrapper/ListWrapper";
import Form from "../../Form/Form";
import { listApplications } from "data/ListApplications";
import SignIn from '../../SignIn/SignIn';
import {getAllWiadomosci} from 'services/UseAnoucmans';
// import { Test } from "../../../Test/Test";

let i = 0;
const givemeid = () => {
  return i++;
};

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = useCallback((e) => {
    e.preventDefault();

    const newItem = {
      id: givemeid(),
      status: e.target[0].value,
      title: e.target[1].value,
      data: new Date().toISOString(),
      description: e.target[2].value,
    };

    // Test(e);

    setItems((prevState) => [...prevState, newItem]);

    e.target.reset();
  }, []);

  

  const signIn = useCallback((e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    e.target.reset();

  },[])

  

  useEffect(()=>{    // na montowanie komponenetu
    
    getAllWiadomosci().then(data=>{

      setItems(data)
    })

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
