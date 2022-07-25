import React from 'react';
import {Todo} from '../todo/Todo';
import './style.css';

const List = ({todos, setTodos}) => {
  return (
    <div className='list-container'>
      <p className='working-title'>Working 🔥</p>
      <div className='list-working'>
        {todos.map((a, i) => {
          return (
            <div key={todos.id}>
              <Todo todos={todos} setTodos={setTodos} i={i} />
            </div>
          );
        })}
      </div>
      <p className='done-title'>Done 😃</p>
      <div className='list-done'>
        {todos.map((a, i) => {
          return (
            <div key={todos.id}>
              <Todo todos={todos} setTodos={setTodos} i={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export {List};
