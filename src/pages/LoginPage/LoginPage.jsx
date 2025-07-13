import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "../LoginPage/LoginPage.module.css";

export default function LoginPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.overlay}></div>
            <div className={styles.formContainer}>
                <LoginForm />
            </div>
        </div>
    );
}
