import React, { useCallback, useState } from 'react';
import { DataStore } from 'aws-amplify';
import { Container } from './styles';
import { Todo } from '../../models';

const CreateTodo: React.FC = () => {
  const [name, setName] = useState('');

  const submit = useCallback(async () => {
    try {
      await DataStore.save(
        new Todo({
          name,
        }),
      );
      setName('');
    } catch (err) {
      console.log(err);
    }
  }, [name]);

  return (
    <Container>
      <label htmlFor="todo-input">Criar novo Todo</label>
      <input
        id="todo-input"
        name="todo-input"
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <button type="button" onClick={submit}>
        Adicionar
      </button>
    </Container>
  );
};

export default CreateTodo;
