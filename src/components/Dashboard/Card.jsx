import React from 'react'
import AddIcon from "@mui/icons-material/Add";

import classes from './Card.module.css'

const Card = (props) => {
  return (
    <div className={classes.card}>
        <img src={props.img} alt="" />
        <section>
            <span>
                <div>
                    <h3>{props.name}</h3>
                    <p>Graph</p>
                </div>
                <AddIcon className={classes.addicon}/>
            </span>
            <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose</p>
        </section>
    </div>
  )
}

export default Card