import React from "react";
type headingProps = {
  children: React.ReactNode;
};
function Heading(props: headingProps) {
  return <div>{props.children}</div>;
}
type headingProp = {
  children: React.ReactNode;
};
export default Heading;
