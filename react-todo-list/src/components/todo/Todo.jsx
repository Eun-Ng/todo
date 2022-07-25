import React from 'react';
import './style.css';

const Todo = ({todos, setTodos, i}) => {
  return (
    <div className='todo-card'>
      <div className='todo-content'>
        <h3 className='todo-title'>{todos[i].title}</h3>
        <div>{todos[i].body}</div>

        <div className='button-set'>
          <button className='todo-delete-button button'>삭제하기</button>
          <button className='todo-complete-button button'>완료</button>
        </div>
      </div>
    </div>
  );
};

export {Todo};
