import React from "react";
import TextField from "../components/Input.jsx";
import Table from "../components/Table.jsx";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  parentGridRoot: {
    flexGrow: 1,
    "& .MuiTextField-root": {
      marginBottom: theme.spacing(1),
      width: "100%",
    },
  },
  // margin_left: { margin: "10px 0" },
  // margin_right: { margin: "10px 50px" },
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
    // type: "numeric",
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

const CargoCompanies = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid className={classes.margin_left} item xs={12} md>
          <div className={classes.parentGridRoot}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={2}>
                <TextField label="عنوان" defaultValue="گهر ترابر" />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} md={2}>
                <TextField label="کد اقتصادی" defaultValue="1111" />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} md={2}>
                <TextField label="آدرس" defaultValue="سیرجان" />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} md={2}>
                <TextField
                  label="شهرهای تحت پوشش"
                  defaultValue="سیرجان،کرمان"
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} md={2}>
                {" "}
                <TextField label="تلفن" defaultValue="12345678" />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} md={2}>
                <TextField label="تلفن همراه" defaultValue="9121234567" />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      <Table columns={columns} rows={rows} />
    </>
  );
};

export default CargoCompanies;
