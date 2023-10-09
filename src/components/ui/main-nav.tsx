import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { useLocation } from "react-router-dom"

const routeConfig = [
  {
    path: "/accounting",
    name: "記帳"
  },
  {
    path: "/cycle",
    name: "週期"
  }
]

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const location = useLocation()
  const { pathname } = location
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routeConfig.map((item) => {
        const pathMatched = item.path === pathname
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`text-2xl font-medium transition-colors hover:text-primary hover:bg-accent px-4 py-2 rounded-md ${
              pathMatched ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}
