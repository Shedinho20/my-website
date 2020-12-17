import { useContext } from "react";
import { Title } from "../../components/title/title";
import { Context } from "../../context/store";

export const Contact = () => {
  const { setcursor } = useContext(Context);

  return (
    <div className="contact" id="contactme">
      <Title title="Contact Me" />
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <input type="text" placeholder="Name" name="name" required />
        </p>
        <p>
          <input type="text" placeholder="Email" name="email" required />
        </p>
        <p>
          <textarea name="message" rows={5} cols={50} placeholder="Message" required />
        </p>
        <p>
          <button
            type="submit"
            className="btn"
            onMouseEnter={() => setcursor(true)}
            onMouseLeave={() => setcursor(false)}
          >
            Send
          </button>
        </p>
      </form>
    </div>
  );
};
