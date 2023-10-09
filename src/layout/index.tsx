import { Outlet } from "react-router"
import Header from "./Header"
import { Separator } from "@/components/ui/separator"
function Layout() {
  return (
    <div className="bg-background">
      <Header />
      <Separator />
      <Outlet />
    </div>
  )
}

export default Layout
