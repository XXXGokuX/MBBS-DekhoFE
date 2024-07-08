import Link from "next/link"
import { CircleUser, Menu, Package2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Profile() {
  return (
    <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>
                   <span>This is how others will see you on the site.</span>
                   
                </CardDescription>
                <Separator className="my-4"/>
              </CardHeader>
              <CardContent>
                <form>
                    <Label htmlFor="username" >Username</Label>
                    <Input placeholder="Username" id="username" className="mt-2 mb-1"/>
                    <div className="text-sm text-muted-foreground mb-6">This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.</div>

                    <Label htmlFor="email" className="">Email</Label>
                    <Input placeholder="Email" id="username" className="mt-2 mb-1"/>
                    <div className="text-sm text-muted-foreground mb-6">You can manage verified email addresses in your email settings.</div>
                    
                    <Label htmlFor="bio" className="">Bio</Label>
                    <Textarea placeholder="Type your message here." id='bio' className="mt-2 mb-1"/>
                    <div className="text-sm text-muted-foreground mb-6">You can @mention other users and organizations to link to them.</div>

                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-04-chunk-2">
              <CardHeader>
                <CardTitle>Plugins Directory</CardTitle>
                <CardDescription>
                  The directory within your project, in which your plugins are
                  located.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4">
                  <Input
                    placeholder="Project Name"
                    defaultValue="/content/plugins"
                  />
                  <div className="flex items-center space-x-2">
                    <Checkbox id="include" defaultChecked />
                    <label
                      htmlFor="include"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Allow administrators to change the directory.
                    </label>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>
          </div>
  )
}
