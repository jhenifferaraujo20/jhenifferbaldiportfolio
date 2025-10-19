const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 md:px-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto text-center">        
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
        <p className="text-gray-400">
          © {currentYear} Jheniffer Araujo Baldi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;