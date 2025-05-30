import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task }) => {  // Fixed: Removed double parentheses around props
  return (
    <div className="Todo">
      <p>{task}</p>  {/* Fixed: Use `task` directly if it's a string */}
      <div>  {/* Fixed: changed 'di' to 'div' (was not actually an issue before, but clarified) */}
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />  {/* Changed second icon to faTrash */}
      </div>
    </div>
  );
};

export default Todo;