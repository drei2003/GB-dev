"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function ProgressBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setProgress(20);

    const inc = setTimeout(() => setProgress(60), 200);
    const finish = setTimeout(() => setProgress(100), 600);
    const hide = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 900);

    return () => {
      clearTimeout(inc);
      clearTimeout(finish);
      clearTimeout(hide);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] h-1 bg-transparent">
      <div
        className="h-0.5 bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-900 dark:from-zinc-700 dark:via-zinc-500 dark:to-zinc-300"
        style={{
          width: `${progress}%`,
          transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          borderRadius: 4,
        }}
      />
    </div>
  );
}
