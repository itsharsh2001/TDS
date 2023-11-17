// DropTarget.js
import React from "react";
import { useDrop } from "react-dnd";
import DraggableItem from "./DraggableItem";

import classes from './DropTarget.module.css'

const DropTarget = ({ items, moveItem }) => {
    const [, ref] = useDrop({
        accept: 'ITEM',
        hover: (draggedItem) => {
          if (draggedItem.index !== undefined) {
            const fromIndex = draggedItem.index;
            const toIndex = items.findIndex((item) => item.id === draggedItem.id);
            if (fromIndex !== toIndex) {
              moveItem(fromIndex, toIndex);
              draggedItem.index = toIndex;
            }
          }
        },
      });

  return (
    <div className={classes.droptarget} ref={ref}>
      {items.map((item, index) => (
        <DraggableItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};

export default DropTarget;
