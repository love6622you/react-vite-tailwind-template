function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer footer-center text-primary-content bg-gray-700 p-10">
      <p>Copyright &copy; {footerYear} All rights reserved</p>
    </footer>
  );
}

export default Footer;
