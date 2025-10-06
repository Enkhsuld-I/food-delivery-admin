
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function FoodImg () {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="picture">Food Image</Label>
      <Input className=" h-[150px]" id="picture" type="file" />
    </div>
  )
}
