import React from 'react'
type heaingProps = {
    children: string
}
function HeadingChildren(props: heaingProps) {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default HeadingChildren
