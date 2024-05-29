import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "../components/TodoItem";

const todo = {
  id: "1",
  title: "123",
  isCompleted: false,
};

const completedTodo = {
  id: "1",
  title: "123",
  isCompleted: true,
};

const onClick = jest.fn();

test("renders todo item", () => {
  render(
    <TodoItem
      item={todo}
      setComplete={onClick}
    />
  );
  const todoItemEle = screen.getByRole("todo_item");
  const todoItemSvgEle = screen.getByRole(/todo_item_svg/i);
  expect(todoItemEle).toBeInTheDocument();
  expect(todoItemSvgEle).toHaveAttribute("fill", "#0d0d0d");
  expect(screen.getByText(todo.title)).toBeInTheDocument();
});

test("renders completed todo item", () => {
  render(
    <TodoItem
      item={completedTodo}
      setComplete={onClick}
    />
  );
  const todoItemEle = screen.getByRole("todo_item");
  const todoItemSvgEle = screen.getByRole(/todo_item_svg/i);
  expect(todoItemEle).toBeInTheDocument();
  expect(todoItemSvgEle).toHaveAttribute("fill", "#22C55E");
  expect(screen.getByText(todo.title)).toBeInTheDocument();
});

test("calls setComplete function onClick", () => {
  render(
    <TodoItem
      item={completedTodo}
      setComplete={onClick}
    />
  );
  const todoItemEle = screen.getByRole("todo_item");
  fireEvent.click(todoItemEle);
  expect(onClick).toHaveBeenCalledTimes(1);
});
