import { Routes, Route } from "react-router"
import Layout from "./layout"
import { Login } from "./page"
import MonthlyAccounting from "./page/mothlyAccounting"

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="accounting" element={<MonthlyAccounting />} />
        <Route
          path="accounting/:id"
          element={<p className="text-typography">daily accounting</p>}
        />
      </Route>
    </Routes>
  )
}

export default App
