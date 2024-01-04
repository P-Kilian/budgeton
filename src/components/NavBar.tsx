import Link from "next/link"
import { ThemeSwitcherButton } from "@/components/ThemeSwitcherButton"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { cn } from "@/lib/utils"

export function NavBar({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
            {...props}
        >
            {/* <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="bills">Bills</TabsTrigger>
                </TabsList>
            </Tabs> */}
            <Link
                href="#"
                className="text-sm font-medium transition-colors hover:text-primary"
            >
                Empty
            </Link>
            <Link
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
                About
            </Link>
            <ThemeSwitcherButton />
        </nav>
    )
}