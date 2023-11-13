import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./SignUp.module.css";

interface FormData {
  username: string;
  password: string;
  passwordagain: string;
}

export default function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
    passwordagain: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.passwordagain) {
      alert("Passwords do not match.");
      return;
    }

    const newUser = {
      username: formData.username,
      password: formData.password,
    };

    const existingUsersJSON = localStorage.getItem("users");
    const existingUsers = existingUsersJSON
      ? JSON.parse(existingUsersJSON)
      : [];

    const updatedUsers = [...existingUsers, newUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setFormData({
      username: "",
      password: "",
      passwordagain: "",
    });

    alert("User registered successfully!");
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
        <h2>Sign up</h2>
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
          <input
            name="passwordagain"
            id="passwordagain"
            type="password"
            placeholder="password again"
            value={formData.passwordagain}
            onChange={handleChange}
            required
          ></input>
          <br />
          <button className={styles.button} type="submit">
            Sign up
          </button>
        </div>
      </form>
    </>
  );
}
