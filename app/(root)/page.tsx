import { Button } from "@/components/ui/button"
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default async function Home() {
  await delay(5000);
  return (
    <div>
      <Button>Do not click me</Button>
    </div>
  )
}