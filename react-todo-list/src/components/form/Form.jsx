import React, {useState} from 'react';
import './style.css';

const Form = ({todos, setTodos}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const onSubmitHandler = () => {
    setTodos([...todos, {id: todos.length + 1, title: todos.title}]);
  };

  return (
    <form className='add-form'>
      <div className='input-group'>
        <p className='title'>제목</p>
        <input
          type='text'
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <p className='content'>내용</p>
        <input
          type='text'
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <button className='add-button' onClick={onSubmitHandler}>
        추가하기
      </button>
    </form>
  );
};

export {Form};
