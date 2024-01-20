import { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/actions";
import FilterButtons from "./FilterButtons";
import TodoList from "./TodoList";
import Footer from "./Footer";

function Todo() {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };
  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };
  return (
    <div className="min-h-full">
      <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
        <h2 className="Title mt-3 mb-6 text-2xl font-bold text-center uppercase ">
          PERSONAL TODO APP
        </h2>
        <div className="flex items-center mb-4">
          <input
            type="text"
            name="addTodoInput"
            id="addTodoInput"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Add Todo"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleAddTodoClick}
            className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            <BsPlus />
          </button>
        </div>

        <div className="flex items-center justify-between max-[580px]:block ">
          <FilterButtons />
          <div className="flex items-center mb-4 max-[580px]:justify-center">
            <input
              type="text"
              name="addTodoInput"
              id="addTodoInput"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search"
              className="p-1.5 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 max-[580px]:mt-3 max-[400px]:pr-2  max-[580px]:pr-[30%]"
            />
            <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
              <BsSearch />
            </button>
          </div>
        </div>
        <TodoList />
      </div>
      <Footer />
    </div>
  );
}

export default Todo;
