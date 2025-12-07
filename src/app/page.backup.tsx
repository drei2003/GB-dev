import { Badge } from "@/components/ui/badge";
import Link from "next/link"
import { TextLoop } from '@/components/ui/text-loop';
import LightRays from '@/components/LightRays';
import CardSwap, { Card } from '@/components/CardSwap'


export default function Home() {
return (
<div className="font-sans min-h-screen p-4 pb-12 sm:p-8 sm:pb-20 lg:p-20">
    <section
        className="relative flex flex-col gap-2 sm:gap-3 items-start justify-center min-h-screen -mt-12 sm:-mt-20 overflow-hidden">
        {/* Background Masonry Image Gallery */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background z-10" />
            <div
                className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent/80 to-background z-10" />
            <div className="columns-2 sm:columns-3 gap-2 sm:gap-3 h-full">
                <img src="/img1.avif" alt="" className="w-full mb-2 object-cover rounded-lg" />
                <img src="/bg-neo.avif" alt="" className="w-full mb-2 object-cover h-48 sm:h-64 rounded-lg" />
                <img src="/img2.jpeg" alt="" className="w-full mb-2 object-cover h-64 sm:h-96 rounded-lg" />
                <img src="/img3.jpg" alt="" className="w-full mb-2 object-cover rounded-lg" />
                <img src="/img6.jpg" alt="" className="w-full mb-2 object-cover h-56 sm:h-80 rounded-lg" />
                <img src="/img4.png" alt="" className="w-full mb-2 object-cover rounded-lg" />
            </div>
        </div>
        {/* Content */}
        <div className="flex gap-2 justify-center w-full flex-wrap">
            <Badge asChild variant="default" className=" w-fit">
                <Link href="/">Great Books</Link>
            </Badge>
            <Badge asChild variant="outline" className="w-fit">
                <Link href="/">BSIT-4A</Link>
            </Badge>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center w-full px-4">
            <span>Neo-Classical</span> Age
        </h1>
        <p className="text-base sm:text-lg text-center w-full px-90">A comprehensive exploration of Neo-Classical
            literary conventions, celebrating the timeless principles of reason, order, and classical beauty</p>
        <div className='inline-flex whitespace-pre-wrap text-xs sm:text-sm gap-2 justify-center w-full px-4 flex-wrap'>
            <p> Prepared by:</p>
            <Badge asChild variant="secondary" className="  w-fit">
                <Link href="/">Manuel Andrei Lleva</Link>
            </Badge>
            <Badge asChild variant="secondary" className="  w-fit">
                <Link href="/">Meshe Mae Barquilla</Link>
            </Badge>
            <Badge asChild variant="secondary" className="  w-fit">
                <Link href="/">Kim Antonette Bron</Link>
            </Badge>

        </div>
    </section>

    <main className="flex flex-col gap-6 sm:gap-8 max-w-5xl mx-auto">

        <section className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                The Neo-Classical Age—also known as the Age of Reason (late 17th to
                early 19th century)—was a literary period that revived the ideals of
                classical antiquity, particularly those of ancient Greece and Rome. Writers
                emphasized order, logic, restraint, decorum, and adherence to
                established forms. Literature was seen as a tool for moral instruction and
                societal refinement, reflecting the Enlightenment's intellectual climate.
                This era is characterized by a conscious imitation of classical models, a
                of Jean Racine, Jonathan Swift, and Alexander Pope exemplify these
                ideals.
            </p>


            <div className="border-2 rounded-lg h-[500px] relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-gradient-to-tl from-primary/30 via-secondary/10 to-background -z-10" />
                <div className="absolute inset-0 flex items-center justify-start p-8">
                    <div className="text-left space-y-4 max-w-lg">
                        <h1
                            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Discover Neo-Classical Literature
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Experience the timeless wisdom and elegance of the Age of Reason through interactive
                            exploration
                        </p>
                    </div>
                </div>
                <CardSwap cardDistance={60} verticalDistance={70} delay={3000} pauseOnHover={false}>
                    <Card>
                        <div className="p-6 border-2 bg-secondary/50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Card 1</h3>
                            <img src="/img1.avif" alt="" className="w-full mb-2 object-cover rounded-lg" />
                            <p className="text-muted-foreground">Your content here</p>
                        </div>
                    </Card>
                    <Card>
                        <div className="p-6 border-2 bg-secondary/50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Card 2</h3>
                            <img src="/img1.avif" alt="" className="w-full mb-2 object-cover rounded-lg" />
                            <p className="text-muted-foreground">Your content here</p>
                        </div>
                    </Card>
                    <Card>
                        <div className="p-6 border-2 bg-secondary/50 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Card 3</h3>
                            <img src="/img1.avif" alt="" className="w-full mb-2 object-cover rounded-lg" />
                            <p className="text-muted-foreground">Your content here</p>
                        </div>
                    </Card>
                </CardSwap>
            </div>

        </section>

        <section className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">Tenets of Neo-Classicism</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm sm:text-base">
                <li>Reason over emotion – logic and rationality are valued more than feelings</li>
                <li>Order, balance, and harmony – literature must follow structure and clarity</li>
                <li>Moral and didactic purpose – texts are meant to teach lessons and promote virtue</li>
                <li>Imitation of classical works – inspired by Ancient Greek and Roman literature</li>
                <li>Universality – focuses on human nature as a whole, not just individual experiences</li>
            </ul>
        </section>

        <section className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">Major Authors</h2>
            <div className="grid gap-3 sm:gap-4">
                <div className="border rounded-lg p-3 sm:p-4">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Alexander Pope</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Master of the heroic couplet and satirical
                        verse.</p>
                </div>
                <div className="border rounded-lg p-3 sm:p-4">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Jonathan Swift</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Renowned for his biting satire and prose
                        works.</p>
                </div>
                <div className="border rounded-lg p-3 sm:p-4">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Samuel Johnson</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Lexicographer, critic, and moral essayist.
                    </p>
                </div>
            </div>
        </section>

        <section className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">Classical vs. Neo-Classical</h2>
            <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                <div className="border rounded-lg p-3 sm:p-4 space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold">Classical</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                        The Classical Age is rooted in ancient Greek and Roman traditions, emphasizing:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm sm:text-base">
                        <li>Themes: Fate, heroism, the gods, moral virtue, tragic flaw</li>
                        <li>Genres such as epic (e.g., Iliad) and tragedy (e.g., Oedipus the King)</li>
                        <li>Adherence to form and structure, often guided by Aristotle's Poetics</li>
                    </ul>
                </div>
                <div className="border rounded-lg p-3 sm:p-4 space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold">Neo-Classical</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                        The Neo-Classical Age emerged during the Age of Reason (17th–18th centuries), reviving classical
                        ideals but adapting them to Enlightenment values:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground text-sm sm:text-base">
                        <li>Emphasis on reason, logic, and decorum</li>
                        <li>Satire and wit as tools for social critique</li>
                        <li>Themes: Reason, logic, moral instruction, social order, self-control</li>
                        <li>Revives and adapts Classical themes, myths, and forms for a later audience</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">Cultural Context</h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                This period coincided with the Enlightenment, emphasizing scientific inquiry and rational thought.
                The growth of coffeehouses, literary clubs, and periodicals created new venues for intellectual
                exchange.
                Social and political upheaval, including the Glorious Revolution and the rise of party politics,
                influenced literary production significantly.
            </p>
        </section>

        <section className="space-y-3 sm:space-y-4 pb-6 sm:pb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold">Legacy</h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                The Neo-Classical Age established standards of taste and criticism that influenced subsequent literary
                movements. Its emphasis on clarity, wit, and social engagement continues to resonate in modern
                literature.
                The period's major works remain essential reading for understanding the development of English
                literature.
            </p>
        </section>
    </main>
</div>
);
}
