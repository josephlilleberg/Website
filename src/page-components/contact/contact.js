import React, { useState } from "react";
import { Form, useFormik, useField, FormikProvider } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { navigate } from "gatsby";

const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div
      className={`mt-1 ${
        showFeedback ? (meta.error ? "invalid" : "valid") : ""
      }`}
    >
      <div className="space-between flex w-full items-center justify-between">
        <label
          htmlFor={props.id}
          className="ml-1 select-none font-light text-gray-700"
        >
          {label}
        </label>{" "}
        {showFeedback ? (
          <div
            id={`${props.id}-feedback`}
            aria-live="polite"
            className="feedback text-xs "
          >
            {meta.error ? meta.error : "✓"}
          </div>
        ) : null}
      </div>
      <input
        {...props}
        {...field}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
        className="form-style my-1 w-full text-sm font-light text-gray-700 md:text-base"
      />
      <div
        className="ml-1 text-xs text-gray-500"
        id={`${props.id}-help`}
        tabIndex="-1"
      >
        {helpText}
      </div>
    </div>
  );
};

const TextAreaLiveFeedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div
      className={`mt-1 ${
        showFeedback ? (meta.error ? "invalid" : "valid") : ""
      }`}
    >
      <div className="space-between flex w-full items-center justify-between">
        <label
          htmlFor={props.id}
          className="ml-1 select-none font-light text-gray-700"
        >
          {label}
        </label>{" "}
        {showFeedback ? (
          <div
            id={`${props.id}-feedback`}
            aria-live="polite"
            className="feedback text-xs "
          >
            {meta.error ? meta.error : "✓"}
          </div>
        ) : null}
      </div>

      <textarea
        {...props}
        {...field}
        className="form-style h-15vh mt-2 w-full px-3 py-2 text-sm font-light text-gray-700 sm:h-[25vh] md:text-base"
        rows="3"
      />

      <div
        className="ml-1 text-xs text-gray-500"
        id={`${props.id}-help`}
        tabIndex="-1"
      >
        {helpText}
      </div>
    </div>
  );
};

const ContactForm = (prop) => {
  const [sent, setSent] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {
      //await sleep(500);
      //alert(JSON.stringify(values, null, 2));
      if (!sent) {
        setSent(true)

        emailjs
          .send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_TEMPLATE_ID,
            values,
            process.env.EMAILJS_PUBLIC_KEY,
          )
          .then(
            (result) => {
              navigate("/contact-successful");
            },
            (error) => {
              navigate("/contact-failure");
            }
          );

        formik.resetForm();
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(1, "Must be non-empty")
        .required("First name is required"),
      lastName: Yup.string()
        .min(1, "Must be non-empty")
        .required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .min(1, "Must be non-empty")
        .required("Message is required"),
    }),
  });

  return (
    <FormikProvider value={formik}>
      <Form
        id="form"
        className={`grid w-[90vw] max-w-[500px] grid-cols-1 gap-2`}
      >
        <div className="flex justify-center">
          <p className="select-none text-4xl font-light tracking-tight smmd:text-5xl md:mb-4 lg:text-6xl">
            Get In Touch
          </p>
        </div>
        <input
          type="hidden"
          name="access_key"
          value="f68d4916-7d75-409d-b6f2-5f6dfb617511"
        />
        <TextInputLiveFeedback
          label="First name"
          id="firstName"
          name="firstName"
          helpText=""
          type="text"
          placeholder="What is your first name?"
        />
        <TextInputLiveFeedback
          label="Last name"
          id="lastName"
          name="lastName"
          helpText=""
          type="text"
          placeholder="What is your last name?"
        />
        <TextInputLiveFeedback
          label="Email"
          id="email"
          name="email"
          helpText=""
          type="email"
          placeholder="What is your email?"
        />
        <TextAreaLiveFeedback
          label="Message"
          id="message"
          name="message"
          helpText=""
          type="textarea"
          placeholder="What would you like to say?"
        />

        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />

        <div className="pt-2">
          <button
            disabled={sent}
            type="submit"
            className="rounded-xl border bg-lm-primary-soft px-4 py-2 text-zinc-50 shadow-md hover:bg-lm-primary disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </div>
      </Form>
    </FormikProvider>
  );
};

const Contact = () => {
  return (
    <>
      <div className="z-0 mx-auto  max-w-screen-xl bg-zinc-50  ">
        <div className="relative flex w-full justify-center pt-[15vh]">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
