const Link = ({ href = '#', children, className = '', ...props }) => {
  return (
    <a href={href} className={`text-indigo-600 hover:text-indigo-800 transition hover:underline ${className}`} {...props}>
      {children}
    </a>
  );
};

export default Link;
