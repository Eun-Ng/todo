import React from 'react';
import {Todo} from '../todo/Todo';
import './style.css';

const List = ({todos, setTodos}) => {
  const onDeleteHandler = (id) => {
    const copyTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(copyTodos);
  };

  const onEditHandler = (todoId) => {
    const copyTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return {...todo};
      }
    });
    setTodos(copyTodos);
  };

  return (
    <div className='list-container'>
      <p className='working-title'>Working 🔥</p>
      <div className='list-working'>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHandler={onDeleteHandler}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <p className='done-title'>Done 😃</p>
      <div className='list-done'>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHandler={onDeleteHandler}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export {List};
