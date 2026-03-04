import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./style.scss";
import { AuthProvider } from "./features/auth.context";
import { PostContextProvider } from './features/posts/post.context.jsx'
function App() {
  return (
    <BrowserRouter>
     <PostContextProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </PostContextProvider>
    </BrowserRouter>
  );
}

export default App;
