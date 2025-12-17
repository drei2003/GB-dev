"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const VOYAGES = [
  {
    id: "voyage-1",
    title: "Voyage I — Lilliput",
    paragraphs: [
      "Lemuel Gulliver, a surgeon and sea captain, is shipwrecked and washes ashore on the island of Lilliput. He wakes up to find himself bound by ropes and surrounded by tiny people about six inches tall.",
      "Gulliver is initially a prisoner but eventually earns the trust of the Emperor of Lilliput by behaving gently. He learns their language and customs, which are often absurd—for example, political appointments are decided by rope-dancing skills, and two factions (the Tramecksan and Slamecksan) fight over whether to wear high or low heels.",
      "Gulliver becomes a hero when he wades into the ocean and captures the entire invasion fleet of the neighboring enemy kingdom, Blefuscu. However, he falls out of favor when he refuses to enslave the Blefuscudians completely and when he puts out a fire in the Empress’s palace by urinating on it. Convicted of treason and sentenced to be blinded, he escapes to Blefuscu and eventually finds a passing boat to return home to England.",
    ],
  },
  {
    id: "voyage-2",
    title: "Voyage II — Brobdingnag",
    paragraphs: [
      "Gulliver sets sail again and is abandoned by his crew on the peninsula of Brobdingnag. Here, the scale is reversed: the inhabitants are giants, sixty feet tall. A farmer finds Gulliver and treats him like a curiosity, exhibiting him for money.",
      "Gulliver is eventually sold to the Queen of Brobdingnag and becomes a favorite at court. His stay is filled with dangerous mishaps due to his small size—he is attacked by rats, insects, and even a jealous court dwarf.",
      "He discusses the government and history of England with the King of Brobdingnag. Gulliver proudly describes European gunpowder and politics, but the King is horrified, concluding that humans are 'the most pernicious race of little odious vermin that nature ever suffered to crawl upon the surface of the earth.' Gulliver leaves Brobdingnag when his portable travel box is picked up by a giant eagle and dropped into the sea, where he is rescued by human sailors.",
    ],
  },
  {
    id: "voyage-3",
    title: "Voyage III — Laputa & Others",
    paragraphs: [
      "On his third voyage, Gulliver is captured by pirates and cast adrift. He discovers the flying island of Laputa, inhabited by people devoted entirely to abstract mathematics and music. They are so lost in thought that they need servants (called 'flappers') to hit them with bladders to get their attention. The Laputans rule over the land below, Balnibarbi.",
      "Gulliver visits the Grand Academy of Lagado in Balnibarbi, where 'projectors' (scientists) conduct useless experiments, such as extracting sunbeams from cucumbers or softening marble for pillows. This section satirizes the Royal Society and useless scientific speculation.",
      "He then travels to Glubbdubdrib, an island of sorcerers, where he summons the ghosts of historical figures and learns that history books are full of lies. In Luggnagg, he meets the Struldbrugs, immortals who do not have eternal youth; they grow old, senile, and miserable forever, curing Gulliver of his desire for immortality. He finally travels to Japan and then back to England.",
    ],
  },
  {
    id: "voyage-4",
    title: "Voyage IV — Houyhnhnms",
    paragraphs: [
      "In his final and most transformative journey, Gulliver is mutinied against by his crew and left in a land ruled by the Houyhnhnms, a race of intelligent, rational, and virtuous horses. They share the land with the Yahoos, savage, filthy, and greedy humanoid creatures who represent humanity in its basest form.",
      "Gulliver learns the Houyhnhnms' language and comes to admire their society, which is free of lies, war, and greed. He tries to explain human society to his Houyhnhnm master, but the master cannot understand concepts like lying or war.",
      "Gulliver begins to loathe himself and all humans, seeing them as merely civilized Yahoos. He hopes to stay with the Houyhnhnms forever, but they eventually banish him because they fear a rational Yahoo could lead a revolt.",
    ],
  },
];

const CONTENTS = [
  { id: "intro01", label: "THE PUBLISHER TO THE READER." },
  { id: "intro02", label: "A LETTER FROM CAPTAIN GULLIVER TO HIS COUSIN SYMPSON." },
  { id: "part01", label: "PART I. A VOYAGE TO LILLIPUT." },
  { id: "part02", label: "PART II. A VOYAGE TO BROBDINGNAG." },
  { id: "part03", label: "PART III. A VOYAGE TO LAPUTA, BALNIBARBI, GLUBBDUBDRIB, LUGGNAGG AND JAPAN." },
  { id: "part04", label: "PART IV. A VOYAGE TO THE COUNTRY OF THE HOUYHNHNMS." },
];  

export default function GulliverReadPage() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const baseHref = "/Gulliver’s Travels _ Project Gutenberg.html";
  const [iframeSrc, setIframeSrc] = useState(() => encodeURI(baseHref));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Gulliver's Travels — Reader</h1>
            <p className="text-sm text-muted-foreground">Reader with navigation.</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/gullivers-travels">
              <Button variant="outline">← Back</Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
            <div className="sticky top-24 space-y-4">
              

              <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                <h3 className="text-sm font-medium mb-2">Contents</h3>
                <nav className="flex flex-col space-y-2">
                  {CONTENTS.map((c) => (
                    <button key={c.id} onClick={() => {
                      setIframeSrc(encodeURI(`${baseHref}#${c.id}`));
                      setMounted(true);
                    }} className="text-left hover:underline">
                      {c.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          <section className="md:col-span-3">
            <div className="mx-auto">
              {!mounted && (
                <div className="p-8 text-center">Loading reader...</div>
              )}

              {mounted && (
                <iframe
                  ref={iframeRef}
                  title="Gulliver's Travels - Project Gutenberg"
                  src={iframeSrc}
                  className="w-full h-[80vh] rounded border"
                  style={{ minHeight: '640px' }}
                />
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
