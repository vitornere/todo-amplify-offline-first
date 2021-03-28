import { DataStore } from 'aws-amplify';
import React, { useCallback, useEffect, useState } from 'react';
import CreateTodo from '../../components/CreateTodo';
import TodoItem from '../../components/TodoItem';
import { Todo } from '../../models';
import { Container } from './styles';

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = useCallback(async () => {
    const todosData = await DataStore.query(Todo);
    setTodos(todosData);
  }, []);

  useEffect(() => {
    const subscription = DataStore.observe(Todo).subscribe(todoMsg => {
      getTodos();
    });
    getTodos();
    return () => subscription.unsubscribe();
  }, [getTodos]);

  return (
    <Container>
      <h1>Amplify Todos</h1>
      <CreateTodo />
      <div id="list">
        <h1>List Todos</h1>

        <ul>
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Todos;
