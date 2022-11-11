import Navbar from "./components/Navbar";
import Router from "./components/Router";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { QueryClientProvider, QueryClient} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CookiesProvider } from "react-cookie";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="">
        <QueryClientProvider client={queryClient}>
          <CookiesProvider>
            <Stack gap={3} >
              <Navbar />
              <Container >
                <Router />
              </Container>
            </Stack>
            <ReactQueryDevtools initialIsOpen={false} />
          </CookiesProvider>
        </QueryClientProvider>
      </GoogleOAuthProvider>
    </div>
  );
}
