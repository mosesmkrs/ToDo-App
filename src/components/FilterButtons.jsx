import { useDispatch, useSelector } from "react-redux";
import { filterTodos } from "../redux/actions";
import { markAllCompleted } from "../redux/actions";

function FilterButtons() {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };
  return (
    <div className="flex space-x-4 items-center max-[580px]:justify-center">
      <select
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

      <button
        onClick={() => dispatch(markAllCompleted())}
        className="text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded"
      >
        Mark All Completed
      </button>
    </div>
  );
}

export default FilterButtons;