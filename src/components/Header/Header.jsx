import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../../Logo/лого Money Guard 2 (1).png";
import ExitIcon from "../../Logo/exit1.png";
import css from "./Header.module.css";

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className={css.modaloverlay}>
      <div className={css.modalcontent}>
        <h3 className={css.modaltitle}>Çıkış Yapmak İstiyor Musunuz?</h3>
        <p className={css.modaldescription}>
          Hesabınızdan çıkış yapmak istediğinizden emin misiniz?
        </p>
        <div className={css.modalbuttons}>
          <button onClick={onClose} className={css.modalbutton}>
            İptal
          </button>
          <button onClick={onConfirm} className={css.modalbutton}>
            Çıkış Yap
          </button>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth?.user);
  const userEmail = user?.email || "user@example.com";

  const getUserName = (email) => {
    return email.split("@")[0];
  };

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      dispatch({ type: "auth/logout" });

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);

      dispatch({ type: "auth/logout" });
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <header className={css.header}>
        <div className={css.header_container}>
          <div className={css.header_content}>
            {/* Logo ve Marka */}
            <div className={css.logo_section}>
              {/* <Logo /> */}
              <img src={Logo} alt="Logo" />

              <h1 className={css.brand_title}>Money Guard</h1>
            </div>

            {/* Kullanıcı Bilgileri ve Çıkış */}
            <div className={css.user_section}>
              {/* Kullanıcı Adı */}
              <div className={css.user_info}>
                <span className={css.username}>{getUserName(userEmail)}</span>
              </div>

              {/* Ayırıcı Çizgi */}
              <div className={css.divider}></div>

              {/* Çıkış Butonu */}
              <button
                onClick={handleLogoutClick}
                className={css.logout_button}
                type="button"
              >
                {/* <ExitIcon /> */}
                <img src={ExitIcon} alt="Exit" />
                <span className={css.logou_text}>Exit</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Logout Modal */}
      <LogoutModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmLogout}
      />
    </>
  );
};

export default Header;
