import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authSlice.js';
import { useNavigate } from 'react-router-dom';
import styles from '../DashboardPage/DashboardPage.module.css';

export default function DashboardPage() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const username = user?.email?.split('@')[0] || 'User';

    const handleLogout = () => {
        const confirm = window.confirm('Oturumu kapatmak istediğinizden emin misiniz?');
        if (confirm) {
            dispatch(logout());
            navigate('/login');
        }
    };

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <h2>Money Guard</h2>
                <div className={styles.userInfo}>
                    <span className={styles.username}>@{username}</span>
                    <button className={styles.exitBtn} onClick={handleLogout}>Exit</button>
                </div>
            </header>
            <main className={styles.content}>
                <h1>Dashboard Sayfası</h1>
                <p>Hoşgeldiniz, @{username}!</p>
            </main>
        </div>
    );
}
