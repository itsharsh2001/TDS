import React from 'react'
import classes from './WhiteButton.module.css'

const WhiteButton = (props) => {
  return (
    <button onClick={props.onClick} className={classes.white}>
        {props.children}
    </button>
  )
}

export default WhiteButton