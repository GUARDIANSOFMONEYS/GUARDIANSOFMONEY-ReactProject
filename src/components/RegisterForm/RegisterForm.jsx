import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import styles from "./RegisterForm.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email("Valid email").required("Required"),
    password: yup.string().min(6).max(12).required("Required"),
    confirm: yup.string().oneOf([yup.ref("password")],
        "Passwords numbness").required("Required"),
});

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const password = watch("password");
    const confirm = watch("confirm");
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!confirm) return setProgress(0);
        if (confirm === password) setProgress(100);
        else setProgress(50);
    }, [password, confirm]);

    const onSubmit = (data) => {
        console.log("Kayıt verileri:", data);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <span className={styles.registerContact}>
                <img src="../../../public/guard.png" alt="guard" width={25} height={25} />
                <h2 className={styles.logo}>Money Guard</h2>
            </span>
            <div className={styles.inputWrapper}>
                <i className="fa fa-user" />
                <input placeholder="Name" {...register("name")} />
            </div>
            <p>{errors.name?.message}</p>

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

            <div className={styles.inputWrapper}>
                <i className="fa fa-lock" />
                <input type="password" placeholder="Confirm password" {...register("confirm")} />
            </div>
            <p>{errors.confirm?.message}</p>

            <ProgressBar percent={progress} />

            <button type="submit" className={styles.registerBtn}>REGISTER</button>
            <Link to="/login" className={styles.loginLink}>LOG IN</Link>
        </form>
    );
}
