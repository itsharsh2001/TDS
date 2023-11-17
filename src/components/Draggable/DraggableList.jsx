import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DensityLargeOutlinedIcon from '@mui/icons-material/DensityLargeOutlined';

import classes from './DraggableList.module.css';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const items = [
  { id: 'item-1', content: 'HSN/SAC Code' },
    { id: 'item-2', content: 'Vendor' },
    { id: 'item-3', content: 'GL Code' },
    { id: 'item-4', content: 'Invoice Description' },
    { id: 'item-5', content: 'PO Description' },
];

const DraggableList = (props) => {
  const [state, setState] = useState({ items });

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = reorder(
      state.items,
      result.source.index,
      result.destination.index
    );

    setState({ items: reorderedItems });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div className={classes.list} {...provided.droppableProps} ref={provided.innerRef}>
            {state.items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    className={classes.item}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <DensityLargeOutlinedIcon className={classes.icon1}/>
                    {item.content}
                    {/* <DeleteOutlinedIcon className={classes.icon}/> */}
                  </div>
                )}
              </Draggable>
            ))}
            
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;
