const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-center py-4 shadow-inner border-t border-slate-100">
      <p className="text-sm text-slate-500">© {currentYear} Admin Dashboard. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
