import { Outlet} from "react-router-dom";
import Sidebar from "../../components/navigation/Sidebar";
import Container from "@mui/material/Container";


export default function Layout() {

  return (
    <div className="Layout">
      <header>
        <Sidebar />
      </header>

      <main >
        <div
          style={{
            display: "flex",
            marginLeft: 10,
            paddingTop: 80,
            width:"100%"
          }}
        >
          <Container sx={{width:"100%"}} >
            <Outlet />
          </Container>
        </div>
      </main>
    </div>
  );
}