function Contact() {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <p className="text-white-200 md:mt-10 my-5 text-center italic">
        I&apos;m passionate about tech and innovation and excited to help bring
        your ideas to life. <br />
        Let&apos;s connect!
      </p>
      <a href="mailto:nandakumarblj@gmail.com">
        <button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer px-6 py-3 rounded-3xl font-semibold">
          Mail me!
        </button>
      </a>
    </div>
  );
}

export default Contact;
