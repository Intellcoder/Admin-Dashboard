import { mockDataTeam } from "../data/data";
import LinkDisplay from "../components/LinkDisplay";
import type { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import AccessBadge from "../components/AccessBadge";

const Team = () => {
  const colors = {
    greenAccent: {
      100: "#4cceac",
      200: "#b7ebde",
      300: "#94e2cd",
      600: "#3da58a",
      700: "#2e7c67",
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
    grey: {
      100: "#e0e0e0",
      400: "#858585",
    },
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
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
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: (params) => {
        return <AccessBadge access={params.row.access} colors={colors} />;
      },
    },
  ];
  return (
    <div>
      <LinkDisplay title="TEAM" text="Managing the Team Members" />
      <div className="overflow-x-auto">
        <DataGrid
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
          rows={mockDataTeam}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Team;
