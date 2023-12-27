import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import Button from "./Button";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import blogIcon from '../assets/blogIcon.png';

export default function Nav() {
  const isAuthenticated = useRouteLoaderData("root");

  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <nav className="bg-purple-950">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={blogIcon}
            className="h-8 rounded-full"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            BlogWithAuth
          </span>
        </NavLink>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent dark:border-gray-700">
            <li>
              <NavLink
                to="articles"
                className="block py-2 px-3 bg-transparent rounded-md shadow-md text-white hover:bg-purple-500 hover:text-slate-50"
                aria-current="page"
              >
                Bacheca
              </NavLink>
            </li>
            {!isAuthenticated && (
              <li>
                <NavLink
                  to="/"
                  className="block py-2 px-3 bg-white rounded-md shadow-md text-purple-700 hover:bg-purple-500 hover:text-slate-50"
                  aria-current="page"
                >
                  Accedi
                </NavLink>
              </li>
            )}

            {isAuthenticated && (
              <>
                <li>
                  <NavLink
                    to="home"
                    className="block py-2 px-3 bg-transparent rounded-md shadow-md text-white hover:bg-purple-500 hover:text-slate-50"
                    aria-current="page"
                  >
                    Area Personale
                  </NavLink>
                </li>
                <li>
                  <Form method="POST" action="logout">
                    <Button className="block py-2 px-3 bg-white rounded-md shadow-md text-purple-700 hover:bg-purple-500 hover:text-slate-50">
                      Esci
                    </Button>
                  </Form>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
