import * as React from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import { tableIcons } from "../const.jsx";

export default function DataTable(props) {
  const { columns = [], rows = [], header = true, search = true } = props;
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MaterialTable
        icons={tableIcons}
        title={""}
        data={rows}
        columns={columns}
        pageSize={5}
        cellEditable={{
          onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
            return new Promise((resolve, reject) => {
              setTimeout(resolve, 1000);
            });
          },
        }}
        options={{
          header: header,
          search: search,
          // maxBodyHeight: 300,
          rowStyle: {
            fontWeight: "500",
            lineHeight: "1.5rem",
            fontSize: "0.875rem",
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            letterSpacing: "0.01071em",
            // width: "auto",
            // textAlign: "center",
          },
          headerStyle: {
            // width: "auto",
            // textAlign: "center",
          },
        }}
        // checkboxSelection
        // disableSelectionOnClick
      />
    </div>
  );
}
