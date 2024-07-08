import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  PackageOpen,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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

export default function Bookmark() {
  return (
      
      <div className="flex flex-col min-h-80 w-full">
       
        <main className="flex flex-1 flex-col gap-4 lg:gap-6 ">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Bookmark Colleges</h1>
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <PackageOpen className="h-24 w-24 text-black dark:text-muted" />
              <h3 className="text-2xl font-bold tracking-tight">
                You have no bookmarks
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start select from college dashboard.
              </p>
              <Button className="mt-4">Add Product</Button>
            </div>
          </div>
        </main>
      </div>
  )
}
