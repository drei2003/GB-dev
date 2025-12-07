"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function CriticismPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-border">
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
                    </div>
                </div>
            </section>

            <main className="container mx-auto px-4 py-12 md:py-16">
                <div className="mx-auto max-w-4xl space-y-12">
                    {/* Overview */}
                    <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur">
                        <CardHeader className="relative">
                            <div className="mb-3 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <span className="text-xl">📖</span>
                                </div>
                                <CardTitle className="text-2xl md:text-3xl">Overview</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="relative space-y-3 text-muted-foreground">
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    <span>Written by Alexander Pope when he was 23 in 1711</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    <span>A didactic poem written in heroic couplets</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    <span>One of Pope's earliest major works that established his reputation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    <span>Offers advice to writers and critics on judgment and taste</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    <span>Influenced by Quintilian, Aristotle, Horace, and Boileau</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    <span>Stresses moderation, clarity, and balance in art and criticism</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    <span>Warns against pride, ignorance, and extremes</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    <span>Balances reason, nature, and literary rules to guide art and criticism</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Background of the Author */}
                    <Card className="border-border/50">
                        <CardHeader>
                            <div className="mb-3 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <span className="text-xl">✍️</span>
                                </div>
                                <CardTitle className="text-2xl md:text-3xl">Background of the Author</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Alexander Pope was an English poet, translator, and satirist. He was a Roman Catholic, which meant he faced many restrictions: he could not go to university, hold public office, or live in certain places like London.
                            </p>
                            <p>
                                He suffered from poor health all his life—he was very short, had a curved spine, and needed constant care.
                            </p>
                            <p>
                                Despite these challenges, Pope became one of the most successful poets of his time, earning his living through poetry and translations (like his famous translation of Homer).
                            </p>
                            <p>
                                He was also known as a wit (clever thinker and writer) and even designed gardens as a hobby.
                            </p>
                            <p>
                                He died in Twickenham on May 30, 1744, at the age of 56.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Main Points - Three Parts */}
                    <div className="space-y-8">
                        <div className="text-center">
                            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
                                Main Points of the Poem
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                The essay is divided into three distinct parts
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {/* Part I */}
                            <Card className="group border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
                                <CardHeader>
                                    <Badge className="mb-3 w-fit">Part I</Badge>
                                    <CardTitle className="text-xl mb-3">
                                        &ldquo;A little learning is a dangerous thing.&rdquo;
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                            <span>Critics often lack true taste</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                            <span>Nature as the ultimate standard</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                            <span>Writers must know their limits</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Part II */}
                            <Card className="group border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
                                <CardHeader>
                                    <Badge className="mb-3 w-fit">Part II</Badge>
                                    <CardTitle className="text-xl mb-3">
                                        &ldquo;To err is human, to forgive, divine.&rdquo;
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                            <span>Mistakes critics make</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                            <span>Rules should guide, not dominate</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                            <span>Avoid extremes: harshness or blind praise</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Part III */}
                            <Card className="group border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
                                <CardHeader>
                                    <Badge className="mb-3 w-fit">Part III</Badge>
                                    <CardTitle className="text-xl mb-3">
                                        &ldquo;Fools rush in where angels fear to tread.&rdquo;
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                            <span>Qualities of a true critic</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                            <span>True critics are rare (humility + learning)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                            <span>Pride and ignorance corrupt taste</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Analysis */}
                    <Card className="border-primary/50">
                        <CardHeader>
                            <div className="mb-3 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <span className="text-xl">🔍</span>
                                </div>
                                <CardTitle className="text-2xl md:text-3xl">Analysis</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Alexander Pope's <em>Essay on Criticism</em> shows what makes a true critic by highlighting humility, balance, and reason. He warns against pride and ignorance, reminding that clarity and moderation are important in both writing and judging.
                            </p>
                            <p>
                                Written in heroic couplets, the poem reflects order and discipline. Pope's formal diction and instructive tone guide readers while exposing the errors of arrogant critics. Through vivid imagery, like a fool exposing himself, he shows the contrast between wisdom and ignorance. 
                            </p>
                            <p>
                                Overall, he connects art, nature, and reason as the main guides of true criticism.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Literary Elements Grid */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Form */}
                        <Card className="border-border/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <span className="text-2xl">📝</span>
                                    Form
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                Heroic couplets (two rhyming lines in iambic pentameter)
                            </CardContent>
                        </Card>

                        {/* Diction */}
                        <Card className="border-border/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <span className="text-2xl">💬</span>
                                    Diction
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                <p className="mb-2">Formal, witty, and full of aphorisms (short memorable sayings).</p>
                                <p>Uses classical references (e.g., Greek muses, &ldquo;Pierian spring&rdquo;).</p>
                            </CardContent>
                        </Card>

                        {/* Tone */}
                        <Card className="border-border/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <span className="text-2xl">🎭</span>
                                    Tone
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                Didactic (teaching), critical but balanced, sometimes satirical.
                            </CardContent>
                        </Card>

                        {/* Imagery */}
                        <Card className="border-border/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <span className="text-2xl">🌿</span>
                                    Imagery
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                Uses nature imagery (spring, water, growth) and balance (hills, valleys) to explain knowledge and criticism.
                            </CardContent>
                        </Card>

                        {/* Rhythm */}
                        <Card className="border-border/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <span className="text-2xl">🎵</span>
                                    Rhythm
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                Smooth and regular, guided by iambic pentameter, creating a steady and formal flow.
                            </CardContent>
                        </Card>

                        {/* Rhyme */}
                        <Card className="border-border/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <span className="text-2xl">🎶</span>
                                    Rhyme
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                Couplets rhyme in an AA, BB, CC pattern, making lines memorable.
                            </CardContent>
                        </Card>

                        {/* Meter */}
                        <Card className="border-border/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <span className="text-2xl">📏</span>
                                    Meter
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                Iambic pentameter (10 syllables per line, alternating unstressed and stressed: da-DUM da-DUM da-DUM da-DUM da-DUM).
                            </CardContent>
                        </Card>

                        {/* Theme */}
                        <Card className="border-border/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <span className="text-2xl">💡</span>
                                    Theme / Main Idea
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground">
                                <p className="mb-2">True criticism requires humility, patience, and deep knowledge.</p>
                                <p>Shallow learning is dangerous, while balanced judgment leads to wisdom.</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Neo-Classical Classification */}
                    <Card className="overflow-hidden border-2 border-primary shadow-lg shadow-primary/10">
                        <CardHeader className="relative">
                            <div className="mb-3 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <span className="text-xl">🏛️</span>
                                </div>
                                <CardTitle className="text-2xl md:text-3xl">
                                    Why <em>An Essay on Criticism</em> is Classified as Neo-Classical
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="relative">
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>It uses heroic couplets to show order and balance.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>It emphasizes reason, moderation, and clarity over emotions.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>It is didactic, teaching readers proper judgment in literature.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>It follows classical influences (like Aristotle and Horace) but adapts them to the Enlightenment.</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Back to Home Button */}
                    <div className="pt-8 text-center">
                        <Link href="/">
                            <Button size="lg" variant="outline" className="h-12 px-8">
                                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
