import React from "react";
import TextField from "../components/Input.jsx";

const ShippingApplicants = () => {
  return (
    <>
      <TextField label="نام شرکت" defaultValue="توسعه آهن و فولاد گل گهر" />
      <TextField label="کد اقتصادی" defaultValue="1111" />
      <TextField label="آدرس" defaultValue="سیرجان" />
      <TextField label="شهر" defaultValue="سیرجان،کرمان" />
      <TextField label="تلفن" defaultValue="12345678" />
      <TextField label="تلفن همراه" defaultValue="9121234567" />
      <TextField label="ارسال کننده" defaultValue="9121234567" />
      <TextField label="دریافت کننده" defaultValue="9121234567" />
      <TextField
        label="حداکثر زمان تایید بارنامه باز بدقیقه"
        defaultValue="60"
        type="number"
      />
    </>
  );
};

export default ShippingApplicants;
