import { RouterProvider } from "react-router"
import AppRoutes from "./AppRoutes"
import './style.SCSS'
import { AuthProvider } from "./features/auth.context"
function App() {

  return (
<AuthProvider>
     <AppRoutes/>
</AuthProvider>
  )
}

export default App
