import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "../signup/signup.module.css";
import { useRouter } from "next/router";

interface FormData {
  username: string;
  password: string;
}

export default function SignIn() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const existingUsersJSON = localStorage.getItem("users"); //Define type or not ?
    const existingUsers = existingUsersJSON
      ? JSON.parse(existingUsersJSON)
      : [];

    const user = existingUsers.find(
      (u: FormData) =>
        u.username === formData.username && u.password === formData.password
    );

    if (user) {
      router.push("/game");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <form className={styles.logincard} onSubmit={handleSubmit} method="POST">
        <h2>Sign In</h2>
        <div>
          <input
            name="username"
            id="username"
            type="text"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
            required
          ></input>
          <br />
          <input
            name="password"
            id="password"
            type="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            required
          ></input>
          <br />
          <button className={styles.button} type="submit">
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}
