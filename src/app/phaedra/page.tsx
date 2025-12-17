"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ClipboardList, BookOpen } from "lucide-react";

export default function PhaedraPage() {
    return (
        <div className="min-h-screen bg-background">


            <main className="container mx-auto px-4 py-12 md:py-16">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Left column: CTAs */}
                        <aside className="md:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <Card className="border border-border shadow-sm transition-colors px-6">
                                    <div className="py-6">
                                        <h3 className="font-bold text-lg mb-1 flex items-center gap-3">
                                            <span
                                                className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                                                <ClipboardList className="w-5 h-5" />
                                            </span>
                                            Take the Quiz
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-4">A short quiz to check your
                                            understanding of the drama's plot and themes.</p>
                                        <Link href="/phaedra/quiz">
                                            <Button className="w-full font-semibold" size="lg">Start Quiz</Button>
                                        </Link>
                                    </div>
                                </Card>

                                <Card className="border border-border shadow-sm transition-colors px-6">
                                    <div className="py-6">
                                        <h3 className="font-bold text-lg mb-1 flex items-center gap-3">
                                            <span
                                                className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                                                <BookOpen className="w-5 h-5" />
                                            </span>
                                            Read Full Text
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">Open the reader for
                                            the full play with navigation and controls. Adjust typography, jump between
                                            acts, and focus on close reading.</p>
                                        <Link href="/phaedra/read">
                                            <Button variant="outline" className="w-full font-semibold" size="lg">Open
                                                Reader</Button>
                                        </Link>
                                    </div>
                                </Card>
                            </div>
                        </aside>

                        {/* Right column: main content (restyled to match the document-style layout) */}
                        <section className="md:col-span-2 space-y-12">
                            <div className="space-y-12">
                                {/* Overview */}
                                <section>
                                    <div className="flex items-center gap-4 mb-4">
                                        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
                                    </div>
                                    <div className="text-lg text-muted-foreground leading-relaxed">
                                        <p>
                                            <span className="font-semibold text-foreground">Phèdre</span> by Jean Racine is a classical tragedy in five acts that centers on forbidden desire, honor, and the tragic consequences of passion. Racine adapts elements of the Hippolytus tradition to focus on Phèdre's inward torment and the social constraints that push events to catastrophe.
                                        </p>
                                    </div>
                                </section>

                                {/* The Drama (acts, document-style) */}
                                <section>
                                    <Card className="overflow-hidden bg-card/50">
                                        <div className="border-b bg-muted/40 p-8 text-center md:p-12">
                                            <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl font-serif">The Five Acts</h2>
                                            <p className="text-lg text-muted-foreground italic">
                                                A concise account of the play's acts and key events
                                            </p>
                                        </div>

                                        <CardContent className="p-8 md:p-12">
                                            <div className="space-y-12">
                                                {/* Act I */}
                                                <article>
                                                    <div className="mb-4 flex items-center gap-4">
                                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-serif font-bold text-primary">I</div>
                                                        <h3 className="text-2xl font-bold">Act I — Exposition</h3>
                                                    </div>
                                                    <div className="pl-14 space-y-4 text-muted-foreground leading-relaxed">
                                                        <ul className="list-disc ml-4 space-y-2">
                                                            <li>Phèdre, queen of Athens, is tormented by a secret: she’s in love with her stepson Hippolytus.</li>
                                                            <li>She believes her husband Theseus is dead.</li>
                                                            <li>Hippolytus, unaware of Phèdre’s feelings, prepares to leave Troezen—partly to escape his own love for Aricia, a noblewoman Theseus had forbidden him to marry.</li>
                                                        </ul>
                                                    </div>
                                                </article>

                                                <Separator />

                                                {/* Act II */}
                                                <article>
                                                    <div className="mb-4 flex items-center gap-4">
                                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-serif font-bold text-primary">II</div>
                                                        <h3 className="text-2xl font-bold">Act II — Rising Action</h3>
                                                    </div>
                                                    <div className="pl-14 space-y-4 text-muted-foreground leading-relaxed">
                                                        <ul className="list-disc ml-4 space-y-2">
                                                            <li>Phèdre confesses her love to Hippolytus, who is horrified.</li>
                                                            <li>Her nurse Oenone urges her to protect her son’s future by accusing Hippolytus of assault.</li>
                                                            <li>Phèdre is torn between shame and desire, but allows the lie to stand.</li>
                                                        </ul>
                                                    </div>
                                                </article>

                                                <Separator />

                                                {/* Act III */}
                                                <article>
                                                    <div className="mb-4 flex items-center gap-4">
                                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-serif font-bold text-primary">III</div>
                                                        <h3 className="text-2xl font-bold">Act III — Climax</h3>
                                                    </div>
                                                    <div className="pl-14 space-y-4 text-muted-foreground leading-relaxed">
                                                        <ul className="list-disc ml-4 space-y-2">
                                                            <li>Theseus unexpectedly returns, alive and well.</li>
                                                            <li>Oenone tells him Hippolytus tried to seduce Phèdre.</li>
                                                            <li>Enraged, Theseus curses his son using a divine favor from Neptune.</li>
                                                            <li>Phèdre remains silent, torn between guilt and fear.</li>
                                                        </ul>
                                                    </div>
                                                </article>

                                                <Separator />

                                                {/* Act IV */}
                                                <article>
                                                    <div className="mb-4 flex items-center gap-4">
                                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-serif font-bold text-primary">IV</div>
                                                        <h3 className="text-2xl font-bold">Act IV — Reversal</h3>
                                                    </div>
                                                    <div className="pl-14 space-y-4 text-muted-foreground leading-relaxed">
                                                        <ul className="list-disc ml-4 space-y-2">
                                                            <li>Hippolytus decides to flee with Aricia, still proclaiming his innocence.</li>
                                                            <li>Phèdre overhears their love and is consumed by jealousy.</li>
                                                            <li>She begins to regret her silence but feels trapped by her earlier choices.</li>
                                                        </ul>
                                                    </div>
                                                </article>

                                                <Separator />

                                                {/* Act V */}
                                                <article>
                                                    <div className="mb-4 flex items-center gap-4">
                                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-serif font-bold text-primary">V</div>
                                                        <h3 className="text-2xl font-bold">Act V — Catastrophe</h3>
                                                    </div>
                                                    <div className="pl-14 space-y-4 text-muted-foreground leading-relaxed">
                                                        <ul className="list-disc ml-4 space-y-2">
                                                            <li>News arrives: Hippolytus has been killed by a sea monster sent by Neptune.</li>
                                                            <li>Phèdre, devastated, confesses the truth to Theseus—clearing Hippolytus’s name.</li>
                                                            <li>She takes poison and dies, leaving Theseus to mourn his son and the ruin of his family.</li>
                                                        </ul>
                                                    </div>
                                                </article>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </section>

                                {/* Analysis */}
                                <section>
                                    <div className="flex items-center gap-4 mb-4">
                                        <h2 className="text-3xl font-bold tracking-tight">Analysis</h2>
                                    </div>
                                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                                        <div>
                                            <h3 className="mb-2 text-xl font-semibold">Form</h3>
                                            <p>
                                                <span className="font-semibold">Phèdre</span> is a Neo-Classical French tragedy written in alexandrine verse (12-syllable rhymed lines). It follows the Three Unities:
                                            </p>
                                            <ul className="mt-2 ml-4 list-disc space-y-1 text-sm text-muted-foreground">
                                                <li><strong className="text-foreground">Time:</strong> Events happen within one day.</li>
                                                <li><strong className="text-foreground">Place:</strong> All action occurs in Troezen.</li>
                                                <li><strong className="text-foreground">Action:</strong> Focuses on one central conflict — Phèdre’s forbidden love for Hippolytus.</li>
                                            </ul>
                                        </div>

                                        <Separator />

                                        <div>
                                            <h3 className="mb-2 text-xl font-semibold">Tone / Mood</h3>
                                            <p className="mb-1"><strong className="text-foreground">Tone:</strong> Serious, formal, and emotionally intense.</p>
                                            <p><strong className="text-foreground">Mood:</strong> Dark, tragic, and tense — filled with dread, sorrow, and moral struggle.</p>
                                        </div>

                                        <Separator />

                                        <div>
                                            <h3 className="mb-2 text-xl font-semibold">Point of View</h3>
                                            <p>
                                                The play uses a dramatic perspective without an omniscient narrator. The story unfolds through dialogue and monologue; Phèdre’s speeches reveal her inner turmoil, making her both tragic and relatable.
                                            </p>
                                        </div>

                                        <Separator />

                                        <div>
                                            <h3 className="mb-2 text-xl font-semibold">Conflict</h3>
                                            <p className="font-semibold text-foreground mb-2">Internal Conflict (Self vs. Self):</p>
                                            <p className="mb-2">Phèdre battles her own conscience, torn between forbidden love and moral duty. Her guilt and shame drive her toward confession and ultimately death.</p>
                                            <p className="font-semibold text-foreground mb-2">External Conflict (Self vs. Person / Society):</p>
                                            <ul className="ml-4 list-disc space-y-1 text-sm text-muted-foreground">
                                                <li>Phèdre vs. Hippolytus — her love is rejected, creating emotional and social tension.</li>
                                                <li>Phèdre vs. societal norms — her feelings violate moral expectations.</li>
                                                <li>Hippolytus vs. Theseus — false accusations lead to tragic consequences.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
