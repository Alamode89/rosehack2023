import React, { useEffect, useState } from "react";
import axios from "axios";

const stats = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios.get("/api/getStats").then((response) => {
      setStats(response.data);
    });
  }, []);

  return (
    <>
      <p>number of participants: {stats["participants"]}</p>
      <p>number of females: {stats["female"]}</p>
      <p>number of males: {stats["male"]}</p>
      <p>number of transgender: {stats["transgender"]}</p>
      <p>number of nonbinary: {stats["nonbinary"]}</p>

      <p>number of cs: {stats["computer_science"]}</p>
      <p>number of computer_engineering: {stats["computer_engineering"]}</p>
      <p>number of csba: {stats["csba"]}</p>
      <p>number of data_science: {stats["data_science"]}</p>
      <p>number of electrical_engineering: {stats["electrical_engineering"]}</p>
      <p>number of mechanical_engineering: {stats["mechanical_engineering"]}</p>
      <p>
        number of environmental_engineering:
        {stats["environmental_engineering"]}
      </p>
      <p>number of other_major: {stats["other_major"]}</p>
    </>
  );
};

export default stats;
