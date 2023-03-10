import React from 'react'


const Lable = (props) => {
  return (
    <label className={props.className} for={props.for}>{props.data}</label>

  )
}

export default Lable
