import { Form, NavLink } from "react-router-dom";
import Button from "./Button";

export default function UserForm({ login, error }) {
  const inputClasses =
    "w-full p-1 border-0 border-b-2 border-purple-700 focus:outline-none focus:ring-0";

  return (
    <Form method="POST" className="flex flex-col items-center w-full">
      <div className="py-5">
        <h2 className="text-center font-bold italic text-purple-500">
          {login ? "Effettua l'accesso" : "Registrati"}
        </h2>
      </div>
      <div className="py-5 w-1/3">
        <input
          type="email"
          name="email"
          placeholder="Indirizzo e-mail"
          required
          className={inputClasses}
        />
      </div>

      <div className="py-5 w-1/3">
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className={inputClasses}
        />
      </div>

      <div className="py-5 w-1/3 flex flex-col items-center">
        <Button>{login ? "Accedi" : "Registrati"}</Button>
        <div className="my-3">
          {login ? (
            <p className="text-center text-sm text-slate-400">
              Non hai un account?{" "}
              <NavLink to="/register" className="text-blue-700">
                registrati
              </NavLink>{" "}
            </p>
          ) : (
            <p className="text-center text-sm text-slate-400">
              Hai già un account?{" "}
              <NavLink to="/" className="text-blue-700">
                accedi
              </NavLink>{" "}
            </p>
          )}
        </div>
        {error && (
          <p className="text-center px-4 py-2 bg-red-600 text-slate-50 w-full">
            {error.message}
          </p>
        )}
      </div>
    </Form>
  );
}
