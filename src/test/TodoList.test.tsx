import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

const todos = [
  {
    id: "1",
    title: "123",
    isCompleted: false,
  },
];

const onClick = jest.fn();

test("renders todo list", () => {
  render(
    <TodoList
      todos={todos}
      setComplete={onClick}
    />
  );
  screen.getByRole("todo_list");
  expect(screen.getByText(todos[0].title)).toBeInTheDocument();
});
