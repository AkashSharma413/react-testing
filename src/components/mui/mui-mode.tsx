import { useTheme, Typography } from "@mui/material";

export const MuiMode = () => {
  const theme = useTheme();
  return <Typography component={'h1'}>{`${theme.palette.mode} mode`}</Typography>
};
