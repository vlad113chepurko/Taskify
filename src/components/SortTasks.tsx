import "./styles/_sort.scss";
import useSortStore from "@store/useSortStore";

function SortTasks() {

  const { setSortMethod } = useSortStore();

  return (
    <div className='sort__wrapper'>
      <select
        className='sort__input'
        name="sort"
        id="sort"
        onChange={(event) => {
          setSortMethod(event.target.value);
        }}
      >
        <option value="all">All Tasks</option>
        <option value="active">Active Tasks</option>
        <option value="completed">Completed Tasks</option>
      </select>
    </div>
  );
}

export default SortTasks;