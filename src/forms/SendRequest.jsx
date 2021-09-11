import React from "react";
import TextField from "../components/Input.jsx";
import DatePicker from "../components/DatePicker.tsx";
import TimePicker from "../components/TimePicker.tsx";
const SendRequest = () => {
  return (
    <>
      <DatePicker label="تاریخ ثبت" defaultValue="گهر ترابر" />
      <TimePicker label="زمان ثبت" defaultValue="1111" />
      <TextField
        label="شرکت درخواست کننده"
        defaultValue="شرکت توسعه آهن و فولاد گل گهر"
      />
    </>
  );
};

export default SendRequest;
