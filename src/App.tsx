import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";

import AuthProvider from "./context/authContext";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
