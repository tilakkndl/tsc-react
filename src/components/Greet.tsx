import React from "react";
type GreetPorps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
function Greet(props: GreetPorps) {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn
        ? ` <h2>
        Welcome {props.name} You have ${props.messageCount} unread messages
      </h2>`
        : "Welcome Guest"}
    </div>
  );
}

export default Greet;
