import { Todo } from "../Todo.types";

interface TodoItemProps {
  item: Todo;
  setComplete: () => void;
}
function TodoItem({ item, setComplete }: TodoItemProps) {
  return (
    <li
      role='todo_item'
      id={item?.id}
      className='todo_item'
      onClick={setComplete}
    >
      <button className='todo_items_left'>
        <svg
          role='todo_item_svg'
          clipRule='evenodd'
          fillRule='evenodd'
          strokeLinejoin='round'
          strokeMiterlimit='2'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          width={34}
          height={34}
          stroke='#22C55E'
          fill={item.isCompleted ? "#22C55E" : "#0d0d0d"}
        >
          <circle
            cx='11.998'
            cy='11.998'
            fillRule='nonzero'
            r='9.998'
          />
        </svg>
        <p style={item.isCompleted ? { textDecoration: "line-through" } : {}}>
          {item?.title}
        </p>
      </button>
    </li>
  );
}

export default TodoItem;
