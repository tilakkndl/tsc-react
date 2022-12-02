import React from "react";
type personProp = {
  person: {
    firstName: string;
    secondName: string;
  };
};
function Person(props: personProp) {
  console.log(props.person.firstName);
  return (
    <div>
      firstNmae: {props.person.firstName} LastName: {props.person.secondName}
    </div>
  );
}

export default Person;
