const Card = ({ children, className = '' }) => {
  return <div className={`w-full bg-white rounded-2xl shadow-lg border border-slate-100 p-8 ${className}`}>{children}</div>;
};

export default Card;
