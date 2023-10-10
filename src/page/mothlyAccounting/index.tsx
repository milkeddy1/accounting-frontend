import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SingleCard from "./SingleCard"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

const cards = Array.from(Array(12)).map((item) => {
  return item
})

function MonthlyAccounting() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const startYear = 2023
  const endYear = new Date().getFullYear()
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  )

  return (
    <div className="p-10">
      <h1 className="text-typography text-[40px] p-4">記帳(月)</h1>
      <Card>
        <CardHeader>
          <CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <p className="text-typography text-[30px] p-2">
                  {selectedYear}
                </p>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {years.map((year) => (
                  <DropdownMenuItem
                    key={year}
                    onSelect={() => setSelectedYear(year)}
                  >
                    {year}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {cards.map((_, idx) => {
              return <SingleCard key={idx} />
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MonthlyAccounting
