import React from "react";

const CoinLogo = ({ logo }) => {
  return (
    <img
      className="img-logo"
      src={`https://static.coincap.io/assets/icons/${logo.toLowerCase()}@2x.png`}
      alt={logo}
    />
  );
};

export default CoinLogo;
