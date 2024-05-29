import { Todo } from "../Todo.types";

interface FormProps {
  setTodos: (todo: Todo) => void;
}
function Form({ setTodos }: FormProps) {
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement> & {
      target: {
        todo: {
          value: string;
        };
        reset: () => void;
      };
    }
  ) => {
    event.preventDefault();
    const value = event.target.todo.value;
    if (!value) {
      return;
    }
    const newTodo = {
      title: value,
      id: new Date().getTime().toString(),
      isCompleted: false,
    };
    setTodos(newTodo);
    event.target.reset();
  };

  return (
    <form
      role='form'
      className='form'
      onSubmit={handleSubmit}
    >
      <label htmlFor='todo'>
        <input
          role='todo'
          type='text'
          name='todo'
          id='todo'
          placeholder='Write your next task'
        />
      </label>

      <button>
        <svg
          clipRule='evenodd'
          fillRule='evenodd'
          strokeLinejoin='round'
          strokeMiterlimit='2'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          width={32}
          height={32}
        >
          <path
            d='m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z'
            fillRule='nonzero'
          />
        </svg>
      </button>
    </form>
  );
}

export default Form;
