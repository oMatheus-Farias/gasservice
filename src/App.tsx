import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";

import AuthProvider from "./context/authContext";

function App(){
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes/>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;