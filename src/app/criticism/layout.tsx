"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ReactNode } from "react";

export default function CriticismLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen ">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-border">
                <div className="absolute inset-0 -z-10">
                    <img
                        src="/An Essay on Criticism.png"
                        alt="An Essay on Criticism"
                        className="h-full w-full object-cover opacity-20 blur-xs"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
                </div>
                <div className="container relative mx-auto px-4 py-16 md:py-24">
                    <div className="mx-auto max-w-4xl">
                        <Link href="/">
                            <Button variant="ghost" className="mb-6">
                                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Home
                            </Button>
                        </Link>

                        <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20">
                            Poetry
                        </Badge>

                        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            An Essay on Criticism
                        </h1>
                        
                        <p className="text-xl text-muted-foreground md:text-2xl">
                            by Alexander Pope
                        </p>
                        <nav className="mt-6">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink asChild>
                                            <Link href="/criticism">Overview</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>

                                    <BreadcrumbSeparator />

                                    <BreadcrumbItem>
                                        <BreadcrumbLink asChild>
                                            <Link href="/criticism/view-essay">View Poem</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>

                                    <BreadcrumbSeparator />

                                    <BreadcrumbItem>
                                        <BreadcrumbLink asChild>
                                            <Link href="/criticism/quiz">Take Quiz</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </nav>
                    </div>
                </div>
            </section>

            {children}
        </div>
    );
}
