import React, {useState} from 'react';
import './style.css';

const Form = () => {
  return (
    <form className='add-form'>
      <div className='input-group'>
        <p className='title'>제목</p>
        <input type='text' />
        <p className='content'>내용</p>
        <input type='text' />
      </div>
      <button className='add-button'>추가하기</button>
    </form>
  );
};

export {Form};
