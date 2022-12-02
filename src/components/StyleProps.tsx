import React from 'react'
type styleProps = {
    style: React.CSSProperties;
}
function StyleProps(props: styleProps) {
  return (
    <div style={props.style}>
      The style is given by props.
    </div>
  )
}

export default StyleProps
