"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function PhaedraPage() {
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
                            Drama
                        </Badge>

                        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Phaedra (Phèdre)
                        </h1>
                        
                        <p className="text-xl text-muted-foreground md:text-2xl">
                            by Jean Racine
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

                    {/* Key Characters */}
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

                    {/* Plot Summary */}
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

                            {/* Act II */}
                            <Card className="border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
                                <CardHeader>
                                    <Badge className="mb-3 w-fit">Act II</Badge>
                                    <CardTitle className="text-xl">Confessions and Conflicts (Rising Action)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            <span>Phèdre confesses her love to Hippolytus, who is horrified.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            <span>Her nurse Oenone urges her to protect her son's future by accusing Hippolytus of assault.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            <span>Phèdre is torn between shame and desire, but allows the lie to stand.</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Act III */}
                            <Card className="border-primary/50 bg-gradient-to-br from-primary/5 via-background to-background">
                                <CardHeader>
                                    <Badge className="mb-3 w-fit bg-primary">Act III</Badge>
                                    <CardTitle className="text-xl">The Return of Theseus (Climax)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            <span>Theseus unexpectedly returns, alive and well.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            <span>Oenone tells him Hippolytus tried to seduce Phèdre.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            <span>Enraged, Theseus curses his son using a divine favor from Neptune.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            <span>Phèdre remains silent, torn between guilt and fear.</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Act IV */}
                            <Card className="border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
                                <CardHeader>
                                    <Badge className="mb-3 w-fit">Act IV</Badge>
                                    <CardTitle className="text-xl">Truths and Tragedies (Falling Action)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            <span>Hippolytus decides to flee with Aricia, still proclaiming his innocence.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            <span>Phèdre overhears their love and is consumed by jealousy.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            <span>She begins to regret her silence but feels trapped by her earlier choices.</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Act V */}
                            <Card className="border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
                                <CardHeader>
                                    <Badge className="mb-3 w-fit">Act V</Badge>
                                    <CardTitle className="text-xl">Final Reckoning (Resolution)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            <span>News arrives: Hippolytus has been killed by a sea monster sent by Neptune.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            <span>Phèdre, devastated, confesses the truth to Theseus—clearing Hippolytus's name.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                            <span>She takes poison and dies, leaving Theseus to mourn his son and the ruin of his family.</span>
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
                        <CardContent className="space-y-6">
                            {/* Form */}
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

                            {/* Tone / Mood */}
                            <div>
                                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-foreground">
                                    <span className="text-2xl">🎭</span>
                                    Tone / Mood
                                </h3>
                                <div className="space-y-2 text-muted-foreground">
                                    <p><strong className="text-foreground">Tone:</strong> Serious, formal, and emotionally intense.</p>
                                    <p><strong className="text-foreground">Mood:</strong> Dark, tragic, and tense — filled with dread, sorrow, and moral struggle.</p>
                                </div>
                            </div>

                            <Separator />

                            {/* Point of View */}
                            <div>
                                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-foreground">
                                    <span className="text-2xl">👁️</span>
                                    Point of View
                                </h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                        <span>The play uses third-person dramatic perspective — no narrator.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                        <span>The story unfolds through dialogue and monologue.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                        <span>Phaedra's speeches reveal her inner turmoil, making her both tragic and relatable.</span>
                                    </li>
                                </ul>
                            </div>

                            <Separator />

                            {/* Conflict */}
                            <div>
                                <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-foreground">
                                    <span className="text-2xl">⚔️</span>
                                    Conflict
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="mb-2 font-semibold text-foreground">Internal Conflict (Self vs. Self):</h4>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                <span>Phaedra battles her own conscience, torn between forbidden love and moral duty.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                <span>Her guilt and shame drive her toward confession and ultimately death.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="mb-2 font-semibold text-foreground">External Conflict (Self vs. Person/Society):</h4>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                <span>Phaedra vs. Hippolytus — her love is rejected, creating emotional and social tension.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                <span>Phaedra vs. societal norms — her feelings violate moral expectations.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                <span>Hippolytus vs. Theseus — false accusations lead to tragic consequences.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Neo-Classical Characteristics */}
                    <Card className="overflow-hidden border-2 border-primary shadow-lg shadow-primary/10">
                        <CardHeader className="relative">
                            <div className="mb-3 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <span className="text-xl">🏛️</span>
                                </div>
                                <CardTitle className="text-2xl md:text-3xl">
                                    Characteristics that Make <em>Phaedra</em> Part of the Neo-Classical Age
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="relative space-y-6">
                            <div>
                                <h3 className="mb-3 text-lg font-semibold text-foreground">Strict Observance of the Three Unities</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span><strong className="text-foreground">Unity of Time</strong> – The entire plot unfolds within about 24 hours.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span><strong className="text-foreground">Unity of Place</strong> – All action happens in one location (Troezen).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span><strong className="text-foreground">Unity of Action</strong> – The story focuses on a single central conflict: Phaedra's forbidden love for Hippolytus and its tragic fallout.</span>
                                    </li>
                                </ul>
                            </div>

                            <Separator />

                            <div>
                                <h3 className="mb-3 text-lg font-semibold text-foreground">Inspiration from Classical Antiquity</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-3">
                                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Based on ancient Greek and Roman sources (<em>Hippolytus</em> by Euripides, <em>Phaedra</em> by Seneca).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Revives mythological themes but reshapes them to fit 17th-century French moral and artistic ideals.</span>
                                    </li>
                                </ul>
                            </div>

                            <Separator />

                            <div>
                                <h3 className="mb-3 text-lg font-semibold text-foreground">Moral Purpose</h3>
                                <p className="text-muted-foreground">
                                    Neo-Classical works aimed to "please and instruct" (<em>plaire et instruire</em>). <em>Phaedra</em> warns against the destructive power of uncontrolled passion and the consequences of defying moral law.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Moral Lessons */}
                    <Card className="border-border/50">
                        <CardHeader>
                            <div className="mb-3 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <span className="text-xl">💡</span>
                                </div>
                                <CardTitle className="text-2xl md:text-3xl">Moral Lessons</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>When desire overpowers reason, it leads to ruin — emotionally, socially, and morally.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Moral transgression brings inner torment, and hiding guilt only deepens the suffering.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Truth must be spoken, even when painful. Silence and deception can kill the innocent.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>No rank or privilege can excuse immoral actions or prevent justice.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>While family history may influence us, we are still responsible for our choices.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>True tragedy arises when people fail to master themselves.</span>
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
