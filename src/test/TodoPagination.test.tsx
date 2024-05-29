import { fireEvent, render, screen } from "@testing-library/react";
import TodoPagination from "../components/TodoPagination";

const onClickPrev = jest.fn();
const onClickNext = jest.fn();

test("renders pagination", () => {
  render(
    <TodoPagination
      currentPage={0}
      handleNextPage={onClickNext}
      handlePrevPage={onClickPrev}
      totalPage={0}
    />
  );
  screen.getByRole("pagination");
  expect(screen.getByText(`Page: ${1} - ${1}`)).toBeInTheDocument();
});

test("calls next page function onClick", () => {
  render(
    <TodoPagination
      currentPage={0}
      handleNextPage={onClickNext}
      handlePrevPage={onClickPrev}
      totalPage={0}
    />
  );
  const nextEle = screen.getByRole("pagination_next");
  fireEvent.click(nextEle);
  expect(onClickNext).toHaveBeenCalledTimes(1);
});

test("calls prev page function onClick", () => {
  render(
    <TodoPagination
      currentPage={0}
      handleNextPage={onClickNext}
      handlePrevPage={onClickPrev}
      totalPage={0}
    />
  );
  const prevEle = screen.getByRole("pagination_prev");
  fireEvent.click(prevEle);
  expect(onClickPrev).toHaveBeenCalledTimes(1);
});
