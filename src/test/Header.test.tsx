import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders header element", () => {
  render(<Header />);
  const headerEle = screen.getByRole(/header/i);
  expect(headerEle).toBeInTheDocument();
  expect(screen.getByText(/todo/i)).toBeInTheDocument();
});
