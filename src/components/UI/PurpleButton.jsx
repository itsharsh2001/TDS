import React from 'react'
import classes from './PurpleButton.module.css'

const PurpleButton = (props) => {
  
  return (
    <button onClick={props.onClick} style={props.customStyle} className={classes.purple}>
        {props.children}
    </button>
  )
}

export default PurpleButton