import React from "react";
import TextField from "../components/Input.jsx";
import DatePicker from "../components/DatePicker.tsx";
import TimePicker from "../components/TimePicker.tsx";
import Table from "../components/Table.jsx";

const columns = [
  { field: "id", title: "ردیف", width: 150 },
  {
    field: "nationalCode",
    title: "کدملی",
    width: 150,
    // editable: "always",
  },
  {
    field: "fullName",
    title: "نام و نام خانوادگی",
    width: 200,
    // editable: "always",
  },
  {
    field: "mobile",
    title: "تلفن همراه",
    // type: "number",
    width: 150,
    // editable: "always",
  },
  {
    field: "city",
    title: "شهر محل سکونت",
    width: 160,
    // editable: "always",
  },
  {
    field: "car",
    title: "نوع خودرو",
    width: 160,
    // editable: "always",
  },
  {
    field: "pelak",
    title: "پلاک خودرو",
    width: 160,
    // editable: "always",
  },
  {
    field: "active",
    title: "فعال/غیرفعال",
    type: "boolean",
    width: 160,
    // editable: "always",
  },
  {
    field: "status",
    title: "وضعیت",
    width: 160,
    // editable: "always",
    lookup: {
      11: "آزاد",
      12: "ارسال پیشنهاد حمل",
      13: "اخذ بارنامه",
      14: "بارنامه قطعی",
      15: "در حال بارگیری",
      16: "در حال سفر",
      17: "اتمام سفر",
    },
  },
  // {
  //   field: "fullName",
  //   title: "شهر محل سکونت",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.getValue(params.id, "firstName") || ""} ${
  //       params.getValue(params.id, "lastName") || ""
  //     }`,
  // },
];

const rows = [
  {
    id: 1,
    nationalCode: 112233445566,
    fullName: "علی رحمتی",
    mobile: "09121234567",
    city: "سیرجان",
    car: "تریلی",
    pelak: "783 ی 33/75",
    active: true,
    status: 11,
  },
  {
    id: 2,
    nationalCode: 223334468451,
    fullName: "حسین عزتی",
    mobile: "09127654321",
    city: "سیرجان",
    car: "تریلی",
    pelak: "",
    active: false,
    status: 12,
  },
];

const SendRequest = () => {
  return (
    <>
      <DatePicker label="تاریخ ثبت" defaultValue="گهر ترابر" />
      <TimePicker label="زمان ثبت" defaultValue="1111" />
      <TextField
        label="شرکت درخواست کننده"
        defaultValue="شرکت توسعه آهن و فولاد گل گهر"
      />
      <Table columns={columns} rows={rows} />
    </>
  );
};

export default SendRequest;
