const variantClasses = {
  primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
  secondary: 'bg-slate-600 hover:bg-slate-700 text-white',
  warning: 'bg-amber-500 hover:bg-amber-600 text-white',
  info: 'bg-sky-600 hover:bg-sky-700 text-white',
  danger: 'bg-rose-600 hover:bg-rose-700 text-white',
};

const sizeClasses = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg',
};

const Button = ({ children, type = 'button', variant = 'primary', size = 'md', className = '', ...props }) => {
  return (
    <button type={type} className={`rounded-lg transition font-medium focus:outline-none cursor-pointer ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
