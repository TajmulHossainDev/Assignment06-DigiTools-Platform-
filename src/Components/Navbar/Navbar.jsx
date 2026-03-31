const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto navbar bg-base-100 border-b-2 border-slate-100">
      <div className="navbar-start">
        <a className="btn btn-ghost font-bold text-3xl text-violet-500">DigiTools</a>
      </div>
      <div className="navbar-center flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-3">
        <a href=""> <img src="/src/assets/products/shopping-cart.png" ></img> </a>
        <p>Login</p>
        <a className="bg-violet-500 text-white font-bold  px-4 py-2 rounded-full">Get Started</a>
      </div>
    </div>
  );
};

export default Navbar;
