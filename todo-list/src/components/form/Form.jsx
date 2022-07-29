import React, {useState} from 'react';
import './style.css';

const Form = ({todos, setTodos}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (title === '' || text === '') {
      alert('empty!');
    } else {
      const todo = {
        id: todos.length + 1,
        title: title,
        text: text,
        isDone: false,
      };
      setTodos([...todos, todo]);
      console.log(todos);
      // input 창 초기화
      setTitle('');
      setText('');
    }
  };

  return (
    <form className='add-form'>
      <div className='input-group'>
        <p className='title'>제목</p>
        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <p className='content'>내용</p>
        <input
          type='text'
          name='text'
          value={text}
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
