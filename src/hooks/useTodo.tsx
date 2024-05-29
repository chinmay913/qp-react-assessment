import { useReducer } from "react";
import { Todo } from "../Todo.types";

interface TodoState {
  currentPage: number;
  totalPage: number;
  totalTodos: Todo[][];
}
const initialState: TodoState = {
  currentPage: 0,
  totalPage: 0,
  totalTodos: [[]],
};

// Actions
type ADD_TODO = { type: "ADD_TODO"; payload: Todo };
type SET_COMPLETE = { type: "SET_COMPLETE"; payload: number };
type SET_PAGE = { type: "SET_PAGE"; payload: number };
type AppActions = ADD_TODO | SET_COMPLETE | SET_PAGE;

const reducer = (state: typeof initialState, action: AppActions) => {
  switch (action.type) {
    case "ADD_TODO": {
      let totalTodos = [...state.totalTodos];
      let currentPage = state.currentPage;
      let totalPage = state.totalPage;
      if (state.totalTodos[currentPage]?.length < 5) {
        const newPageTodos = [...state.totalTodos[currentPage], action.payload];
        totalTodos[currentPage] = newPageTodos;
      } else {
        currentPage += 1;
        totalPage += 1;
        totalTodos = [...state.totalTodos, [action.payload]];
      }
      return {
        ...state,
        currentPage,
        totalPage,
        totalTodos: totalTodos,
      };
    }
    case "SET_COMPLETE": {
      let totalTodos = [...state.totalTodos];
      let currentPage = state.currentPage;
      let isCompleted = !totalTodos[currentPage][action.payload].isCompleted;
      const newPageTodos = state.totalTodos[currentPage].map((todo, index) => {
        if (index === action.payload) {
          return {
            ...todo,
            isCompleted,
          };
        }
        return {
          ...todo,
        };
      });
      totalTodos[currentPage] = newPageTodos;
      return {
        ...state,
        totalTodos,
      };
    }
    case "SET_PAGE": {
      let currentPage = state.currentPage;
      if (
        currentPage + action.payload >= 0 &&
        currentPage + action.payload <= state.totalPage
      ) {
        currentPage += action.payload;
      }
      return {
        ...state,
        currentPage,
      };
    }
  }
};

export const useTodos = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setComplete = (index: number) => {
    dispatch({ type: "SET_COMPLETE", payload: index });
  };
  const setTodo = (todo: Todo) => {
    dispatch({ type: "ADD_TODO", payload: todo });
  };
  const setPage = (page: number) => {
    dispatch({ type: "SET_PAGE", payload: page });
  };
  return {
    ...state,
    setComplete,
    setTodo,
    setPage,
  };
};
