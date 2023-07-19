import React, { useState } from 'react';

const MainContainer = () => {
  const [containerItems, setContainerItems] = useState([
    { id: 1, top: 50, left: 50, image: 'https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg', isDragging: false, initialPosition: { x: 0, y: 0 } },
    { id: 2, top: 100, left: 200, image: 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_640.jpg', isDragging: false, initialPosition: { x: 0, y: 0 } },
    { id: 3, top: 200, left: 100, image: 'https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_640.jpg', isDragging: false, initialPosition: { x: 0, y: 0 } },
    // ...more container items
  ]);

  const handleMouseDown = (itemId, event) => {
    const updatedContainerItems = containerItems.map(item =>
      item.id === itemId ? { ...item, isDragging: true, initialPosition: { x: event.clientX, y: event.clientY } } : item
    );
    setContainerItems(updatedContainerItems);
  };

  const handleMouseMove = (itemId, event) => {
    const updatedContainerItems = containerItems.map(item =>
      item.id === itemId && item.isDragging
        ? {
            ...item,
            top: item.top + (event.clientY - item.initialPosition.y),
            left: item.left + (event.clientX - item.initialPosition.x),
            initialPosition: { x: event.clientX, y: event.clientY },
          }
        : item
    );
    setContainerItems(updatedContainerItems);
  };

  const handleMouseUp = () => {
    const updatedContainerItems = containerItems.map(item => ({ ...item, isDragging: false }));
    setContainerItems(updatedContainerItems);
  };

  return (
    <div className="main-container">
      {containerItems.map(item => (
        <div
          key={item.id}
          className="container-item"
          style={{ top: `${item.top}px`, left: `${item.left}px` }}
          onMouseDown={event => handleMouseDown(item.id, event)}
          onMouseMove={event => handleMouseMove(item.id, event)}
          onMouseUp={handleMouseUp}
        >
          <img src={item.image} alt={`Image ${item.id}`} />
          <div className="item-content">
            <h3>Container Item {item.id}</h3>
            <p>Description goes here...</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainContainer;
