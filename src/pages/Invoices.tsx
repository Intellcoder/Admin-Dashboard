import { mockDataInvoices } from "../data/data";
import { DataGrid } from "@mui/x-data-grid";
import LinkDisplay from "../components/LinkDisplay";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type Props = {};

const Invoices = (props: Props) => {
  const colors = {
    greenAccent: {
      100: "#4cceac",
      200: "#b7ebde",
      300: "#94e2cd",
      600: "#3da58a",
    },
    blueAccent: {
      100: "#e1e2fe",
      200: "#c3c6fd",
      700: "#3e4396",
    },
    primary: {
      100: "#d0d1d5",
      400: "#1f2a40",
    },
  };
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
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
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params: any) => (
        <Typography color={colors.greenAccent[100]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <div className="p-2">
      <LinkDisplay title="INVOICES" text="List of Invoices Balances " />
      <Box
        className="mt-2"
        m="40px 0 0 0"
        height="auto"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.blueAccent[700],
            border: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[100],
          },

          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            color: colors.primary[100],
            backgroundColor: colors.blueAccent[700],
          },

          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataInvoices} columns={columns} />
      </Box>
    </div>
  );
};

export default Invoices;
