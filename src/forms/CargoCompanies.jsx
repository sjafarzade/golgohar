import React from "react";
import TextField from "../components/Input.jsx";

const CargoCompanies = () => {
  return (
    <>
      <TextField label="عنوان" defaultValue="گهر ترابر" />
      <TextField label="کد اقتصادی" defaultValue="1111" />
      <TextField label="آدرس" defaultValue="سیرجان" />
      <TextField label="شهرهای تحت پوشش" defaultValue="سیرجان،کرمان" />
      <TextField label="تلفن" defaultValue="12345678" />
      <TextField label="تلفن همراه" defaultValue="9121234567" />
    </>
  );
};

export default CargoCompanies;
