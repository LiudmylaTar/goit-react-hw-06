import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const nameSearch = useSelector((state) => state.filters.name);
  const handleSearch = (event) => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div className={css.wrapper}>
      <p>Find contacts by name</p>
      <input
        onChange={handleSearch}
        className={css.fild}
        value={nameSearch}
        type="text"
        name="text"
        placeholder="Please start input name for search"
      />
    </div>
  );
}
