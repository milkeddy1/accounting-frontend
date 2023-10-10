import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
        <p>previewing elements...</p>
        <p>previewing elements...</p>
        <p>previewing elements...</p>
      </CardContent>
    </Card>
  )
}

export default SingleCard
