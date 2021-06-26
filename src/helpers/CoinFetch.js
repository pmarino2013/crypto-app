let limite = 10;

export const getCoins = async () => {
  const respuesta = await fetch(
    `https://api.coincap.io/v2/assets?limit=${limite}`
  );
  const datos = await respuesta.json();
  return datos.data;
};

export const searchCoin = async (valor) => {
  const resp = await fetch(
    `https://api.coincap.io/v2/assets?limit=${limite}&search=${valor}`
  );
  const datos = await resp.json();
  return datos.data;
};
