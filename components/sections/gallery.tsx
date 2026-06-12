"use client"

import { useState, useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { weddingData } from "@/lib/wedding-data"

export function Gallery() {
  const { gallery } = weddingData
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % gallery.length)),
    [gallery.length],
  )
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i - 1 + gallery.length) % gallery.length,
      ),
    [gallery.length],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [active, close, next, prev])

  return (
    <section id="galeri" className="bg-secondary/40 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Momen Indah" title="Galeri Foto" />

        <Reveal className="mt-14">
          <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
            {gallery.map((src, index) => (
              <button
                key={src}
                onClick={() => setActive(index)}
                className="group block w-full overflow-hidden rounded-xl border border-border shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={`Buka foto ${index + 1}`}
              >
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Galeri foto ${index + 1}`}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute right-5 top-5 rounded-full bg-background/15 p-2 text-background transition-colors hover:bg-background/25"
              aria-label="Tutup"
            >
              <X className="size-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              className="absolute left-3 rounded-full bg-background/15 p-2 text-background transition-colors hover:bg-background/25 md:left-8"
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="size-7" />
            </button>
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={gallery[active] || "/placeholder.svg"}
              alt={`Galeri foto ${active + 1}`}
              className="max-h-[85vh] max-w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              className="absolute right-3 rounded-full bg-background/15 p-2 text-background transition-colors hover:bg-background/25 md:right-8"
              aria-label="Berikutnya"
            >
              <ChevronRight className="size-7" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
