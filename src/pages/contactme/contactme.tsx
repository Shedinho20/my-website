import { useContext } from "react";
import { Title } from "../../components/title/title";
import { Context } from "../../context/store";

export const Contact = () => {
  const { setcursor } = useContext(Context);

  return (
    <div className="contact" id="contactme">
      <Title title="Contact Me" />
      <form>
        <input type="text" placeholder="Name" name="Name" />
        <input type="text" placeholder="Email" name="Email" />
        <textarea name="Message" rows={5} cols={50} placeholder="Message" />
      </form>
      <button className="btn" onMouseEnter={() => setcursor(true)} onMouseLeave={() => setcursor(false)}>
        Send
      </button>
    </div>
  );
};
