import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative lg:hidden inline-block text-left">
      <div
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
        id="menu-button"
        aria-expanded={isOpen ? "true" : "false"}
        aria-haspopup="true"
      >
        <HiOutlineMenuAlt1 className="text-darkBlue text-3xl" />
      </div>

      <Transition
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        className="dropdown__container"
      >
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 p-4">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <ul className="navItem">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Our Expertise</Link>
              </li>
              <li>
                <Link to="/">Success Stories</Link>
              </li>
              <li>
                <Link to="/">Contuct us</Link>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default DropDown;
