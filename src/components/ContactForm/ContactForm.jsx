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
  const [errors, setErrors] = useState({});

  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 3) return digits;
    if (digits.length <= 5) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5, 7)}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    // Validation
    if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }
    if (number.trim().length < 5) {
      newErrors.number = "Number must be at least 5 digits";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
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
    setErrors({});
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
          className={`${css.input} ${errors.name ? css.errorInput : ""}`}
        />
        {errors.name && <p className={css.error}>{errors.name}</p>}
        <label htmlFor={`${fieldId}-number`}>Number</label>
        <input
          type="tel"
          name="number"
          id={`${fieldId}-number`}
          value={number}
          onChange={handleNumberChange}
          maxLength="9"
          required
          className={`${css.input} ${errors.number ? css.errorInput : ""}`}
        />
        {errors.number && <p className={css.error}>{errors.number}</p>}
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </>
  );
}
