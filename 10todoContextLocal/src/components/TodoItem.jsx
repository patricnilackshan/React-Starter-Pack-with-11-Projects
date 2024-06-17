import { useRef, useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  const textRef = useRef();

  return (
    <div
      className={`flex border mx-4 md-1 border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full rounded-lg transition-all duration-300 ${
          isTodoEditable
            ? "border-blue-500 px-3 py-2 bg-[#ccbed7] shadow focus:border-blue-600 focus:shadow-lg"
            : "border-transparent bg-[#ccbed7] text-gray-500"
        }`}
        onChange={(e) => setTodoMsg(e.target.value)}
        value={todoMsg}
        readOnly={!isTodoEditable}
        ref={textRef}
      />
      <button
        disabled={todo.completed}
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
            textRef.current.focus();
          }
        }}
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
