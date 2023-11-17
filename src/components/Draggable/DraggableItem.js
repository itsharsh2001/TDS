// DraggableList.js
import React,{useState} from 'react';
import { useDrag } from 'react-dnd';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DensityLargeOutlinedIcon from '@mui/icons-material/DensityLargeOutlined';

import classes from './DraggableItem.module.css'

const DraggableItem = ({ item, index }) => {
  const [{ isDragging }, ref] = useDrag({
    type: 'ITEM',
    item: { id: item.id, index },
  });

  

  return (
    <div
      className={classes.draggableitem}
      ref={ref}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab',
      }}
    >
      <DensityLargeOutlinedIcon className={classes.icon1}/>
      {item.content}
      <DeleteOutlinedIcon className={classes.icon}/>
    </div>
  );
};

export default DraggableItem;
