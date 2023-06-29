function Button({ text, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded items-center"
    >
      {text}
    </a>
  );
}

export default Button;
