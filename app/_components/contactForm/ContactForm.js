"use client";
import { useForm } from "react-hook-form";
import styles from "./contactForm.module.css";
import Button from "../button/Button";
function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();
  console.log(register);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <section className={styles.contactContainer}>
        <div>
          <h1 className={styles.hOne}>
            CONNECT <br /> WITH US
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.topInput}>
            <input className={styles.formInput} type="text" />{" "}
            <input className={styles.formInput} type="text" />
          </div>
          <div className={styles.smile}>
            <input className={styles.formInput} type="email" />
          </div>
          <div>
            <textarea className={styles.area} rows="6" />
          </div>
          <Button type="send">Send</Button>
        </form>
      </section>
    </>
  );
}

export default ContactForm;
