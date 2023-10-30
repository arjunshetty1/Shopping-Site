import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Navbar = () => {
  return (
    <>
      <div className="links flex gap-2 justify-end pr-5  text-white bg-black w-full p-3">
        <Link to="/" className="hover:text-red-300">
          Shop
        </Link>
        <Link to="/cart" className="hover:text-red-300">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
