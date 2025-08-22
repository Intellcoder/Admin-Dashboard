import Box from "@mui/material/Box";

const ProgressCircle = ({
  size = "40",
  progress = 0.75,
  trackColor = "#1f2a40",
  progressColor = "#6870fa",
  holeColor = "#4cceac",
}) => {
  const angle = progress * 360;

  return (
    <Box
      sx={{
        background: `radial-gradient(${trackColor} 55% ,transparent 56%),
        conic-gradient(transparent 0deg ${angle}deg,${progressColor} ${angle}deg 360deg),${holeColor}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
