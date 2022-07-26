import React from 'react';
import './style.css';

const Todo = ({todo, onDeleteHandler, onEditHandler}) => {
  return (
    <div className='todo-card'>
      <div className='todo-content'>
        <h3 className='todo-title'>{todo.title}</h3>
        <div>{todo.text}</div>

        <div className='button-set'>
          <button
            className='todo-delete-button button'
            onClick={onDeleteHandler}
          >
            삭제하기
          </button>
          <button
            className='todo-complete-button button'
            onClick={onEditHandler}
          >
            완료
          </button>
        </div>
      </div>
    </div>
  );
};

export {Todo};
