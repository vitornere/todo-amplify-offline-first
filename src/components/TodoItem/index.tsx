import React, { useCallback } from 'react';
import { DataStore } from 'aws-amplify';
import { Container } from './styles';
import { Todo } from '../../models';

type Props = {
  todo: Todo;
};

const TodoItem: React.FC<Props> = ({ todo }) => {
  const $delete = useCallback(async () => {
    try {
      DataStore.delete(todo);
    } catch (err) {
      console.log(err);
    }
  }, [todo]);

  return (
    <Container>
      <li>
        {todo.name}
        <div>
          <button type="button" onClick={$delete}>
            Excluir
          </button>
        </div>
      </li>
    </Container>
  );
};

export default TodoItem;
