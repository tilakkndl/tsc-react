import React from "react";
import Greet from "./components/Greet";
import "./App.css";
import Person from "./components/Person";
import NameList from "./components/NameList";
import Validate from "./components/Validate";
import HeadingChildren from "./components/HeadingChildren";
import Heading from "./components/Heading";
import Button from "./components/Button";
import InputElement from "./components/InputElement";
import StyleProps from "./components/StyleProps";
import LoggedIn from "./components/LoggedIn";
import { Counter } from "./components/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import Box from "./components/context/Box";

function AppCopy() {
  let person = {
    firstName: "Tilak",
    secondName: "Kandel",
  };

  const nameList = [
    { first: "Tilak", last: "Kandel" },
    { first: "Santosh", last: "Poudel" },
    { first: "Bhuwan", last: "Pantha" },
  ];
  return (
    <div className="App">
      <Greet name="Tilak" isLoggedIn={false} />
      <Person person={person} />
      <NameList name={nameList} />
      <Validate status="loading" />
      <HeadingChildren>Helow</HeadingChildren>
      <Heading>
        <h1>Children prop is passed</h1>
      </Heading>
      <Button
        handleClick={(event, id) => console.log("Button clicked", event, id)}
      />
      <InputElement
        value=""
        handleChange={(event) => {
          console.log(event.target.value);
        }}
      />
      <StyleProps style={{ border: "1px solid red", margin: "5px" }} />
      <LoggedIn />
      <Counter />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default AppCopy;
