import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import styles from "../LoginForm/LoginForm.module.css";

const schema = yup.object().shape({
    email: yup.string().email("Geçerli e-posta").required("Zorunlu"),
    password: yup.string().min(6).max(12).required("Zorunlu"),
});

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        console.log("Login verileri:", data);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <span className={styles.formContact}>
                <img src="../../../public/guard.png" alt="guard" width={25} height={25} />
                <h2 className={styles.logo}>Money Guard</h2>
            </span>

            <div className={styles.inputWrapper}>
                <i className="fa fa-envelope" />
                <input placeholder="E-mail" {...register("email")} />
            </div>
            <p>{errors.email?.message}</p>

            <div className={styles.inputWrapper}>
                <i className="fa fa-lock" />
                <input type="password" placeholder="Password" {...register("password")} />
            </div>
            <p>{errors.password?.message}</p>

            <button type="submit" className={styles.loginBtn}>LOG IN</button>
            <Link to="/register" className={styles.registerLink}>REGISTER</Link>
        </form>
    );
}
