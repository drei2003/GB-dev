"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ACTS = [
  {
    id: "act-1",
    title: "Act I — The Forbidden Passion",
    paragraphs: [
      "The play opens in Troezen. Hippolytus tells his tutor that he plans to leave the city, claiming he will search for his missing father, Theseus, who has been gone for six months. His real motive is to escape his stepmother, Phaedra, and to flee his confusing feelings for Aricia, the captive princess.",
      "Phaedra is introduced in a state of physical and mental collapse: she refuses to eat or sleep and longs for death. Under pressure from her nurse, Oenone, she confesses that she is cursed by Venus and madly in love with her stepson, Hippolytus. She hates herself for this incestuous passion and has tried to banish him to kill her feelings, but it has failed.",
      "News arrives that King Theseus is dead. Oenone points out that Phaedra's love is no longer adulterous and urges her to live and form a political alliance with Hippolytus to protect her son's claim to the throne.",
    ],
  },
  {
    id: "act-2",
    title: "Act II — The Confession",
    paragraphs: [
      "Aricia confesses to a confidante that she is in love with Hippolytus. Hippolytus arrives and tells Aricia that, since his father is dead, he is revoking the laws that kept her captive and that she is free; he awkwardly admits he has fallen in love with her.",
      "Phaedra enters to ask Hippolytus for protection for her son but, overcome by passion, slips into a trance and, in delirium, confesses her love to him. Hippolytus is horrified and repulsed. Rejected, Phaedra demands he kill her with his sword; when he refuses she runs away, leaving his sword in her possession.",
    ],
  },
  {
    id: "act-3",
    title: "Act III — The Return of the King",
    paragraphs: [
      "Phaedra, humiliated, prepares to beg Hippolytus for love and offers him the crown of Athens. Suddenly, news arrives that Theseus is alive and has returned to Troezen.",
      "Terrified that Hippolytus will reveal her confession, Phaedra contemplates suicide again. Oenone proposes a plan: accuse Hippolytus of attempting to rape Phaedra before he can accuse her. She points out that the sword is 'evidence.' Phaedra, weak and confused, allows Oenone to take charge.",
      "When Theseus returns, Phaedra refuses to greet him warmly, claiming she is 'defiled' and unworthy, which puzzles Theseus.",
    ],
  },
  {
    id: "act-4",
    title: "Act IV — The False Accusation and Curse",
    paragraphs: [
      "Oenone lies to Theseus, saying Hippolytus attempted to force himself on Phaedra and dropped his sword when she resisted. Theseus believes the nurse and refuses to hear his son's defense.",
      "Hippolytus swears his innocence and admits his love for Aricia, but Theseus dismisses it and in rage banishes Hippolytus and prays to Neptune to destroy him.",
      "Phaedra, feeling guilt, momentarily pleads for Hippolytus's life but then, consumed by jealousy when Theseus mentions Aricia, falls silent and thus seals Hippolytus's fate.",
    ],
  },
  {
    id: "act-5",
    title: "Act V — The Tragic Conclusion",
    paragraphs: [
      "Hippolytus plans to flee with Aricia. Phaedra curses Oenone for the disastrous advice; Oenone, heartbroken, drowns herself in the sea.",
      "Theseus begins to doubt the accusation and calls for Oenone, only to learn she is dead and that Phaedra is insane. Theramenes arrives with news: a sea monster (sent by Neptune) caused Hippolytus's chariot to crash, and Hippolytus was dragged to his death.",
      "Phaedra, dying from a slow poison, confesses everything to Theseus: Hippolytus was innocent and she alone is guilty. She clears his name and dies. Theseus, broken, vows to treat Aricia as his own daughter to honor his lost son.",
    ],
  },
];

export default function PhaedraReadPage() {
  const [fontSize, setFontSize] = useState<"md" | "lg" | "xl">("md");
  const [narrow, setNarrow] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const partRefs = useRef<Array<HTMLElement | null>>([]);

  const handleJumpTo = (index: number) => {
    const el = partRefs.current[index];
    if (!el) return;
    const headerOffset = 120;
    const y = window.scrollY + el.getBoundingClientRect().top - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Phaedra — Reader</h1>
            <p className="text-sm text-muted-foreground">Reader with navigation, font and width controls.</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/phaedra">
              <Button variant="outline">← Back</Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                <h3 className="text-sm font-medium mb-2">Reader Controls</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Button variant={fontSize === "md" ? undefined : "outline"} onClick={() => setFontSize("md")}>A</Button>
                    <Button variant={fontSize === "lg" ? undefined : "outline"} onClick={() => setFontSize("lg")}>A+</Button>
                    <Button variant={fontSize === "xl" ? undefined : "outline"} onClick={() => setFontSize("xl")}>A++</Button>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant={narrow ? undefined : "outline"} onClick={() => setNarrow(true)}>Narrow</Button>
                    <Button variant={!narrow ? undefined : "outline"} onClick={() => setNarrow(false)}>Wide</Button>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                <h3 className="text-sm font-medium mb-2">Acts</h3>
                <nav className="flex flex-col space-y-2">
                  {ACTS.map((v, i) => (
                    <button key={v.id} onClick={() => handleJumpTo(i)} className="text-left hover:underline">
                      {v.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          <section className="md:col-span-3">
            <div ref={containerRef} className={`mx-auto ${narrow ? "max-w-prose" : "max-w-3xl"} prose prose-lg dark:prose-invert`}>
              {ACTS.map((act, idx) => (
                <article key={act.id} ref={(el) => { partRefs.current[idx] = el; }} className="mb-12 scroll-mt-32">
                  <h2 className={`mt-6 ${fontSize === "md" ? "text-2xl" : fontSize === "lg" ? "text-3xl" : "text-4xl"}`}>{act.title}</h2>
                  {act.paragraphs.map((p, i) => (
                    <p key={i} className={fontSize === "md" ? "text-base" : fontSize === "lg" ? "text-lg" : "text-xl"}>{p}</p>
                  ))}
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
