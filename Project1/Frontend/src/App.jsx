import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./AppRoutes"
import './style.scss'
import { AuthProvider } from "./features/auth.context"
function App() {

  return (
<BrowserRouter>
<AuthProvider>
     <AppRoutes/>
</AuthProvider>
</BrowserRouter>
  )
}

export default App
