"use client";
import styles from "./faq.module.css";
import { createContext, Fragment } from "react";
import { FaqProvider, useFaqs } from "@/app/context/FaqContext";

const faqQuestions = [
  {
    id: "1",
    question: "How do I get started?",
    answer:
      "We all have to start somewhere. All you need to do is book a consultation with us, and we will explain the next steps.",
  },
  {
    id: "2",
    question: "Do I have to use a specific accounting system?",
    answer:
      "No! We are very adaptable to make onboarding as simple as possible. If you have a current system in place that works, we can continue using that. If not, we will help make the switch to a new system as seamless as possible.",
  },
  {
    id: "3",
    question: "Do I have to use a specific accounting system?",
    answer:
      "No! We are very adaptable to make onboarding as simple as possible. If you have a current system in place that works, we can continue using that. If not, we will help make the switch to a new system as seamless as possible.",
  },
  {
    id: "4",
    question: "Do I have to use a specific accounting system?",
    answer:
      "No! We are very adaptable to make onboarding as simple as possible. If you have a current system in place that works, we can continue using that. If not, we will help make the switch to a new system as seamless as possible.",
  },
];

export default function Faq() {
  const { faq, setFaq } = useFaqs();

  function handleToggle(id) {
    setFaq(faq ? null : id);
  }

  return (
    <section className={styles.faq}>
      {faqQuestions.map((faqQ) => (
        <Fragment key={faqQ.id}>
          <div
            className={styles.faqQuestion}
            key={faqQ.id}
            onClick={() => handleToggle(faqQ.id)}
          >
            {faqQ.question}
          </div>
          {faq === faqQ.id && (
            <div className={styles.faqAnswer}>{faqQ.answer}</div>
          )}
        </Fragment>
      ))}
    </section>
  );
}
