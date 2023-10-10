import { Routes, Route } from "react-router"
import Layout from "./layout"
import { Login } from "./page"
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route
          path="accounting"
          element={<p className="text-typography">記帳頁面</p>}
        />
      </Route>
    </Routes>
  )
}

export default App
