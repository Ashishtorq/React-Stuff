import { useEffect, useState } from "react";

function useCurrencyinfo() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.jason())
      .then((res) => setData(res));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyinfo;