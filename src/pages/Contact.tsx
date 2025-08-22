import LinkDisplay from "../components/LinkDisplay";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { mockDataContacts } from "../data/data";

const colors = {
  grey: "#c2c2c2",
  greenAccent300: "#94e2cd",
  greenAccent200: "#b7ebde",
  blueAccent: "#3e4396",
  background: "#1f2a40",
};
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 0.5 },
  { field: "registrarId", headerName: "Registrar ID" },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "phone",
    headerName: "Phone Number",
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "address",
    headerName: "Address",
    flex: 1,
  },
  {
    field: "city",
    headerName: "City",
    flex: 1,
  },
  {
    field: "zipCode",
    headerName: "Zip Code",
    flex: 1,
  },
];

const Contact = () => {
  return (
    <div className="">
      <LinkDisplay
        title="CONTACTS"
        text="List of Contacts for Future Reference"
      />
      <div className="dark:bg-primary-700  p-2 mt-5 h-full w-full ">
        <DataGrid
          className="dark:bg-primary-400"
          sx={{
            backgroundColor: colors.background,
            boxShadow: "none",
            border: "none",
            "& .MuiDataGrid-root": {
              border: "none",
              backgroundColor: colors.background,
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
              color: colors.grey,
              border: "none",

              backgroundColor: colors.background,
            },
            "& .MuiDataGrid-main": {
              border: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent300,
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: colors.blueAccent,
              color: colors.grey,
              border: "none",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.background,
              color: colors.grey,
            },

            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent200} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: colors.blueAccent,
              border: "none",
            },
            "&.MuiDataGrid-toolbarContainer .MuiButton-root": {
              color: colors.blueAccent,
              backgroundColor: colors.blueAccent,
            },
            "&.MuiDataGrid-toolbarContainer": {
              backgroundColor: colors.blueAccent,
            },
            ".MuiDataGrid-columnSeparator": {
              border: "none",
              borderColor: colors.background,
            },
            "&.MuiDataGrid-toolbarLabel": {
              color: colors.greenAccent200,
            },
            ".MuiDataGrid-columnHeaders": {
              backgroundColor: colors.greenAccent200,
            },
          }}
          rows={mockDataContacts}
          columns={columns}
          showToolbar
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </div>
    </div>
  );
};

export default Contact;
