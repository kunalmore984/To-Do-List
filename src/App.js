import './App.css';
import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [listTitles, setListTitles] = useState([]);
  const [slectedList, setSelectedList] = useState(null);
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  
  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]); // Correctly updating the items array
      setNewItem(''); // Clear the input field after adding the item
    }
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleTitle = (t) => {
    setTitle(t.target.value);
  };

  const handleInput = () => {
    setShowInput(true);
  };

  const handleSave = () => {
    if (title.trim()) {
      setListTitles([...listTitles, title]);
      setTitle('');
    }
    setShowInput(false);
  };

  const handleListClick = (list) => {
    setSelectedList(list);
  };

  const handleDeleteList = (index) => {
    const updatedList = listTitles.filter((_,i) => i !== index);
    setListTitles(updatedList);
  };

  return(
      <div className="App">
        <h1 id='app_title'>To-Do-List</h1>
        <div className="input-container">
          <button id='new_list_btn' onClick={handleInput}>Add new List</button>
          {showInput && (
            <div>
              <input
                id='name_list'
                type="text"
                placeholder="Enter list title"
                value={title}
                onChange={handleTitle}
              />
              <button id='save_btn' onClick={handleSave}>Save title</button>
            </div>
          )}
        </div>
        <ul id = 'list_names'>
          {listTitles.map((listTitle, index) => (
            <li key={index} id="list_li" > 
              <span className="list-index">{index + 1}. </span>
              <label id='list_title' onClick = {() => handleListClick(listTitle)} > {listTitle}</label>
              <button id='delete_btn' onClick={() => handleDeleteList(index)}>Delete</button>
              
            </li>
          ))}
        </ul>
        {slectedList && 
          <div>
            <h2>{slectedList}</h2>
            <button id = 'close_list' onClick={() => setSelectedList(null)}>&#10006;</button>
            <input
              id='new_task'
              type="text"
              placeholder="Add item name"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)} // Correctly handling the input change
            />
            <button id='add_btn' onClick={handleAddItem}>Add Item</button>
            <ul>
              {items.map((item, index) => (
                <li key={index} id = 'item_name'>
                  <button onClick={() => handleDelete(index)} className="circle-btn">
                    {/* Optional: Add any icon or text inside the button */} 
                  </button>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        }
      </div>
 );
}

export default App;
