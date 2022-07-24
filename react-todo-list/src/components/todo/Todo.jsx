import React from 'react';
import './style.css';

const Todo = () => {
  return (
    <div className='todo-card'>
      <div className='todo-content'>
        <h3 className='todo-title'>리액트 공부하기</h3>
        <div>리액트 기초를 공부해봅시다.</div>

        <div className='button-set'>
          <button className='todo-delete-button button'>삭제하기</button>
          <button className='todo-complete-button button'>완료</button>
        </div>
      </div>
    </div>
  );
};

export {Todo};
