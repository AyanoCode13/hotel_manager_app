import ApartmentIcon from "@mui/icons-material/Apartment";
import BarChartIcon from "@mui/icons-material/BarChart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default [
  {
    text: "Hotels",
    icon: <ApartmentIcon />,
    path: "/",
  },
  {
    text: "Bookings",
    icon: <FormatListBulletedIcon />,
    path: "/bookings",
  },
  {
    text: "Statistics",
    icon: <BarChartIcon />,
    path: "/statistics",
  },
];
