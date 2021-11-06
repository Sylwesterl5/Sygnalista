import React, { useCallback, useState } from "react";
import "./App.module.scss";
import ListWrapper from "./components/Listwrapper/ListWrapper";
import Form from "./components/Form/Form.js";
import { listApplications } from "data/ListApplications";

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
      data: e.target[2].value,
      description: e.target[3].value,
    };

    setItems((prevState) => [...prevState, newItem]);

    e.target.reset();
  }, []);

  return (
    <div className="App">
      <ListWrapper items={items} />
      <Form submitFn={addItem} />
    </div>
  );
};

export default App;
