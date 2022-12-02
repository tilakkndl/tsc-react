import React from "react";
type buttonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
function Button(props: buttonProps) {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 1)}>button</button>
    </div>
  );
}

export default Button;
