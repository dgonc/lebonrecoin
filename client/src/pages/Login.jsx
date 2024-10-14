import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function Login() {
  const users = useLoaderData();

  console.info("depuis users", users);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  console.info(email, password);

  return (
    <>
      <section>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={handleEmail} />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" onChange={handlePassword} />
      </section>
      <section>
        <Link to="/home">Connect</Link>
        <button type="button">Inscription</button>
      </section>
    </>
  );
}
