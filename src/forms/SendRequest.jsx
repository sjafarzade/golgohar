import React from "react";
import TextField from "../components/Input.jsx";
import DatePicker from "../components/DatePicker.tsx";
import TimePicker from "../components/TimePicker.tsx";
import Table from "../components/Table.jsx";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  parentGridRoot: {
    flexGrow: 1,
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  margin_left: { margin: "10px 0" },
  margin_right: { margin: "10px 50px" },
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: "#000",
  },
}));

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
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid className={classes.margin_left} item xs={12} md>
          <div className={classes.parentGridRoot}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <DatePicker label="تاریخ ثبت" defaultValue="گهر ترابر" />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <TimePicker label="زمان ثبت" defaultValue="1111" />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <TextField
                  label="شرکت درخواست کننده"
                  defaultValue="شرکت توسعه آهن و فولاد گل گهر"
                />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      <Table columns={columns} rows={rows} />
    </>
  );
};

export default SendRequest;
