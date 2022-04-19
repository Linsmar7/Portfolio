import React, { useState } from "react";
import { Element } from "react-scroll";
import { send } from "emailjs-com";
import Button from "../Buttons/button";

export default function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    topic: "",
    message: "",
    reply_to: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    send(process.env.SERVICE, process.env.TEMPLATE, toSend, process.env.USER)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <section className="flex flex-col mb-32">
      <Element name="contact" />
      <div className="flex flex-row items-center mb-10 ml-4">
        <span className="h-px w-10 bg-gray-500 mr-4"></span>
        <h2 className="text-3xl uppercase">Contato</h2>
      </div>
      <div className="flex flex-col w-10/12 m-auto lg:m-0 lg:w-full bg-white p-10 rounded-2xl border-purple-400 border-2">
        <h2 className="text-2xl">Me mande uma mensagem!</h2>
        <p className="mb-4">
          Estou atualmente em busca de oportunidades do nível de estágio ou
          júnior! Se você sabe de alguma vaga, se tem alguma pergunta ou apenas
          quer falar comigo sobre qualquer coisa, basta me mandar um email ou
          preencher o formulário.
        </p>
        <a
          href="mailto:linsmarvital@gmail.com"
          className="self-center lg:w-2/6 text-lg text-purple-200 p-2 lg:m-2 border-2 rounded-lg border-purple-300 tracking-widest transition duration-700 hover:shadow-3xl hover:text-white hover:bg-purple-300 h-20 flex justify-center items-center"
        >
          <div className="">linsmarvital@gmail.com</div>
        </a>
        <p className="mt-4 text-2xl">Formulário:</p>
        <form onSubmit={onSubmit} className="flex flex-col text-2xl gap-y-6">
          <div className="flex flex-wrap lg:flex-nowrap lg:flex-row lg:gap-x-10 lg:gap-y-0 gap-y-6">
            <input
              className="border rounded-lg p-4 text-purple-500 w-full"
              required
              placeholder="Nome"
              name="from_name"
              type="text"
              value={toSend.from_name}
              onChange={handleChange}
            />
            <input
              className="border rounded-lg p-4 text-purple-500 w-full"
              required
              placeholder="E-mail"
              name="reply_to"
              type="text"
              value={toSend.reply_to}
              onChange={handleChange}
            />
          </div>
          <input
            className="border rounded-lg p-4 text-purple-500"
            required
            placeholder="Assunto"
            name="topic"
            type="text"
            value={toSend.topic}
            onChange={handleChange}
          />
          <textarea
            className="border rounded-lg p-4 text-purple-500"
            required
            rows="6"
            placeholder="Escreva sua mensagem aqui"
            name="message"
            type="text"
            value={toSend.message}
            onChange={handleChange}
          />
          <Button
            type="submit"
            newClass="bg-purple-200 text-white p-2 px-6 rounded-2xl tracking-widest transition duration-700 hover:shadow-3xl hover:bg-purple-300 self-center mb-6"
          >
            Enviar
          </Button>
        </form>
      </div>
    </section>
  );
}
