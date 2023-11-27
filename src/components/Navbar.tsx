import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartProducts: any = useSelector<any>((state) => state.cart);
  return (
    <nav
      className=" bg-slate-800 text-white flex  
      justify-between border border-gray-800"
    >
      <Link
        className="font bold my-2 mx-3 
      text-2xl
       text-center"
        href="./"
      >
        Redux Toolkit
      </Link>
      <div className="flex justify-between">
        <ul
          className="flex flex-wrap text-center
        my-4 mx-6 py-2 px-8 gap-5"
        >
          <li className="nav-item active">
            <Link className="nav-link" href="./">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-2xl" href="./">
              Product
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-2xl" href="./cart">
              My Bag {cartProducts.length}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
