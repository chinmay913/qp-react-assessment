import Form from "../components/Form";
import TodoList from "../components/TodoList";
import TodoPagination from "../components/TodoPagination";
import { useTodos } from "../hooks/useTodo";

export default function TodoModule() {
  const { currentPage, totalTodos, totalPage, setTodo, setComplete, setPage } =
    useTodos();
  const handleNextPage = () => {
    setPage(1);
  };
  const handlePrevPage = () => {
    setPage(-1);
  };
  return (
    <>
      <Form setTodos={setTodo} />
      <TodoPagination
        currentPage={currentPage}
        totalPage={totalPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
      <TodoList
        todos={totalTodos[currentPage]}
        setComplete={setComplete}
      />
    </>
  );
}
