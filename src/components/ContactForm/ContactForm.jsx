import { useId, useState } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

export default function ContactForm() {
  const dispatch = useDispatch();
  const fieldId = useId();

  // For validation and formatting number
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState(null);

  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 3) return digits;
    if (digits.length <= 5) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5, 7)}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation
    if (name.trim().length < 3) {
      setError("Name must be at least 3 characters");
      return;
    }
    if (number.trim().length < 5) {
      setError("Number must be at least 5 digits");
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));
    setName("");
    setNumber("");
    setError(null);
  };

  // formatting number
  const handleNumberChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setNumber(formatted);
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor={`${fieldId}-username`}>Name</label>
        <input
          type="text"
          name="username"
          id={`${fieldId}-username`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor={`${fieldId}-number`}>Number</label>
        <input
          type="tel"
          name="number"
          id={`${fieldId}-number`}
          value={number}
          onChange={handleNumberChange}
          maxLength="9"
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </>
  );
}
