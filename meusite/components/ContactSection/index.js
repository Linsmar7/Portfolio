/* eslint-disable no-undef */
import React from "react";
import { Element } from "react-scroll";
import Button from "../Buttons/button";
import emailjs from "emailjs-com";
import { useTranslation } from "next-i18next";

export default function Contact() {
  const { t } = useTranslation();
  async function onSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    // eslint-disable-next-line no-useless-escape
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      alert(t("contact.invalidEmail"));
      return false;
    }

    // fetch("/api/mail", {
    //   method: "post",
    //   body: JSON.stringify(formData),
    // });
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE,
        process.env.NEXT_PUBLIC_TEMPLATE,
        formData,
        process.env.NEXT_PUBLIC_USER
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert(t("contact.dialogSucess"));
        },
        function (error) {
          console.log("FAILED...", error);
          alert(t("contact.dialogFail"));
        }
      );
  }

  return (
    <section className="flex flex-col mb-32">
      <Element name="contact" />
      <div className="flex flex-row items-center mb-10 ml-4">
        <span className="h-px w-10 bg-gray-500 mr-4"></span>
        <h2 className="text-3xl uppercase">{t("contact.label")}</h2>
      </div>
      <div className="flex flex-col w-10/12 m-auto lg:m-0 lg:w-full bg-white dark:bg-purple-500 p-10 rounded-2xl border-purple-400 border-2">
        <h2 className="text-2xl">{t("contact.h1")}</h2>
        <p className="mb-4">{t("contact.p")}</p>
        <a
          href="mailto:linsmarvital@gmail.com"
          className={
            "self-center lg:w-2/6 text-lg text-purple-200 p-2 lg:m-2 border-2 rounded-lg border-purple-300 tracking-widest transition duration-700 hover:shadow-2xl hover:text-white hover:bg-purple-300 h-20 flex justify-center items-center"
          }
        >
          <div className="">linsmarvital@gmail.com</div>
        </a>
        <p className="mt-4 text-2xl">{t("contact.formlabel")}</p>
        <form onSubmit={onSubmit} className="flex flex-col text-2xl gap-y-6">
          <div className="flex flex-wrap lg:flex-nowrap lg:flex-row lg:gap-x-10 lg:gap-y-0 gap-y-6">
            <input
              className="border rounded-lg p-4 text-purple-500 w-full dark:bg-purple-500 dark:border-purple-400 dark:text-white"
              required
              placeholder={t("contact.nameph")}
              name="name"
              type="text"
            />
            <input
              className="border rounded-lg p-4 text-purple-500 w-full dark:bg-purple-500 dark:border-purple-400 dark:text-white"
              required
              placeholder={t("contact.emailph")}
              name="email"
              type="text"
            />
          </div>
          <input
            className="border rounded-lg p-4 text-purple-500 dark:bg-purple-500 dark:border-purple-400 dark:text-white"
            required
            placeholder={t("contact.subjectph")}
            name="topic"
            type="text"
          />
          <textarea
            className="border rounded-lg p-4 text-purple-500 dark:bg-purple-500 dark:border-purple-400 dark:text-white"
            required
            rows="6"
            placeholder={t("contact.messageph")}
            name="message"
            type="text"
          />
          <Button
            type="submit"
            newClass="bg-purple-200 text-white p-2 px-6 rounded-2xl tracking-widest transition duration-700 hover:shadow-2xl hover:bg-purple-300 self-center mb-6"
          >
            {t("contact.button")}
          </Button>
        </form>
      </div>
    </section>
  );
}
