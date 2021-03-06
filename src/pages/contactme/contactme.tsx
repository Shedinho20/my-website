import { useContext } from "react";
import { Title } from "../../components/title/title";
import { Context } from "../../context/store";

export const Contact = () => {
  const { setcursor, theme } = useContext(Context);

  return (
    <div className={`contact ${theme}`} id="contactme">
      <Title title="Contact Me" />
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

        <p>
          <input type="text" placeholder="Name" name="name" required />
        </p>
        <p>
          <input type="text" placeholder="Email" name="email" required />
        </p>
        <p>
          <textarea name="message" rows={5} cols={50} placeholder="Message" required />
        </p>

        <button
          type="submit"
          className="btn"
          style={{ marginTop: "2rem" }}
          onMouseEnter={() => setcursor(true)}
          onMouseLeave={() => setcursor(false)}
        >
          Send
        </button>
      </form>
    </div>
  );
};
