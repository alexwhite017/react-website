const Contact = () => {
  return (
    <div id="Contact" className="bg-neutral-900 px-4 py-16 md:py-24 lg:px-8">
      <div className="mx-auto flex max-w-screen-lg flex-col items-center gap-y-6 text-center">
        <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
        <p className="max-w-prose text-gray-400">
          I'm always open to new opportunities and conversations. Feel free to
          reach out!
        </p>
        <a
          href="mailto:alex.white017@gmail.com"
          className="rounded-full border-2 border-orange-500 px-6 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
        >
          Say Hello
        </a>
        <p className="text-sm text-gray-500">alex.white017@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
