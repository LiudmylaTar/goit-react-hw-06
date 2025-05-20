import css from "./SearchBox.module.css";

export default function SearchBox() {
  return (
    <div className={css.wrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.fild}
        type="text"
        name="text"
        placeholder="Please start input name for search"
      />
    </div>
  );
}
