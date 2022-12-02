import React from "react";
type validatProps = {
  status: "loading" | "error" | "success";
};
function Validate(props: validatProps) {
  let message;
  if (props.status === "loading") {
    message = "still loading";
  } else if (props.status === "error") {
    message = "Error occured";
  } else {
    message = "Successful";
  }
  return <div>{message}</div>;
}

export default Validate;
