"use client";


import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GulliversTravelsPage() {
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary text-xl">🧭</div>
                    <div>
                      <CardTitle className="text-lg mb-0">Take the Quiz</CardTitle>
                      <p className="text-sm text-muted-foreground">A short quiz to check your understanding of Gulliver's journeys.</p>
                    </div>
                  </div>
                  <CardContent className="p-4 pt-3">
                    <ul className="mb-4 text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                        7 questions · ~5 minutes
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                        Immediate feedback
                      </li>
                    </ul>
                    <Link href="/gullivers-travels/quiz">
                      <Button className="w-full">Start Quiz</Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="p-0 overflow-hidden shadow-lg">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-card/10 to-primary/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary text-xl">📚</div>
                    <div>
                      <CardTitle className="text-lg mb-0">Read Full Text</CardTitle>
                      <p className="text-sm text-muted-foreground">Open the reader for the full voyages with navigation and controls.</p>
                    </div>
                  </div>
                  <CardContent className="p-4 pt-3">
                    <p className="mb-4 text-sm text-muted-foreground">Adjust typography, jump between voyages, and focus on close reading.</p>
                    <Link href="/gullivers-travels/read">
                      <Button variant="outline" className="w-full">Open Reader</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </aside>

            {/* Right column: main content */}
            <section className="md:col-span-2 space-y-12">
              <div className="space-y-12">
                {/* Overview */}
                <section>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary">Overview</Badge>
                    <h2 className="text-2xl font-semibold">Overview</h2>
                  </div>
                  <div className="text-muted-foreground">
                    <p>
                      <span className="font-semibold">Gulliver's Travels</span> by Jonathan Swift is a satirical adventure novel about Lemuel Gulliver's four journeys to strange lands. Each voyage — to Lilliput, Brobdingnag, Laputa, and the Houyhnhnms — reflects human flaws like pride, corruption, and greed. The novel uses fantasy and adventure to criticize society and explore reason, morality, and human nature.
                    </p>
                  </div>
                </section>

                {/* The Four Journeys (document-style) */}
                <section>
                  <div className="text-center mb-6">
                    <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">The Four Journeys</h2>
                    <p className="text-lg text-muted-foreground">Gulliver's adventures, summarized with key events and themes.</p>
                  </div>

                  <div className="space-y-8">
                    <section>
                      <h3 className="text-2xl font-semibold">Voyage I — Lilliput</h3>
                      <p className="text-muted-foreground">
                        Lemuel Gulliver is shipwrecked and wakes on the shore of Lilliput, where the inhabitants are tiny. He is at first captive but later earns favor with the Emperor by demonstrating gentleness and learning local customs.
                      </p>
                      <p className="text-muted-foreground">
                        His actions—saving the empire from Blefuscu's fleet—make him a hero, but political intrigue and a scandal (including his putting out a palace fire in an indecorous way) lead to his conviction for treason and eventual escape.
                      </p>
                      <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                        <li>Shipwreck and capture by Lilliputians</li>
                        <li>Learned local language and customs; becomes valued</li>
                        <li>Defends Lilliput from Blefuscu but is later disgraced and escapes</li>
                      </ul>
                    </section>

                    <Separator />

                    <section>
                      <h3 className="text-2xl font-semibold">Voyage II — Brobdingnag</h3>
                      <p className="text-muted-foreground">
                        On his second voyage Gulliver is left on Brobdingnag, a land of giants. The scale is reversed: he is tiny in a world of sixty-foot people and becomes an object of curiosity, eventually living at the royal court.
                      </p>
                      <p className="text-muted-foreground">
                        Conversations with the King expose the limits and vices of European society—Gulliver's descriptions of European politics and weaponry horrify the monarch, who judges humanity harshly.
                      </p>
                      <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                        <li>Gulliver displayed as a curiosity, then becomes part of the Queen's court</li>
                        <li>Perils of smallness: attacks by animals and other mishaps</li>
                        <li>King's moral critique of European civilization</li>
                      </ul>
                    </section>

                    <Separator />

                    <section>
                      <h3 className="text-2xl font-semibold">Voyage III — Laputa and Others</h3>
                      <p className="text-muted-foreground">
                        The third voyage takes Gulliver through a series of curious lands: the floating island Laputa (obsessed with abstract knowledge), Balnibarbi (site of impractical scientific projects), Glubbdubdrib (where he summons historical ghosts), Luggnagg (home of the miserable immortals, the Struldbrugs), and finally Japan.
                      </p>
                      <p className="text-muted-foreground">
                        Swift uses these episodes to satirize pseudo-intellectualism, misguided science, and the follies of human ambition.
                      </p>
                      <ol className="list-decimal ml-6 text-muted-foreground space-y-1">
                        <li>Laputa: detached theorists and distracted rulers</li>
                        <li>Balnibarbi/Lagado: impractical experiments and failed projects</li>
                        <li>Glubbdubdrib: summoned historical figures reveal unreliable histories</li>
                        <li>Luggnagg: Struldbrugs—undesirable immortality</li>
                      </ol>
                    </section>

                    <Separator />

                    <section>
                      <h3 className="text-2xl font-semibold">Voyage IV — Houyhnhnms</h3>
                      <p className="text-muted-foreground">
                        In the final voyage Gulliver encounters the Houyhnhnms, a rational and virtuous race of horses, and the Yahoos, brutish humanlike creatures. He learns the Houyhnhnms' language and admires their ordered society.
                      </p>
                      <p className="text-muted-foreground">
                        The contrast between Houyhnhnms and Yahoos leads Gulliver to despise human nature and wish to remain among the horses, but the Houyhnhnms ultimately banish him to prevent the risk of a rational Yahoo rising up.
                      </p>
                      <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                        <li>Houyhnhnms: reason-based, peaceful society</li>
                        <li>Yahoos: representation of humanity's basest features</li>
                        <li>Gulliver's disillusionment with human society and exile</li>
                      </ul>
                    </section>
                  </div>
                </section>

                {/* Analysis */}
                <section>
                  <div className="mb-3 flex items-center gap-3">
                    <Badge variant="secondary">Analysis</Badge>
                    <h2 className="text-2xl font-semibold">Analysis</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <span className="font-semibold">Gulliver's Travels</span> is Swift's satire that shows human weakness. The Lilliputians fight over small things, the scientists focus on useless knowledge, and the Houyhnhnms represent reason—but Gulliver's obsession with them makes him lose balance. It can be seen as both comedy and a warning about human flaws.
                    </p>
                  </div>
                </section>

                {/* Neo-Classical Characteristics */}
                <section>
                  <div className="mb-3 flex items-center gap-3">
                    <Badge variant="secondary">Neo-Classical Characteristics</Badge>
                    <h2 className="text-2xl font-semibold">Neo-Classical Characteristics</h2>
                  </div>
                  <div className="relative space-y-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Emphasis on Reason and Rationality</h4>
                      <p className="text-sm text-muted-foreground">The novel prioritizes logic and rational thinking, particularly through the Houyhnhnms who embody pure reason.</p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <h4 className="font-semibold">Didactic Purpose</h4>
                      <p className="text-sm text-muted-foreground">Each journey teaches moral lessons about human nature, society, and the dangers of pride and corruption.</p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <h4 className="font-semibold">Satire and Criticism of Society</h4>
                      <p className="text-sm text-muted-foreground">Swift uses satire to critique 18th-century European society, politics, science, and human behavior.</p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <h4 className="font-semibold">Imitation of Classical Ideals</h4>
                      <p className="text-sm text-muted-foreground">The work follows classical literary traditions of using allegory and structured narratives to convey deeper meanings.</p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <h4 className="font-semibold">Universal Themes about Human Nature</h4>
                      <p className="text-sm text-muted-foreground">The novel explores timeless themes of pride, greed, reason versus passion, and the flaws inherent in humanity.</p>
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
  