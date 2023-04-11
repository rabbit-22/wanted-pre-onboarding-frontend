import React, { useCallback, useState } from 'react';
import { TodoProps } from '../../types/todo';
import { updateTodo } from '../../api/todo';
import DeleteButton from './DeleteButton';
import SubmitButton from './SubmitButton';

/*
 * Todo 개별 요소
 */

const TodoItem = ({ todo }: { todo: TodoProps }) => {
  const [value, setValue] = useState('');
  const [isChecked, setIsChecked] = useState(todo.isCompleted);
  const [isModify, setIsModify] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleCheck = useCallback(async () => {
    await updateTodo(todo.todo, !isChecked, todo.id);
    setIsChecked((prev) => !prev);
  }, [isChecked]);

  const handleModify = () => {
    setIsModify((prev) => !prev);
    setValue('');
  };
  return (
    <li style={{ listStyle: 'none', marginBottom: 5 }}>
      {isModify ? (
        <>
          <label>
            <input
              type="checkbox"
              checked={isChecked || false}
              onChange={handleCheck}
            />
          </label>
          <input
            style={{ marginRight: 3 }}
            data-testid="modify-input"
            onChange={handleChange}
            defaultValue={todo.todo}
          />
          <SubmitButton todo={todo} setIsModify={setIsModify} value={value} />
          <button data-testid="cancel-button" onClick={handleModify}>
            취소
          </button>
        </>
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              checked={isChecked || false}
              onChange={handleCheck}
            />
            <span style={{ marginRight: 3 }}>{todo.todo}</span>
          </label>
          <button
            style={{ marginRight: 3 }}
            data-testid="modify-button"
            onClick={handleModify}
          >
            수정
          </button>
          <DeleteButton id={todo.id} />
        </>
      )}
    </li>
  );
};

export default TodoItem;
