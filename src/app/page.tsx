"use client"

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Users } from 'lucide-react';
import { InfiniteSlider } from "../components/ui/infinite-slider";
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import LightRays from "@/components/LightRays";


export default function Home() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

return (
<div className="min-h-screen bg-background">

    {/* Hero Section with Gradient */}
    <section className="relative overflow-hidden" style={{ minHeight: '600px' }}>
        <div className="absolute inset-0">
            <LightRays
                raysOrigin="top-center"
                raysColor="#10b981"
                raysSpeed={1.5}
                lightSpread={0.8}
                rayLength={1.2}
                followMouse={true}
                mouseInfluence={0.15}
                noiseAmount={0.1}
                distortion={0.05}
            />
        </div>
        <div className="container relative mx-auto px-4 py-24 md:py-32 mb-10">
            <div className="mx-auto max-w-5xl text-center">
                <Badge variant="secondary"
                    className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20">
                    The Age of Reason
                </Badge>

                <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl ">
                    <span
                        className="bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                        Explore the
                    </span>
                    <br />
                    <span
                        className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                        Neo-Classical Age
                    </span>
                </h1>

                <p className="mx-auto mb-10 max-w-3xl text-lg text-muted-foreground md:text-xl  leading-relaxed">
                    Journey through the literary period that revived classical antiquity ideals.
                    Discover timeless works emphasizing order, logic, and moral instruction.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25">
                        Start Exploring
                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                        View Collection
                    </Button>
                </div>
            </div>
        </div>
    </section>

    <main className="container mx-auto px-4 py-16 md:py-24">
        {/* About Section - Modern UI */}
        <section id="about" className="mb-55 flex justify-center ">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mx-auto w-full justify-center">
                <div className="space-y-6 text-center w-full flex flex-col items-center px-30">
                    <div className="flex items-center gap-3 justify-center w-full">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            About the Neo-Classical Age
                        </h2>
                    </div>

                    <div
                        className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-base w-full flex flex-col items-center">
                        <p className="w-full text-center">
                            The <span className="font-semibold text-foreground">Neo-Classical Age</span> also known as
                            the{" "}
                            <span className="font-semibold text-primary">Age of Reason</span> (late 17th to early 19th
                            century) was a literary period that revived the ideals of classical antiquity, particularly
                            those of ancient Greece and Rome.
                        </p>

                        <div className="flex flex-wrap gap-3 pb-15 justify-center w-full">
                            <Badge variant="secondary">
                                Classical Literature
                            </Badge>
                            <Badge variant="secondary">
                                Drama & Poetry
                            </Badge>
                            <Badge variant="secondary">
                                Satire & Critique
                            </Badge>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 justify-center w-full items-center ">
                            <Card className="border-border/50 md:w-1/2 w-full">
                                <CardHeader>
                                    <CardTitle className="text-lg flex">Literary Values & Purpose</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-base leading-relaxed text-muted-foreground text-left">
                                        Writers emphasized <span className="font-semibold text-foreground">order, logic,
                                            restraint, decorum</span>, and adherence to established forms. Literature
                                        was seen as a tool for moral instruction and societal refinement, reflecting the
                                        Enlightenment's intellectual climate.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-border/50 md:w-1/2 w-full">
                                <CardHeader>
                                    <CardTitle className="text-lg flex">Key Characteristics and Authors </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-base leading-relaxed text-muted-foreground text-left">
                                        This era is characterized by a conscious imitation of classical models, a belief
                                        in universal truths, and a focus on reason over emotion. The works of{" "}
                                        <span className="font-medium text-foreground">Jean Racine, Jonathan
                                            Swift</span>, and{" "}
                                        <span className="font-medium text-foreground">Alexander Pope</span> exemplify
                                        these ideals.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Tenets Bento Grid */}
        <section className="mb-50">
            <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                    Tenets of Neo-Classicism
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                    Five fundamental principles that defined the Neo-Classical literary movement
                </p>
            </div>

            <InfiniteSlider gap={24} reverse>
                {/* Medium Card - Reason */}
                <Card
                    className="group relative overflow-hidden border-border/50 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 w-[350px]">
                    <CardHeader>
                        <div
                            className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 transition-transform group-hover:scale-110">
                            <span className="text-3xl">🧠</span>
                        </div>
                        <CardTitle className="text-xl">Reason over Emotion</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Logic and rationality are valued more than feelings in literary expression. Reason was the
                            ultimate guide to truth and beauty for Neo-Classical writers.
                        </CardDescription>
                    </CardContent>
                </Card>

                {/* Medium Cards */}
                <Card
                    className="group relative overflow-hidden border-border/50 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 w-[350px]">
                    <CardHeader>
                        <div
                            className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 transition-transform group-hover:scale-110">
                            <span className="text-3xl">⚖️</span>
                        </div>
                        <CardTitle className="text-xl">Order & Harmony</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Literature must follow structure, balance, and clarity in its composition
                        </CardDescription>
                    </CardContent>
                </Card>

                <Card
                    className="group relative overflow-hidden border-border/50 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 w-[350px]">
                    <CardHeader>
                        <div
                            className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 transition-transform group-hover:scale-110">
                            <span className="text-3xl">📖</span>
                        </div>
                        <CardTitle className="text-xl">Moral Purpose</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Texts are meant to teach lessons and promote virtue in society
                        </CardDescription>
                    </CardContent>
                </Card>

                <Card
                    className="group relative overflow-hidden border-border/50 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 w-[350px]">
                    <CardHeader>
                        <div
                            className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 transition-transform group-hover:scale-110">
                            <span className="text-3xl">🏛️</span>
                        </div>
                        <CardTitle className="text-xl">Classical Imitation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Inspired by and modeled after Ancient Greek and Roman literature
                        </CardDescription>
                    </CardContent>
                </Card>

                <Card
                    className="group relative overflow-hidden border-border/50 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 w-[350px]">
                    <CardHeader>
                        <div
                            className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 transition-transform group-hover:scale-110">
                            <span className="text-3xl">🌍</span>
                        </div>
                        <CardTitle className="text-xl">Universality</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Focuses on human nature as a whole, not just individual experiences
                        </CardDescription>
                    </CardContent>
                </Card>
            </InfiniteSlider>
        </section>

        {/* Literary Ages Comparison - Horizontal Scroll */}
        <section className="mb-24">
            <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                    Literature Across the Ages
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                    Understanding the evolution from Classical to Neo-Classical to Romantic periods
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Classical Age */}
                <Card className="group relative overflow-hidden border-border/50 transition-all hover:shadow-xl">
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <CardHeader className="relative">
                        <Badge variant="secondary" className="mb-3 w-fit">Ancient Era</Badge>
                        <CardTitle className="text-2xl">Classical Age</CardTitle>
                    </CardHeader>
                    <CardContent className="relative space-y-6">
                        <div>
                            <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                Core Themes
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd" />
                                    </svg>
                                    Human nature and universal truths
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd" />
                                    </svg>
                                    Fate vs. free will
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd" />
                                    </svg>
                                    Moral order and justice
                                </li>
                            </ul>
                        </div>
                        <Separator />
                        <div>
                            <h4 className="mb-2 flex items-center gap-2 font-semibold text-foreground">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                Purpose
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                To teach moral lessons (didactic) and provide aesthetic pleasure. Reflect the ideal
                                order of the world.
                            </p>
                        </div>
                        <Separator />
                        <div>
                            <h4 className="mb-2 flex items-center gap-2 font-semibold text-foreground">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                Notable Works
                            </h4>
                            <div className="space-y-2">
                                <div className="rounded-lg bg-muted/50 p-3">
                                    <p className="font-medium text-foreground">Oedipus Rex</p>
                                    <p className="text-sm text-muted-foreground">by Sophocles</p>
                                </div>
                                <div className="rounded-lg bg-muted/50 p-3">
                                    <p className="font-medium text-foreground">Iliad</p>
                                    <p className="text-sm text-muted-foreground">by Homer</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Neo-Classical Age - Featured */}
                <Card
                    className="group relative overflow-hidden border-2 border-primary shadow-lg shadow-primary/10 transition-all hover:shadow-xl hover:shadow-primary/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
                    <CardHeader className="relative">
                        <Badge className="mb-3 w-fit shadow-sm">17th-18th Century</Badge>
                        <CardTitle className="text-2xl">Neo-Classical Age</CardTitle>
                    </CardHeader>
                    <CardContent className="relative space-y-6">
                        <div>
                            <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                Core Themes
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd" />
                                    </svg>
                                    Reason, logic, and moral order
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd" />
                                    </svg>
                                    Social commentary and satire
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd" />
                                    </svg>
                                    Human flaws and follies
                                </li>
                            </ul>
                        </div>
                        <Separator />
                        <div>
                            <h4 className="mb-2 flex items-center gap-2 font-semibold text-foreground">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                Purpose
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                To instruct and refine taste. Uphold rational thinking and critique society with
                                moral values.
                            </p>
                        </div>
                        <Separator />
                        <div>
                            <h4 className="mb-2 flex items-center gap-2 font-semibold text-foreground">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                Notable Works
                            </h4>
                            <div className="space-y-2">
                                <div className="rounded-lg bg-primary/10 p-3 border border-primary/20">
                                    <p className="font-medium text-foreground">An Essay on Criticism</p>
                                    <p className="text-sm text-muted-foreground">by Alexander Pope</p>
                                </div>
                                <div className="rounded-lg bg-primary/10 p-3 border border-primary/20">
                                    <p className="font-medium text-foreground">Gulliver's Travels</p>
                                    <p className="text-sm text-muted-foreground">by Jonathan Swift</p>
                                </div>
                                <div className="rounded-lg bg-primary/10 p-3 border border-primary/20">
                                    <p className="font-medium text-foreground">Phaedra</p>
                                    <p className="text-sm text-muted-foreground">by Jean Racine</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Romantic Age */}
                <Card className="group relative overflow-hidden border-border/50 transition-all hover:shadow-xl">
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <CardHeader className="relative">
                        <Badge variant="secondary" className="mb-3 w-fit">Late 18th-19th Century</Badge>
                        <CardTitle className="text-2xl">Romantic Age</CardTitle>
                    </CardHeader>
                    <CardContent className="relative space-y-6">
                        <div>
                            <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                Core Themes
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd" />
                                    </svg>
                                    Individual emotion and imagination
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd" />
                                    </svg>
                                    Nature as inspiration
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd" />
                                    </svg>
                                    The supernatural and sublime
                                </li>
                            </ul>
                        </div>
                        <Separator />
                        <div>
                            <h4 className="mb-2 flex items-center gap-2 font-semibold text-foreground">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                Purpose
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                To express personal feeling and inspire emotional response. Celebrate creativity and
                                human spirit.
                            </p>
                        </div>
                        <Separator />
                        <div>
                            <h4 className="mb-2 flex items-center gap-2 font-semibold text-foreground">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                Notable Works
                            </h4>
                            <div className="space-y-2">
                                <div className="rounded-lg bg-muted/50 p-3">
                                    <p className="font-medium text-foreground">Le Morte d'Arthur</p>
                                    <p className="text-sm text-muted-foreground">by Thomas Malory</p>
                                </div>
                                <div className="rounded-lg bg-muted/50 p-3">
                                    <p className="font-medium text-foreground">Hamlet</p>
                                    <p className="text-sm text-muted-foreground">by William Shakespeare</p>
                                </div>
                                <div className="rounded-lg bg-muted/50 p-3">
                                    <p className="font-medium text-foreground">Don Quixote</p>
                                    <p className="text-sm text-muted-foreground">by Miguel de Cervantes</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>



        {/* CTA Section */}
        <section className="relative overflow-hidden  ">
            <div className="relative p-12 md:p-16">
                <div className="mx-auto max-w-5xl">
                    <div className="text-center mb-12">
                        <Badge variant="secondary"
                            className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20">
                            Explore Neo-Classical Masterpieces
                        </Badge>
                        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                            Ready to Explore the Great Books?
                        </h2>
                        <p className="text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
                            Dive into three masterpieces that defined the Neo-Classical Age. Each work offers unique
                            insights into reason, morality, and human nature.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* An Essay on Criticism */}
                        <div
                            className="group relative aspect-[3/4] overflow-hidden rounded-lg border border-border/50  hover:shadow-lg">
                            <img src="/An Essay on Criticism.png" alt="An Essay on Criticism"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <ProgressiveBlur className='pointer-events-none absolute bottom-0 left-0 h-[60%] w-full'
                                blurIntensity={8} />
                            <div className='absolute bottom-0 left-0 w-full'>
                                <div className='flex flex-col items-start gap-2 px-6 py-5'>
                                    <p className='text-xl font-bold text-foreground'>An Essay on Criticism</p>
                                    <span className='text-sm text-muted-foreground mb-3'>by Alexander Pope</span>
                                    <p className='text-sm text-foreground/90 mb-4'>
                                        A masterful poetic treatise on literary criticism and the principles of good
                                        writing.
                                    </p>
                                    <Link href="/criticism" className="w-full">
                                    <Button className="w-full shadow-md " variant="outline">
                                        Explore Essay
                                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Phaedra */}
                        <div
                            className="group relative aspect-[3/4] overflow-hidden rounded-lg  hover:shadow-xl shadow-primary/10">
                            <img src="/Phaedra.png" alt="Phaedra"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <ProgressiveBlur className='pointer-events-none absolute bottom-0 left-0 h-[60%] w-full'
                                blurIntensity={8} />
                            <div className='absolute bottom-0 left-0 w-full'>
                                <div className='flex flex-col items-start gap-2 px-6 py-5'>
                                    <p className='text-xl font-bold text-foreground'>Phaedra</p>
                                    <span className='text-sm text-muted-foreground mb-3'>by Jean Racine</span>
                                    <p className='text-sm text-foreground/90 mb-4'>
                                        A tragic masterpiece exploring forbidden passion and moral conflict in classical
                                        form.
                                    </p>
                                    <Link href="/phaedra" className="w-full">
                                    <Button className="w-full shadow-md" variant="outline">
                                        Read Drama
                                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Gulliver's Travels */}
                        <div
                            className="group relative aspect-[3/4] overflow-hidden rounded-lg border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
                            <img src="/Gulliver's Travels.png" alt="Gulliver's Travels"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <ProgressiveBlur className='pointer-events-none absolute bottom-0 left-0 h-[60%] w-full'
                                blurIntensity={8} />
                            <div className='absolute bottom-0 left-0 w-full'>
                                <div className='flex flex-col items-start gap-2 px-6 py-5'>
                                    <p className='text-xl font-bold text-foreground'>Gulliver's Travels</p>
                                    <span className='text-sm text-muted-foreground mb-3'>by Jonathan Swift</span>
                                    <p className='text-sm text-foreground/90 mb-4'>
                                        A brilliant satirical adventure critiquing society, politics, and human nature.
                                    </p>
                                    <Link href="/gullivers-travels" className="w-full">
                                    <Button className="w-full shadow-md" variant="outline">
                                        Begin Adventure
                                        <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                            Each masterpiece represents a cornerstone of Neo-Classical literature
                        </p>
                    </div>
                </div>
            </div>
        </section>


        <footer className="mt-24 border-t border-border pt-12 text-center">
            <p className="text-sm text-muted-foreground">
                Curated by{" "}
                <span className="font-medium text-foreground">Manuel Andrei L. Lleva</span>,{" "}
                <span className="font-medium text-foreground">Meshe Mae N. Barquilla</span>, and{" "}
                <span className="font-medium text-foreground">Kim Antonette B. Bron</span>
            </p>
        </footer>
    </main>
</div>
);
}
