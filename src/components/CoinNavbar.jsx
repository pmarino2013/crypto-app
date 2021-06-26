import React from "react";

import logo from "../assets/cripto-logo.png";
const CoinNavbar = ({ coins, setCoins }) => {
  const handleLoading = () => {
    setCoins({
      ...coins,
      update: true,
    });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <img className="img-logo" src={logo} alt="Logo" />
          <span className="navbar-brand">CryptoApp</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>
          </div>

          <button
            className=" btn btn-coin"
            disabled={coins.update}
            onClick={handleLoading}
          >
            Actualizar
          </button>
        </div>
      </nav>
    </div>
  );
};

export default CoinNavbar;
