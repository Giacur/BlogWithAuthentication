import { Form } from "react-router-dom";
import Button from '../components/Button'

export default function PostForm({userID}) {
  const inputClasses =
    "w-full p-1 border-0 border-b-2 border-purple-700 focus:outline-none focus:ring-0";

  return (
    <Form method="POST" className="flex flex-col items-center w-full">
      <div className="py-5">
        <h2 className="text-center font-bold italic text-purple-500 text-2xl">
          Pubblica un post!
        </h2>
      </div>
      <div className="py-5 w-1/3">
        <input
          type="title"
          name="title"
          placeholder="Titolo del post"
          required
          className={inputClasses}
        />
      </div>
      <div className="py-5 w-1/3">
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          placeholder="Testo del post"
          className={inputClasses}
          style={{ resize: "none" }}
        ></textarea>
      </div>

      <div className="py-5 w-1/3 flex flex-col items-center">
        <Button>Pubblica</Button>
      </div>
    </Form>
  );
}
