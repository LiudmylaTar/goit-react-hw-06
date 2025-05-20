import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/store";

export default function ContactForm() {
  const dispatch = useDispatch();
  const fieldId = useId();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.username.value;
    const number = form.elements.number.value;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor={`${fieldId}-username`}>Name</label>
        <input type="text" name="username" id={`${fieldId}-username`} />
        <label htmlFor={`${fieldId}-number`}>Number</label>
        <input
          type="tel"
          name="number"
          id={`${fieldId}-number`}
          maxLength="9"
          required
        />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </>
  );
}
