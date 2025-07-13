import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../../Logo/лого Money Guard 2 (1).png";
import ExitIcon from "../../Logo/exit1.png";
import "./Header.module.css";

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="modal-title">Çıkış Yapmak İstiyor Musunuz?</h3>
        <p className="modal-description">
          Hesabınızdan çıkış yapmak istediğinizden emin misiniz?
        </p>
        <div className="modal-buttons">
          <button onClick={onClose} className="modal-button cancel-button">
            İptal
          </button>
          <button onClick={onConfirm} className="modal-button confirm-button">
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
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            {/* Logo ve Marka */}
            <div className="logo-section">
              <Logo />
              <h1 className="brand-title">Money Guard</h1>
            </div>

            {/* Kullanıcı Bilgileri ve Çıkış */}
            <div className="user-section">
              {/* Kullanıcı Adı */}
              <div className="user-info">
                <span className="username">{getUserName(userEmail)}</span>
              </div>

              {/* Ayırıcı Çizgi */}
              <div className="divider"></div>

              {/* Çıkış Butonu */}
              <button
                onClick={handleLogoutClick}
                className="logout-button"
                type="button"
              >
                <ExitIcon />
                <span className="logout-text">Çıkış</span>
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
