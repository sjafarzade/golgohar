import React from "react";
import TextField from "../components/Input.jsx";
import Table from "../components/Table.jsx";

const columns = [
  { field: "id", title: "ردیف", width: 150 },
  {
    field: "location",
    title: " محل ارسال/دریافت",
    width: 200,
  },
  {
    field: "city",
    title: "شهر محل سکونت",
    width: 160,
  },
  {
    field: "door",
    title: "شماره درب",
    width: 150,
    type: "number",
  },
  {
    field: "WeighbridgeCount",
    title: "تعداد باسکول",
    width: 160,
    type: "number",
  },
  {
    field: "LoadingCapacity",
    title: "ظرفیت بارگیری در شبانه روز",
    width: 160,
    type: "number",
  },
  {
    field: "DischargeCapacity",
    title: "ظرفیت تخلیه باردر شبانه روز",
    width: 160,
    type: "number",
  },
  {
    field: "LoadingAverageTime",
    title: "متوسط زمان بارگیری بدقیقه",
    width: 160,
    type: "number",
  },
  {
    field: "DischargeAverageTime",
    title: "متوسط زمان تخلیه بدقیقه",
    width: 160,
    type: "number",
  },
  {
    field: "StartWork",
    title: "ساعت شروع بکار",
    width: 160,
    type: "time",
  },
  {
    field: "StopWork",
    title: "ساعت پایان کار",
    width: 160,
    type: "time",
  },
];

const rows = [
  {
    id: 1,
    location: "منطقه صنعتی ",
    city: "سیرجان",
    door: "1",
    WeighbridgeCount: "2",
    LoadingCapacity: "100",
    DischargeCapacity: "200",
    LoadingAverageTime: "15",
    DischargeAverageTime: "12",
    StartWork: "00:00",
    StopWork: "24:00",
  },
  {
    id: 2,
    location: "منطقه صنعتی ",
    city: "سیرجان",
    door: "1",
    WeighbridgeCount: "2",
    LoadingCapacity: "70",
    DischargeCapacity: "120",
    LoadingAverageTime: "15",
    DischargeAverageTime: "12",
    StartWork: "00:00",
    StopWork: "19:00",
  },
];

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
      <Table columns={columns} rows={rows} />
    </>
  );
};

export default ShippingApplicants;
