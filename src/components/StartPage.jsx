import { Link } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const StartPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const { user_name, user_mail, message } = form.current.elements;
    console.log({ user_name, user_mail, message });

    const formData = [];
    formData.push(user_name.value);
    formData.push(user_mail.value);
    formData.push(message.value);

    const isValid = formData.indexOf("") == -1;
    console.log(isValid);

    if (isValid) {
      emailjs
        .sendForm(
          "portfolio_jepierre_mail",
          "portfolio_template",
          form.current,
          "TNFn8XLtIsaQnrZJT"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      return true;
    }
    if (user_name.value === "") {
      document.getElementById("nameErr").style.display = "block";
      setTimeout(() => {
        document.getElementById("nameErr").style.display = "none";
      }, 6000);
    }
    if (user_mail.value === "") {
      document.getElementById("emailErr").style.display = "block";
      setTimeout(() => {
        document.getElementById("emailErr").style.display = "none";
      }, 6000);
    }
    if (message.value === "") {
      document.getElementById("messageErr").style.display = "block";
      setTimeout(() => {
        document.getElementById("messageErr").style.display = "none";
      }, 6000);
    }
  };

  return (
    <main className="flex flex-col gap-12 justify-center">
      <section className="flex flex-col sm:flex-row items-center gap-5">
        <span className="my-picture rounded-full h-40 mr-7 "></span>
        <section>
          <h1 className="my-name text-white font-bold text-2xl sm:text-4xl">
            Samuel Salazar 
          </h1>
          <p className="text-slate-300 text-sm sm:text-lg max-w-xl font-semibold">
            Soy un estudiante apasionado por el{" "}
            <span className="text-sky-400">desarrollo web</span>
          </p>
          <div className="flex flex-row w-full justify-end gap-3 px-3 mt-5">
  
          </div>
        </section>
      </section>


      <section className="tecnologias w-full flex flex-col justify-center gap-8 md:justify-between md:flex-row items-center">
        <a
          className="cv flex justify-center items-center mx-14 text-l bg-slate-600 font-semibold text-white px-6 py-2 rounded-md hover:scale-105 md:w-max md:mx-0 md:text-2xl duration-200"
          href="https://drive.google.com/uc?export=download&id=1wGrnHTKBEElHTNeOtRVMg3ZcocVUUPH-"
        >
          Descargar CV

        </a>
        <div className="flex flex-row justify-center gap-2">
          <span className="html h-8"></span>
          <span className="css h-8"></span>
          <span className="javascript h-8"></span>
          <span className="react h-8"></span>
          <span className="tailwind h-8"></span>
          <span className="node h-8"></span>
          <span className="mongo h-8"></span>
        </div>
      </section>

      <hr className="border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />

      <section className="historia w-full">
        <header className="flex items-center sm:justify-start justify-center font-bold text-2xl text-gray-100 gap-1">
          <h1>Mi historia</h1>
          <div className="icon-history"></div>
        </header>

        <div className="w-11/12 font-semibold text-slate-100 px-7 mx-2 my-8 sm:justify-center justify-start">
          <p className="text-center sm:text-start">
            Desde pequeño siempre tuve la curiosidad de saber como funcionaban
            los dispositivos electrónicos, hasta tal punto que me empecé a
            interesar en el desarrollo de aplicaciones para estos dispositivos,
            empezando por las{" "}
            <span className="text-fuchsia-400">aplicaciones móviles</span>, de
            las cuales terminé creando algunas aplicaciones que terminé
            perdiendo, pero al entrar a la universidad me atraí por las
            <span className="text-sky-400"> aplicaciones web</span> y desde
            entonces he estado estudiando lenguajes, frameworks y tecnología
            necesarias para crear este tipo de aplicaciones
          </p>
        </div>
      </section>

      <hr className="border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />

      <section className="estudios w-full">
        <header className="flex items-center font-bold text-2xl w-full justify-center sm:justify-start text-gray-100 gap-1">
          <h1>Estudios</h1>
          <div className="icon-tool"></div>
        </header>
        <div className="flex flex-col gap-10 py-6 px-6">
          <article className="grid gap-4 sm:gap-7 md:grid-cols-2 group items-center w-full">
            <span className="itm w-1/3 justify-self-center md:justify-self-start"></span>
            <section className="flex flex-col w-full justify-self-center md:justify-self-start gap-2">
              <h1 className="text-l text-center sm:text-2xl font-bold text-white md:text-start">
                Instituto Tecnológico Metropolitano
              </h1>
              <h2 className="text-l text-center sm:text-xl font-semibold text-fuchsia-400 md:text-start">
                Tecnología en Desarrollo de Software
              </h2>
              <p className="font-semibold text-sky-300 text-center md:text-start">
                julio 2021 - Junio 2025
              </p>
            </section>
          </article>

          <article className="grid gap-4 sm:gap-7 md:grid-cols-2 group w-full items-center">
            <span className="colegio w-1/3 justify-self-center md:justify-self-start"></span>
            <section className="flex flex-col w-full justify-self-center md:justify-self-start gap-2">
              <h1 className="text-l text-center sm:text-2xl font-bold text-white md:text-start">
                Instituto San Carlos de la Salle
              </h1>
              <h2 className="text-l text-center sm:text-xl font-semibold text-white md:text-start">
                <span className="text-fuchsia-400">Bachiller</span>
              </h2>
              <p className="font-semibold text-sky-300 text-center md:text-start">
                2017 - 2020
              </p>
            </section>
          </article>
        </div>
      </section>

      <hr className="border border-dotted border-gray-300 dark:border-gray-600 rounded-md" />

      <section className="contacto w-full flex flex-col">
        <header className="flex items-center font-bold text-2xl w-full justify-center sm:justify-start text-gray-100 gap-1 mb-7">
          <h1>Contáctame</h1>
          <div className="icon-contact"></div>
        </header>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6 justify-center sm:justify-start px-7 w-full"
        >
          <p
            id="nameErr"
            className="flex items-center font-bold text-sm w-full justify-center sm:justify-start text-red-400 gap-1"
          >
            Nombre inválido
          </p>
          <input
            type="text"
            name="user_name"
            placeholder="Nombre"
            className="focus:border-sky-400 duration-100 h-8 rounded-md px-6"
          />
          <p
            id="emailErr"
            className="flex items-center font-bold text-sm w-full justify-center sm:justify-start text-red-400 gap-1"
          >
            Correo inválido
          </p>
          <input
            type="email"
            name="user_mail"
            placeholder="Correo"
            className="focus:border-sky-400 duration-100 h-8 rounded-md px-6"
          />
          <p
            id="messageErr"
            className="flex items-center font-bold text-sm w-full justify-center sm:justify-start text-red-400 gap-1"
          >
            Mensaje inválido
          </p>
          <textarea
            type="text"
            name="message"
            placeholder="Mensaje"
            className="focus:border-sky-400 duration-100 h-16 rounded-md px-6 overflow-y-auto resize-none"
          />
          <button
            type="submit"
            className="bg-sky-500 rounded-lg w-1/3 duration-200"
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
};

export default StartPage;
