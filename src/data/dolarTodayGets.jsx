let url = "https://s3.amazonaws.com/dolartoday/data.json";

export const getData = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getDate = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const { _timestamp } = data;
    return _timestamp.fecha_corta2;
  } catch (error) {
    console.log(error);
  }
};

export const getCoin = async (coin) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const { _timestamp, USD } = data;
    if (coin === "BCV") {
      return {
        day: _timestamp.dia_corta,
        hour: _timestamp.fecha,
        price: USD.sicad2,
      };
    } else if (coin === "DT") {
      return {
        day: _timestamp.dia_corta,
        hour: _timestamp.fecha,
        price: USD.dolartoday,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export const getPrices = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const { USD } = data;
    return {
      dolarToday: USD.dolartoday,
      dolarBCV: USD.sicad2,
    };
  } catch (error) {
    console.log(error);
  }
};
