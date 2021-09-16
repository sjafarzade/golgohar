import React from "react";
import Table from "../components/Table.jsx";

const openReqCol = [
  {
    field: "NeedDate",
    title: "تاریخ نیاز",
    width: 200,
    type: "date",
  },
  {
    field: "Origin",
    title: "مبدا",
    width: 160,
  },
  {
    field: "Destination",
    title: "مقصد",
    width: 160,
  },
  {
    field: "NeedCount",
    title: "تعداد مورد نیاز",
    width: 160,
    type: "number",
  },
  {
    field: "OpenRequestCount",
    title: "تعداد درخواست باز",
    width: 160,
    type: "number",
  },
];
const openReqRows = [
  {
    NeedDate: "1400/05/02",
    Origin: "شرکت توسعه آهن و فولاد گل گهر",
    Destination: "فولاد مبارکه",
    NeedCount: 40,
    OpenRequestCount: 12,
  },
  {
    NeedDate: "1400/05/02",
    Origin: "شرکت توسعه آهن و فولاد گل گهر",
    Destination: "اهواز-فولاد اهواز-درب 1",
    NeedCount: 20,
    OpenRequestCount: 5,
  },
  {
    NeedDate: "1400/05/03",
    Origin: "شرکت توسعه آهن و فولاد گل گهر",
    Destination: "فولاد مبارکه",
    NeedCount: 40,
    OpenRequestCount: 40,
  },
  {
    NeedDate: "1400/05/03",
    Origin: "شرکت توسعه آهن و فولاد گل گهر",
    Destination: "اهواز-فولاد اهواز-درب 1",
    NeedCount: 20,
    OpenRequestCount: 20,
  },
];

const freeDriverCol = [
  {
    field: "NationalCode",
    title: "کدملی",
    width: 200,
    type: "number",
  },
  {
    field: "FullName",
    title: "نام و نام خانوادگی",
    width: 200,
  },
  {
    field: "PlaqueCar",
    title: "پلاک خودرو",
    width: 200,
  },
  {
    field: "Status",
    title: "وضعیت",
    width: 200,
    type: "bool",
  },
  {
    field: "NumberPerMonth",
    title: "تعداد بار طی ماه",
    width: 200,
    type: "number",
  },
  {
    field: "NumberCancelPerMonth",
    title: "تعداد کنسلی",
    width: 200,
    type: "number",
  },
  {
    field: "LastTransportDate",
    title: "آخرین تاریخ حمل",
    width: 200,
    type: "date",
  },
];
const freeDriverRows = [
  {
    NationalCode: 112233445566,
    FullName: "علی رحمتی",
    PlaqueCar: "541654",
    Status: "آزاد",
    NumberPerMonth: 15,
    NumberCancelPerMonth: 1,
    LastTransportDate: "",
  },
  {
    NationalCode: 223334468451,
    FullName: "حسین عزتی",
    PlaqueCar: "56464",
    Status: "آزاد",
    NumberPerMonth: 10,
    NumberCancelPerMonth: 12,
    LastTransportDate: "",
  },
];

const delicatedCarCol = [
  {
    field: "TemporarySerial",
    title: "سریال موقت بارنامه",
    width: 200,
    type: "number",
  },
  {
    field: "NationalCode",
    title: "کدملی",
    width: 200,
    type: "number",
  },
  {
    field: "FullName",
    title: "نام و نام خانوادگی",
    width: 200,
  },
  {
    field: "CarPelaque",
    title: "پلاک خودرو",
    width: 200,
  },
  {
    field: "DefinitiveSerial",
    title: "سریال قطعی بارنامه",
    width: 200,
    type: "number",
  },
  {
    field: "Status",
    title: "وضعیت",
    width: 160,
    lookup: {
      20: "ارسال پیشنهاد حمل",
      21: "اخذ بارنامه",
      22: "بارنامه قطعی",
      23: "در حال بارگیری",
      24: "در حال سفر",
      25: "اتمام سفر",
    },
  },
];
const delicatedCarRows = [
  {
    TemporarySerial: 123,
    NationalCode: 54646464,
    FullName: "حسن توحیدی",
    CarPelaque: "54654",
    DefinitiveSerial: 87,
    Status: 23,
  },
  {
    TemporarySerial: 124,
    NationalCode: 45456546,
    FullName: "پیمان اصغری",
    CarPelaque: "879846",
    DefinitiveSerial: null,
    Status: 20,
  },
];

const CarAssignmentPanel = () => {
  return (
    <>
      <Table columns={openReqCol} rows={openReqRows} />
      <Table columns={freeDriverCol} rows={freeDriverRows} />
      <Table columns={delicatedCarCol} rows={delicatedCarRows} />
    </>
  );
};

export default CarAssignmentPanel;
