"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import {
    BookOpen,
    PenTool,
    Search,
    Layers,
    CheckSquare,
    FileText,
    MessageCircle,
    Music,
    Image,
    Repeat,
    Clock,
    Lightbulb,
    Landmark,
} from "lucide-react";

// --- Data for the page ---
const overviewPoints = [
    "Written by Alexander Pope when he was 23 in 1711",
    "A didactic poem written in heroic couplets",
    "One of Pope's earliest major works that established his reputation",
    "Offers advice to writers and critics on judgment and taste",
    "Influenced by Quintilian, Aristotle, Horace, and Boileau",
    "Stresses moderation, clarity, and balance in art and criticism",
    "Warns against pride, ignorance, and extremes",
    "Balances reason, nature, and literary rules to guide art and criticism",
];

const authorBackgroundParagraphs = [
    "Alexander Pope was an English poet, translator, and satirist. He was a Roman Catholic, which meant he faced many restrictions: he could not go to university, hold public office, or live in certain places like London.",
    "He suffered from poor health all his life—he was very short, had a curved spine, and needed constant care.",
    "Despite these challenges, Pope became one of the most successful poets of his time, earning his living through poetry and translations (like his famous translation of Homer).",
    "He was also known as a wit (clever thinker and writer) and even designed gardens as a hobby.",
    "He died in Twickenham on May 30, 1744, at the age of 56.",
];

const mainPoints = [
    {
        part: "Part I",
        quote: "A little learning is a dangerous thing.",
        points: ["Critics often lack true taste", "Nature as the ultimate standard", "Writers must know their limits"],
    },
    {
        part: "Part II",
        quote: "To err is human, to forgive, divine.",
        points: ["Mistakes critics make", "Rules should guide, not dominate", "Avoid extremes: harshness or blind praise"],
    },
    {
        part: "Part III",
        quote: "Fools rush in where angels fear to tread.",
        points: ["Qualities of a true critic", "True critics are rare (humility + learning)", "Pride and ignorance corrupt taste"],
    },
];

const analysisParagraphs = [
    <>Alexander Pope's <em>Essay on Criticism</em> shows what makes a true critic by highlighting humility, balance, and reason. He warns against pride and ignorance, reminding that clarity and moderation are important in both writing and judging.</>,
    "Written in heroic couplets, the poem reflects order and discipline. Pope's formal diction and instructive tone guide readers while exposing the errors of arrogant critics. Through vivid imagery, like a fool exposing himself, he shows the contrast between wisdom and ignorance.",
    "Overall, he connects art, nature, and reason as the main guides of true criticism.",
];

const literaryElements = [
    { icon: <BookOpen className="text-3xl" />, title: "Form", content: "Heroic couplets (two rhyming lines in iambic pentameter)" },
    {
        icon: <MessageCircle className="text-3xl" />,
        title: "Diction",
        content: (
            <>
                <p className="mb-2">Formal, witty, and full of aphorisms (short memorable sayings).</p>
                <p>Uses classical references (e.g., Greek muses, “Pierian spring”).</p>
            </>
        ),
    },
    { icon: <Music className="text-3xl" />, title: "Tone", content: "Didactic (teaching), critical but balanced, sometimes satirical." },
    {
        icon: <Image className="text-3xl" />,
        title: "Imagery",
        content: "Uses nature imagery (spring, water, growth) and balance (hills, valleys) to explain knowledge and criticism.",
    },
    {
        icon: <Repeat className="text-3xl" />,
        title: "Rhythm",
        content: "Smooth and regular, guided by iambic pentameter, creating a steady and formal flow.",
    },
    { icon: <Music className="text-3xl" />, title: "Rhyme", content: "Couplets rhyme in an AA, BB, CC pattern, making lines memorable." },
    {
        icon: <Clock className="text-3xl" />,
        title: "Meter",
        content: "Iambic pentameter (10 syllables per line, alternating unstressed and stressed: da-DUM da-DUM da-DUM da-DUM da-DUM).",
    },
    {
        icon: <Lightbulb className="text-3xl" />,
        title: "Theme / Main Idea",
        content: (
            <>
                <p className="mb-2">True criticism requires humility, patience, and deep knowledge.</p>
                <p>Shallow learning is dangerous, while balanced judgment leads to wisdom.</p>
            </>
        ),
    },
];

const neoClassicalPoints = [
    "It uses heroic couplets to show order and balance.",
    "It emphasizes reason, moderation, and clarity over emotions.",
    "It is didactic, teaching readers proper judgment in literature.",
    "It follows classical influences (like Aristotle and Horace) but adapts them to the Enlightenment.",
];

// --- Reusable Components ---
const SectionHeader = ({ icon, title }: { icon: string; title: string }) => (
    <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <span className="text-xl">{icon}</span>
        </div>
        <CardTitle className="text-2xl md:text-3xl">{title}</CardTitle>
    </div>
);

const BulletListItem = ({ children, size = "md" }: { children: React.ReactNode; size?: "sm" | "md" }) => {
    const sizeClasses = size === "md" ? "h-1.5 w-1.5 mt-1.5" : "h-1 w-1 mt-1.5";
    return (
        <li className="flex items-start gap-2">
            <span className={`shrink-0 rounded-full bg-primary ${sizeClasses}`} />
            <span>{children}</span>
        </li>
    );
};

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
        <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
        />
    </svg>
);

const CheckListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <span>{children}</span>
    </li>
);

const BackArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

export default function CriticismPage() {
    return (
        <main className="container mx-auto px-4 py-12 md:py-20">

            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Left column: CTAs (redesigned) */}
                    <aside className="md:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <Card className="p-0 overflow-hidden shadow-lg">
                                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/10 to-card/30">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary text-xl">📝</div>
                                    <div>
                                        <CardTitle className="text-lg mb-0">Take the Quiz</CardTitle>
                                        <p className="text-sm text-muted-foreground">A short 5-question quiz to test your understanding.</p>
                                    </div>
                                </div>
                                <CardContent className="p-4 pt-3">
                                    <ul className="mb-4 text-sm text-muted-foreground space-y-2">
                                        <li className="flex items-center gap-2">
                                            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                                            5 questions · ~3 minutes
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                                            Immediate feedback
                                        </li>
                                    </ul>
                                    <Link href="/criticism/quiz">
                                        <Button className="w-full">Start Quiz</Button>
                                    </Link>
                                </CardContent>
                            </Card>

                            <Card className="p-0 overflow-hidden shadow-lg">
                                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-card/10 to-primary/5">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary text-xl">📜</div>
                                    <div>
                                        <CardTitle className="text-lg mb-0">View Full Poem</CardTitle>
                                        <p className="text-sm text-muted-foreground">Open the poem reader with navigation and reader controls.</p>
                                    </div>
                                </div>
                                <CardContent className="p-4 pt-3">
                                    <p className="mb-4 text-sm text-muted-foreground">Adjust font size, toggle width, and jump between parts for focused reading.</p>
                                    <Link href="/criticism/view-essay">
                                        <Button variant="outline" className="w-full">Open Poem</Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </aside>

                    {/* Right column: main content */}
                    <article className="md:col-span-2">
                        <div className="space-y-12">
                            {/* Overview */}
                            <section>
                                <div className="flex items-center gap-4 mb-4">
                                    <BookOpen className="h-8 w-8 text-primary" />
                                    <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
                                </div>
                                <ul className="space-y-2 text-muted-foreground">
                                    {overviewPoints.map((point, index) => (
                                        <BulletListItem key={index}>{point}</BulletListItem>
                                    ))}
                                </ul>
                            </section>

                            <Separator />

                            {/* Background of the Author */}
                            <section>
                                <div className="flex items-center gap-4 mb-4">
                                    <PenTool className="h-8 w-8 text-primary" />
                                    <h2 className="text-3xl font-bold tracking-tight">Background of the Author</h2>
                                </div>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    {authorBackgroundParagraphs.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>
                            </section>

                            <Separator />

                            {/* Main Points - Three Parts */}
                            <section>
                                <div className="flex items-start gap-4 mb-8">
                                    <Layers className="h-8 w-8 flex-shrink-0 text-primary mt-1" />
                                    <div>
                                        <h2 className="text-3xl font-bold tracking-tight">Main Points of the Poem</h2>
                                        <p className="text-lg text-muted-foreground mt-1">The essay is divided into three distinct parts.</p>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    {mainPoints.map((item) => (
                                        <div key={item.part}>
                                            <h3 className="text-xl font-semibold mb-2">{item.part}</h3>
                                            <blockquote className="border-l-4 pl-4 italic text-muted-foreground mb-4">
                                                &ldquo;{item.quote}&rdquo;
                                            </blockquote>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                {item.points.map((point, index) => (
                                                    <BulletListItem key={index} size="sm">
                                                        {point}
                                                    </BulletListItem>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <Separator />

                            {/* Analysis */}
                            <section>
                                <div className="flex items-center gap-4 mb-4">
                                    <Search className="h-8 w-8 text-primary" />
                                    <h2 className="text-3xl font-bold tracking-tight">Analysis</h2>
                                </div>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    {analysisParagraphs.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>
                            </section>

                            <Separator />

                            {/* Literary Elements */}
                            <section>
                                <div className="flex items-start gap-4 mb-8">
                                    <FileText className="h-8 w-8 flex-shrink-0 text-primary mt-1" />
                                    <div>
                                        <h2 className="text-3xl font-bold tracking-tight">Literary Elements</h2>
                                        <p className="text-lg text-muted-foreground mt-1">The building blocks of Pope's poetic argument.</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    {literaryElements.map((el) => (
                                        <div key={el.title}>
                                            <div className="flex items-center gap-3 mb-2">
                                                {React.cloneElement(el.icon, { className: "h-6 w-6 text-muted-foreground" })}
                                                <h3 className="text-xl font-semibold">{el.title}</h3>
                                            </div>
                                            <div className="pl-9 text-muted-foreground">
                                                {typeof el.content === "string" ? <p>{el.content}</p> : el.content}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <Separator />

                            {/* Neo-Classical Classification */}
                            <section>
                                <div className="flex items-start gap-4 mb-4">
                                    <Landmark className="h-8 w-8 flex-shrink-0 text-primary mt-1" />
                                    <h2 className="text-3xl font-bold tracking-tight">Why An Essay on Criticism is Classified as Neo-Classical</h2>
                                </div>
                                <ul className="space-y-3 text-muted-foreground">
                                    {neoClassicalPoints.map((point, index) => (
                                        <CheckListItem key={index}>{point}</CheckListItem>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    );
}
