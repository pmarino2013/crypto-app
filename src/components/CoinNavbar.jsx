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
          <div>
            <img className="img-logo" src={logo} alt="Logo" />
            <span className="navbar-brand">CryptoApp</span>
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
