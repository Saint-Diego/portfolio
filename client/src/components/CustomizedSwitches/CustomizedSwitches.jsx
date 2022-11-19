import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-switchBase": {
    color: "#ffffff",
    "&.Mui-checked": {
      color: "#0f0e0e",
      "& + .MuiSwitch-track": {
        backgroundColor: "#030361",
      },
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    backgroundColor: "#ffffff",
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage:
        "url('https://res.cloudinary.com/dah19wrh1/image/upload/v1667612324/dev/assets/sun-light-op-icon-xs.png')",
      left: 11,
    },
    "&:after": {
      backgroundImage:
        "url('https://res.cloudinary.com/dah19wrh1/image/upload/v1667612324/dev/assets/moon-icon-xs.png')",
      right: 11,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const CustomizedSwitches = () => {
  const [check, setCheck] = useState(true);

  const handleChange = (event) => {
    setCheck(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        control={<Android12Switch checked={check} onChange={handleChange} />}
      />
    </Box>
  );
};

export default CustomizedSwitches;
