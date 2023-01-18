import Stock from "../data/data.json"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Stock);
      }, 1500);
    });
  };