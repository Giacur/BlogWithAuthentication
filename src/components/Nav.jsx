import { Form, NavLink, useRouteLoaderData } from "react-router-dom";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import blogIcon from "../assets/blogIcon.png";
import avatarIcon from "../assets/avatar.png";

export default function Nav() {
  const isAuthenticated = useRouteLoaderData("root");

  useEffect(() => {
    initFlowbite();
  }, []);

  const linkInactive = "block py-2 px-3 bg-transparent rounded-md shadow-md text-white hover:bg-purple-400/50 hover:text-slate-50";
  const linkActive = "block py-2 px-3  shadow-md text-white bg-transparent border-b-2 rounded-e-md border-orange-300 hover:text-slate-50"

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
                className={({isActive})=> isActive ? linkActive : linkInactive}
                aria-current="page"
                end
              >
                Bacheca
              </NavLink>
            </li>
            {!isAuthenticated && (
              <li>
                <NavLink
                  to="/"
                  className={({isActive})=> isActive ? linkActive : linkInactive}
                  aria-current="page"
                  end
                >
                  Accedi
                </NavLink>
              </li>
            )}

            {isAuthenticated && (
              <>
                <li>
                  <NavLink
                    to="articles/new"
                    className={({isActive})=> isActive ? linkActive : linkInactive}
                    aria-current="page"
                    end
                  >
                    + Pubblica
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="home"
                    className={({isActive})=> isActive ? linkActive : linkInactive}
                    aria-current="page"
                    end
                  >
                    Area Personale
                  </NavLink>
                </li>

                <li>
                  <Form
                    method="POST"
                    action="logout"
                    className="flex items-center space-x-3 rtl:space-x-reverse py-2"
                  >
                    <button className="text-slate-300 hover:text-red-500">Esci</button>
                  </Form>
                </li>
                <li>
                  <NavLink
                    to="home"
                    className="flex items-center space-x-3 mt-1 rtl:space-x-reverse"
                    end
                  >
                    <img
                      src={avatarIcon}
                      className="h-9 rounded-full"
                      alt="Avatar Image Icon Logo"
                    />
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
