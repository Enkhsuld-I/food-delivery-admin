import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FoodImg } from "../ui";






export default function NewDish() {
  return (
   
       <div className="w-[1000px] h-[1000px] m-auto bg-amber-200 flex items-center justify-center my-10">
       <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Add new dish ...</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add new dish to the appetizers</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Food name</Label>
              <Input id="name-1" name="name" defaultValue="" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Price</Label>
              <Input id="username-1" name="username" defaultValue="" />
            </div>
          </div>
          <div className="grid gap-3">
              <Label htmlFor="name-1">Ingredients</Label>
              <Input id="name-1" name="name" defaultValue="" />
            </div>
         <div>
            <FoodImg></FoodImg>
         </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Add dish</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>

    </div>
    
   
  );
}
