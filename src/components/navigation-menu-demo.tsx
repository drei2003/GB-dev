"use client"

import * as React from "react"
import Link from "next/link"
import { BookOpenIcon, UsersIcon, InfoIcon } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import {
NavigationMenu,
NavigationMenuContent,
NavigationMenuItem,
NavigationMenuLink,
NavigationMenuList,
NavigationMenuTrigger,
navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const literaryAges: { title: string; href: string; description: string }[] = [
{
title: "Classical Age",
href: "#",
description:
"Ancient Greek and Roman literature emphasizing moral lessons and aesthetic pleasure.",
},
{
title: "Neo-Classical Age",
href: "#",
description:
"The Age of Reason reviving classical ideals with emphasis on order and logic.",
},
{
title: "Romantic Age",
href: "#",
description:
"Late 18th-19th century movement celebrating emotion, nature, and imagination.",
},
]

export function NavigationMenuDemo() {
const isMobile = useIsMobile()

return (
<NavigationMenu viewport={isMobile}>
    <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                        <NavigationMenuLink asChild>
                            <Link
                                className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                                href="/">
                            <div className="mb-2 text-lg font-medium sm:mt-4">
                                Great Books
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                                Explore the Neo-Classical Age and timeless literature
                            </p>
                            </Link>
                        </NavigationMenuLink>
                    </li>
                    <ListItem href="/#about" title="About Neo-Classicism">
                        Journey through literary periods that shaped human thought.
                    </ListItem>
                    <ListItem href="/#tenets" title="Neo-Classical Tenets">
                        Discover the five fundamental principles of Neo-Classicism.
                    </ListItem>
                    <ListItem href="/#comparison" title="Literary Ages">
                        Compare Classical, Neo-Classical, and Romantic periods.
                    </ListItem>
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuTrigger>Literary Ages</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[400px]">
                    {literaryAges.map((age) => (
                    <ListItem key={age.title} title={age.title} href={age.href}>
                        {age.description}
                    </ListItem>
                    ))}
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
            <NavigationMenuTrigger>Authors</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                    <li>
                        <NavigationMenuLink asChild>
                            <Link href="/criticism" className="flex-row items-center gap-5 px-5">
                            <BookOpenIcon className="h-4 w-4" />
                            <div>
                                <div className="font-medium">Alexander Pope</div>
                                <div className="text-muted-foreground text-sm">
                                    An Essay on Criticism
                                </div>
                            </div>
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link href="/gullivers-travels" className="flex-row items-center gap-5 px-5">
                            <BookOpenIcon className="h-4 w-4" />
                            <div>
                                <div className="font-medium">Jonathan Swift</div>
                                <div className="text-muted-foreground text-sm">
                                    Gulliver's Travels
                                </div>
                            </div>
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link href="/phaedra" className="flex-row items-center gap-5 px-5">
                            <BookOpenIcon className="h-4 w-4" />
                            <div>
                                <div className="font-medium">Jean Racine</div>
                                <div className="text-muted-foreground text-sm">
                                    Phaedra
                                </div>
                            </div>
                            </Link>
                        </NavigationMenuLink>
                    </li>
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
        
    </NavigationMenuList>
</NavigationMenu>
)
}

function ListItem({
title,
children,
href,
...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
    <li {...props}>
        <NavigationMenuLink asChild>
            <Link href={href}>
            <div className="text-sm leading-none font-medium">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                {children}
            </p>
            </Link>
        </NavigationMenuLink>
    </li>
    )
    }
