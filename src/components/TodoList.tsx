import { Todo } from "../Todo.types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  setComplete: (index: number) => void;
}
function TodoList({ todos, setComplete }: TodoListProps) {
  return (
    <ol
      className='todo_list'
      role='todo_list'
    >
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            setComplete={() => setComplete(index)}
          />
        ))
      ) : (
        <p>Let's add something to do, what are you up to?</p>
      )}
    </ol>
  );
}

export default TodoList;
