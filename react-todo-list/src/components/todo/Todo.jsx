import React from 'react';
import './style.css';

const Todo = () => {
  return (
    <div class='todo-card'>
      <div>
        <h2 class='todo-title'>리액트 공부하기</h2>
        <div>리액트 기초를 공부해봅시다.</div>
      </div>
      <div class='button-set'>
        <button class='todo-delete-button button'>삭제하기</button>
        <button class='todo-complete-button button'>완료</button>
      </div>
    </div>
  );
};

export {Todo};
