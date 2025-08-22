import React from "react";
import { Box, Typography } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

interface AccessBadgeProps {
  access: "admin" | "manager" | "user";
  colors: {
    greenAccent: Record<number, string>;
    blueAccent: Record<number, string>;
    primary: Record<number, string>;
    grey: Record<number, string>;
  };
}

const AccessBadge: React.FC<AccessBadgeProps> = ({ access, colors }) => {
  const icon =
    access === "admin" ? (
      <AdminPanelSettingsOutlinedIcon />
    ) : access === "manager" ? (
      <SecurityOutlinedIcon />
    ) : (
      <LockOpenOutlinedIcon />
    );

  return (
    <Box
      sx={{
        width: "60%",
        margin: "0 auto",
        padding: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:
          access === "admin"
            ? colors.greenAccent[600]
            : access === "manager"
            ? colors.greenAccent[700]
            : colors.greenAccent[700],
        borderRadius: "4px",
        "& .MuiSvgIcon-root": { fontSize: "18px" },
      }}
    >
      {icon}
      <Typography color={colors.grey[100]} sx={{ ml: "5px", fontSize: "14px" }}>
        {access}
      </Typography>
    </Box>
  );
};

export default AccessBadge;
