import Image from "next/image"
import Link from "next/link"
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function CollegeDetailsCard() {
  return (
    <div className="flex min-h-screen w-full flex-col"> 
      <div className="flex flex-col sm:gap-4">
        <main className="grid flex-1 items-start gap-4 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="russia">Russia</TabsTrigger>
                <TabsTrigger value="australia">Australia</TabsTrigger>
                <TabsTrigger value="srilanka" className="hidden sm:flex">
                  Sri Lanka
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Product
                  </span>
                </Button>
              </div>
            </div>
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>All Colleges</CardTitle>
                  <CardDescription>
                    Manage your college and view their performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Course Offered</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Tution Fee
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Location
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Exam Accepted
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/images/logo/l1.jpeg"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          All India Institute of Medical Sciences, Delhi
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">1 Course</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $499.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          New Delhi
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          NEET
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Save</DropdownMenuItem>
                              <DropdownMenuItem>More Details</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      
                      {/* Row 1 */}
                        <TableRow>
                          <TableCell className="hidden sm:table-cell">
                            <Image
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                              height="64"
                              src="/images/logo/l1.jpeg"
                              width="64"
                            />
                          </TableCell>
                          <TableCell className="font-medium">
                            University of California, Los Angeles
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">3 Courses</Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            $899.99
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            Los Angeles
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            Medical School
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Save</DropdownMenuItem>
                                <DropdownMenuItem>More Details</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>

                      {/* Row 2 */}
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src="/images/logo/l1.jpeg"
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          Stanford University Medical Center
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">2 Courses</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $749.99
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Stanford
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          Surgery
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Save</DropdownMenuItem>
                              <DropdownMenuItem>More Details</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>

                      {/* Row 3 */}
                        <TableRow>
                          <TableCell className="hidden sm:table-cell">
                            <Image
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                              height="64"
                              src="/images/logo/l1.jpeg"
                              width="64"
                            />
                          </TableCell>
                          <TableCell className="font-medium">
                            Harvard Medical School
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">5 Courses</Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            $1299.99
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            Boston
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            Medicine
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Save</DropdownMenuItem>
                                <DropdownMenuItem>More Details</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>

                        {/* Row 4 */}
                        <TableRow>
                          <TableCell className="hidden sm:table-cell">
                            <Image
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                              height="64"
                              src="/images/logo/l1.jpeg"
                              width="64"
                            />
                          </TableCell>
                          <TableCell className="font-medium">
                            Johns Hopkins School of Medicine
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">4 Courses</Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            $999.99
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            Baltimore
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            Research
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Save</DropdownMenuItem>
                                <DropdownMenuItem>More Details</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>

                        {/* Row 5 */}
                        <TableRow>
                          <TableCell className="hidden sm:table-cell">
                            <Image
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                              height="64"
                              src="/images/logo/l1.jpeg"
                              width="64"
                            />
                          </TableCell>
                          <TableCell className="font-medium">
                            University of Toronto Faculty of Medicine
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">3 Courses</Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            $799.99
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            Toronto
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            Medical Research
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Save</DropdownMenuItem>
                                <DropdownMenuItem>More Details</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
