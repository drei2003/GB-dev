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
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <Link href="/">
              <Button variant="ghost" className="mb-6">
                ← Back to Home
              </Button>
            </Link>
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20">
              Novel
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Gulliver's Travels
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">by Jonathan Swift</p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Overview */}
          <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur">
            <CardHeader className="relative">
              <div className="mb-3 flex items-center gap-3">
                <Badge variant="secondary">Overview</Badge>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-3 text-muted-foreground">
              <p>
                <span className="font-semibold">Gulliver's Travels</span> by Jonathan Swift is a satirical adventure novel about Lemuel Gulliver's four journeys to strange lands. Each voyage — to Lilliput, Brobdingnag, Laputa, and the Houyhnhnms — reflects human flaws like pride, corruption, and greed. The novel uses fantasy and adventure to criticize society and explore reason, morality, and human nature.
              </p>
            </CardContent>
          </Card>

          {/* The Four Journeys */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
                The Four Journeys
              </h2>
              <p className="text-lg text-muted-foreground">
                Gulliver's adventures across strange lands
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* 1st Journey */}
              <Card className="border-border/50">
                <CardHeader>
                  <div className="mb-3 flex items-center gap-2">
                    <Badge variant="secondary">1st Journey</Badge>
                    <span>Voyage to Lilliput</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground ml-2">
                    <li>Gulliver's ship is wrecked; he wakes on the island of Lilliput</li>
                    <li>The people are 6 inches tall and at first tie him up</li>
                    <li>He wins their trust and helps them in battles and daily life</li>
                    <li>But the Lilliputians fight over silly issues (like which end of an egg to break)</li>
                    <li>Politics and jealousy turn against him, so Gulliver escapes to Blefuscu and later returns to England</li>
                  </ul>
                </CardContent>
              </Card>

              {/* 2nd Journey */}
              <Card className="border-border/50">
                <CardHeader>
                  <div className="mb-3 flex items-center gap-2">
                    <Badge variant="secondary">2nd Journey</Badge>
                    <span>Voyage to Brobdingnag</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground ml-2">
                    <li>On his next trip, Gulliver lands in Brobdingnag, the land of giants</li>
                    <li>Now, he is the tiny one—treated like a pet by a farmer and later by the queen</li>
                    <li>He tells the king about Europe, but the king calls Europeans corrupt, greedy, and violent</li>
                    <li>Gulliver realizes how small and weak humans look from the giants' perspective</li>
                    <li>An eagle snatches his traveling box and drops it into the sea, where he is rescued</li>
                  </ul>
                </CardContent>
              </Card>

              {/* 3rd Journey */}
              <Card className="border-border/50">
                <CardHeader>
                  <div className="mb-3 flex items-center gap-2">
                    <Badge variant="secondary">3rd Journey</Badge>
                    <span>Voyage to Laputa and Other Islands</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground ml-2">
                    <li>Gulliver visits Laputa, a flying island of scientists obsessed with math and music</li>
                    <li>They create useless experiments (like extracting sunlight from cucumbers)</li>
                    <li>In Balnibarbi, he sees failed scientific projects ruining the land</li>
                    <li>In Glubbdubdrib, he summons the dead and learns that history's heroes had flaws</li>
                    <li>In Luggnagg, he meets the Struldbrugs, immortals who grow old forever, showing that eternal life can be a curse</li>
                    <li>He eventually returns to England</li>
                  </ul>
                </CardContent>
              </Card>

              {/* 4th Journey */}
              <Card className="border-border/50">
                <CardHeader>
                  <div className="mb-3 flex items-center gap-2">
                    <Badge variant="secondary">4th Journey</Badge>
                    <span>Voyage to the Houyhnhnms</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground ml-2">
                    <li>Gulliver's final voyage brings him to the land of the Houyhnhnms, intelligent horses</li>
                    <li>They live peacefully, guided by reason and logic</li>
                    <li>Opposite them are the Yahoos, savage human-like creatures who are greedy and violent</li>
                    <li>Gulliver admires the horses and wants to stay, but they see him as a Yahoo and send him away</li>
                    <li>He returns to England but is disgusted with humans, seeing them as no better than Yahoos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Analysis */}
          <Card className="border-primary/50">
            <CardHeader>
              <div className="mb-3 flex items-center gap-3">
                <Badge variant="secondary">Analysis</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <span className="font-semibold">Gulliver's Travels</span> is Swift's satire that shows human weakness. The Lilliputians fight over small things, the scientists focus on useless knowledge, and the Houyhnhnms represent reason—but Gulliver's obsession with them makes him lose balance. It can be seen as both comedy and a warning about human flaws.
              </p>
            </CardContent>
          </Card>

          {/* Neo-Classical Characteristics */}
          <Card className="overflow-hidden border-2 border-primary shadow-lg shadow-primary/10">
            <CardHeader className="relative">
              <div className="mb-3 flex items-center gap-3">
                <Badge variant="secondary">Neo-Classical Characteristics</Badge>
              </div>
            </CardHeader>
            <CardContent className="relative space-y-6">
              <div className="space-y-2">
                <h4 className="font-semibold">Emphasis on Reason and Rationality</h4>
                <p className="text-sm text-muted-foreground">
                  The novel prioritizes logic and rational thinking, particularly through the Houyhnhnms who embody pure reason.
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h4 className="font-semibold">Didactic Purpose</h4>
                <p className="text-sm text-muted-foreground">
                  Each journey teaches moral lessons about human nature, society, and the dangers of pride and corruption.
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h4 className="font-semibold">Satire and Criticism of Society</h4>
                <p className="text-sm text-muted-foreground">
                  Swift uses satire to critique 18th-century European society, politics, science, and human behavior.
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h4 className="font-semibold">Imitation of Classical Ideals</h4>
                <p className="text-sm text-muted-foreground">
                  The work follows classical literary traditions of using allegory and structured narratives to convey deeper meanings.
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <h4 className="font-semibold">Universal Themes about Human Nature</h4>
                <p className="text-sm text-muted-foreground">
                  The novel explores timeless themes of pride, greed, reason versus passion, and the flaws inherent in humanity.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Back to Home Button */}
          <div className="pt-8 text-center">
            <Link href="/">
              <Button variant="outline" size="lg">
                ← Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
