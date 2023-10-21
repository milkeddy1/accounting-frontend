import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
function SingleCard() {
  return (
    <Card className="hover:bg-muted hover:cursor-pointer h-[180px]">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            <h1>1月</h1>
            <p>total: 100</p>
          </div>
        </CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        {/* 根據該月tags「數量」多寡做排序 */}
        <div style={{display:'flex',gap:5, flexWrap:'wrap'}}>
        <Badge variant="outline">Tag1</Badge>
        <Badge variant="outline">Tag2</Badge>
        <Badge variant="outline">Tag3</Badge>
        <Badge variant="outline">Tag4</Badge>
        </div>
      </CardContent>
    </Card>
  )
}

export default SingleCard
