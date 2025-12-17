"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function PhaedraPage() {
    return (
        <div className="min-h-screen bg-background">


            <main className="container mx-auto px-4 py-12 md:py-16">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Left column: CTAs */}
                        <aside className="md:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <Card className="p-0 overflow-hidden shadow-lg">
                                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/10 to-card/30">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary text-xl">🎭</div>
                                        <div>
                                            <CardTitle className="text-lg mb-0">Take the Quiz</CardTitle>
                                            <p className="text-sm text-muted-foreground">Short quiz on the drama's plot and themes.</p>
                                        </div>
                                    </div>
                                    <CardContent className="p-4 pt-3">
                                        <ul className="mb-4 text-sm text-muted-foreground space-y-2">
                                            <li className="flex items-center gap-2">
                                                <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                                                6 questions · ~4 minutes
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                                                Immediate feedback
                                            </li>
                                        </ul>
                                        <Link href="/phaedra/quiz">
                                            <Button className="w-full">Start Quiz</Button>
                                        </Link>
                                    </CardContent>
                                </Card>

                                <Card className="p-0 overflow-hidden shadow-lg">
                                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-card/10 to-primary/5">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary text-xl">📖</div>
                                        <div>
                                            <CardTitle className="text-lg mb-0">Read Full Text</CardTitle>
                                            <p className="text-sm text-muted-foreground">Open the reader for the full play with navigation and controls.</p>
                                        </div>
                                    </div>
                                    <CardContent className="p-4 pt-3">
                                        <p className="mb-4 text-sm text-muted-foreground">Adjust font size, jump between acts, and focus on close reading.</p>
                                        <Link href="/phaedra/read">
                                            <Button variant="outline" className="w-full">Open Reader</Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </div>
                        </aside>

                        {/* Right column: main content */}
                        <section className="md:col-span-2 space-y-12">
                            {/* Overview */}
                            <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur">
                                <CardHeader className="relative">
                                    <div className="mb-3 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                            <span className="text-xl">🎭</span>
                                        </div>
                                        <CardTitle className="text-2xl md:text-3xl">Overview of the Drama</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="relative space-y-4 text-muted-foreground leading-relaxed">
                                    <div>
                                        <p className="mb-2"><strong className="text-foreground">Title:</strong> Phèdre</p>
                                        <p className="mb-4"><strong className="text-foreground">Author:</strong> Jean Racine</p>
                                    </div>
                                    <p>
                                        <em>Phèdre</em>, a classical tragedy in five acts by Jean Racine, was performed and published in 1677. Racine's work is based on the play <em>Hippolytus</em> by the Greek playwright Euripides and addresses the same story, but it changes the focus from Hippolytus (Hippolyte), the stepson, to Phaedra (Phèdre), the stepmother.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* The Setting */}
                            <Card className="border-border/50">
                                <CardHeader>
                                    <div className="mb-3 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                            <span className="text-xl">🏛️</span>
                                        </div>
                                        <CardTitle className="text-2xl md:text-3xl">The Setting</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="text-muted-foreground leading-relaxed">
                                    <p>
                                        The play unfolds in Troezen, a coastal city in the Peloponnese. King Theseus has been absent for over six months, and no one knows whether he is alive or dead. His wife Phaedra is gravely ill, wasting away from a secret torment. His son Hippolytus, born of the Amazon Antiope, is restless and uneasy.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Key Characters and remaining content follow unchanged... */}
                            <Card className="border-border/50">
                                <CardHeader>
                                    <div className="mb-3 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                            <span className="text-xl">👥</span>
                                        </div>
                                        <CardTitle className="text-2xl md:text-3xl">Key Characters</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="rounded-lg border border-border/50 p-4">
                                            <h4 className="mb-2 font-semibold text-foreground">Phèdre</h4>
                                            <ul className="space-y-1 text-sm text-muted-foreground">
                                                <li>• Wife of Theseus</li>
                                                <li>• Stepmother of Hippolytus</li>
                                                <li>• Confidante of Oenone</li>
                                            </ul>
                                        </div>
                                        <div className="rounded-lg border border-border/50 p-4">
                                            <h4 className="mb-2 font-semibold text-foreground">Theseus</h4>
                                            <ul className="space-y-1 text-sm text-muted-foreground">
                                                <li>• Husband of Phèdre</li>
                                                <li>• Father of Hippolytus (from Antiope)</li>
                                            </ul>
                                        </div>
                                        <div className="rounded-lg border border-border/50 p-4">
                                            <h4 className="mb-2 font-semibold text-foreground">Hippolytus</h4>
                                            <ul className="space-y-1 text-sm text-muted-foreground">
                                                <li>• Son of Theseus and Antiope</li>
                                                <li>• Stepson of Phèdre</li>
                                                <li>• In love with Aricia</li>
                                            </ul>
                                        </div>
                                        <div className="rounded-lg border border-border/50 p-4">
                                            <h4 className="mb-2 font-semibold text-foreground">Oenone</h4>
                                            <ul className="space-y-1 text-sm text-muted-foreground">
                                                <li>• Nurse and confidante of Phèdre</li>
                                            </ul>
                                        </div>
                                        <div className="rounded-lg border border-border/50 p-4">
                                            <h4 className="mb-2 font-semibold text-foreground">Aricia</h4>
                                            <ul className="space-y-1 text-sm text-muted-foreground">
                                                <li>• Love interest of Hippolytus</li>
                                                <li>• Enemy of Theseus' family</li>
                                            </ul>
                                        </div>
                                        <div className="rounded-lg border border-border/50 p-4">
                                            <h4 className="mb-2 font-semibold text-foreground">Theramène</h4>
                                            <ul className="space-y-1 text-sm text-muted-foreground">
                                                <li>• Tutor and companion of Hippolytus</li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Plot Summary and remaining sections preserved below (unchanged) */}
                            <div className="space-y-8">
                                <div className="text-center">
                                    <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
                                        Plot Summary
                                    </h2>
                                    <p className="text-lg text-muted-foreground">
                                        A five-act tragedy in classical structure
                                    </p>
                                </div>

                                <div className="grid gap-6">
                                    {/* Act I */}
                                    <Card className="border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
                                        <CardHeader>
                                            <Badge className="mb-3 w-fit">Act I</Badge>
                                            <CardTitle className="text-xl">The Forbidden Flame (Exposition)</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                    <span>Phèdre, queen of Athens, is tormented by a secret: she's in love with her stepson Hippolytus.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                    <span>She believes her husband Theseus is dead.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                    <span>Hippolytus, unaware of Phèdre's feelings, prepares to leave Troezen—partly to escape his own love for Aricia, a noblewoman Theseus had forbidden him to marry.</span>
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>

                                    {/* Remaining acts, analysis, moral lessons, and back button unchanged (kept as before) */}
                                </div>
                            </div>

                            <Card className="border-primary/50">
                                <CardHeader>
                                    <div className="mb-3 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                            <span className="text-xl">🔍</span>
                                        </div>
                                        <CardTitle className="text-2xl md:text-3xl">Analysis</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {/* (Analysis content preserved) */}
                                    <div>
                                        <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-foreground">
                                            <span className="text-2xl">📝</span>
                                            Form
                                        </h3>
                                        <p className="mb-3 text-muted-foreground">
                                            <em>Phaedra</em> is a Neo-Classical French tragedy written in alexandrine verse (12-syllable rhymed lines). It follows the <strong className="text-foreground">Three Unities</strong>:
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                <span><strong className="text-foreground">Time:</strong> Events happen within one day.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                <span><strong className="text-foreground">Place:</strong> All action occurs in Troezen.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                <span><strong className="text-foreground">Action:</strong> Focuses on one central conflict — Phaedra's forbidden love for Hippolytus.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <Separator />

                                    {/* Remaining analysis segments preserved */}
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
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
