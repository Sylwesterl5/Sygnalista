import React from "react";
import "./App.module.scss";
import ListWrapper from "./components/Listwrapper/ListWrapper";
import Form from "./components/Form/Form.js";
//import { listApplications } from "data/ListApplications";


const listApplications = [
  {
    status: " ",
    title: "tytuł numer zgłoszenia nadany przez kompa",
    data: "data przyjęcia zgłoszenia",
    description:
      "zgloszenie główna treść czyli na potrzeby testu bla bla bla bal na bla bla bal i o bla bla bla bo bla bla bla z bla bla bla oraz bla bla bla na bla bla bla ponieważ bla bla bla aczkolwiek bla bla bla",
  }
];

class App extends React.Component {

  state = {
    items: [...listApplications],
  };

  ddItem = e => {
    e.preventDefault();

    const newItem = {
      status: e.target[0].value,
      title: e.target[1].value,
      data: e.target[2].value,
      description: e.target[3].value
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset();
  };

  return() {
    return (
      <div className="App">
        <ListWrapper items={this.state.items} />
        <Form submitFn={this.addItem} />
      </div>
    );
  }
}

export default App;
