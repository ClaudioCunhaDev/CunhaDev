function Button({ text, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="bg-[#ababab]
  text-[#fff]
  rounded-[10px]
  p-3
  cursor-pointer
  h-8
  flex
  justify-center
  items-center
"
    >
      {text}
    </a>
  );
}

export default Button;
