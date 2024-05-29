import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../components/Form";

const onClick = () => null;
test("renders input element", () => {
  render(<Form setTodos={onClick} />);
  const appEle = screen.getByRole(/todo/i);
  expect(appEle).toBeInTheDocument();
});

test("updates value on change", () => {
  render(<Form setTodos={onClick} />);
  const appEle: HTMLInputElement = screen.getByRole(/todo/i);
  fireEvent.change(appEle, { target: { value: "Hello, World!" } });
  expect(appEle.value).toBe("Hello, World!");
});
