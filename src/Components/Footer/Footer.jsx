const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                DigiTools
              </h2>
            </div>
            <p className="text-gray-400 text-base max-w-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Social Links
            </h3>
            <ul className="flex gap-3">
              <li className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                <a href="#">
                  <img src="/instagram.png" className="w-5 h-5" />
                </a>
              </li>

              <li className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                <a href="#">
                  <img src="/facebook.png" className="w-5 h-5" />
                </a>
              </li>

              <li className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                <a href="#">
                  <img src="/twitter.png" className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div>© 2026 DigiTools. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="">
              Privecy Policy
            </a>
            <a href="#" className="">
              Terms of Service
            </a>
            <a href="#" className="">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
