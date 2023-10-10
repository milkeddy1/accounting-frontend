import { Outlet } from "react-router"
import Header from "./Header"
import { Separator } from "@/components/ui/separator"
function Layout() {
  return (
    <div className="bg-background h-[100dvh]">
      <Header />
      <Separator />
      <div className="bg-background">
        <div className="w-[60%] m-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
