import React from 'react';
import {Todo} from '../todo/Todo';
import './style.css';

const List = () => {
  return (
    <div className='list-container'>
      <p className='working-title'>Working 🔥</p>
      <div className='list-working'>
        <Todo />
      </div>
      <p className='done-title'>Done 😃</p>
      <div className='list-done'>
        <Todo />
      </div>
    </div>
  );
};

export {List};
