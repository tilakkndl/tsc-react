import React from "react";
type nameListProp = {
  name: { first: string; last: string }[];
};
function NameList(props: nameListProp) {
  return (
    <div>
      {props.name.map((name) => (
        <li>
          {name.first} {name.last}
        </li>
      ))}
    </div>
  );
}

export default NameList;
