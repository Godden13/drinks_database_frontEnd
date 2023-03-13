import { useState } from 'react';
import './SideBar.css';

export default function SideBar() {
  const [show, setShow] = useState(false);

  const handleclick = ()=>{
    setShow(true)
  }

  return (
    <div>
      <div className="category">
        <input type='checkbox'>Category</input>
      </div>
      <div className="glass">
        <input>Glass1</input>
      </div>
      <div className="ingredient">
        <input>ingredient1</input>
      </div>
    </div>
  );
}