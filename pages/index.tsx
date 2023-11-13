import styles from "@/styles/Home.module.css";
import SignUp from "../components/signup/SignUp";
import SignIn from "../components/signin/SignIn";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <p> Farming Game</p>
        <div className={styles.forms}>
          <SignUp />
          <SignIn />
        </div>
      </div>
    </>
  );
}
