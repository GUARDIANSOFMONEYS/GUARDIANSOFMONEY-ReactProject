import RegisterForm from "../../components/RegisterForm/RegisterForm";
import styles from "./RegisterPage.module.css";

export default function RegisterPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.overlay}></div>
            <RegisterForm />
        </div>
    );
}

