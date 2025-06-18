import { Button } from "@/components/ui/button"
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default async function Home() {
  await delay(1000);
  return (
    <div>
      <Button size={"lg"}>Do not click</Button>
    </div>
  )
}