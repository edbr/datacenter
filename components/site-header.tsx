"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { chapters } from "@/lib/chapters";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <>
    <header className="site-header">
      <Link href="/" className="brand">The Cost of Intelligence</Link>
      <div className="header-meta"><span>Interactive analysis</span><span>2026</span></div>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle chapter menu">{open ? <X/> : <Menu/>}<span>Index</span></button>
    </header>
    <div className={`menu-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <div className="menu-intro">Read the story</div>
      <nav>{chapters.map(c => <Link key={c.slug} href={`/chapters/${c.slug}`} onClick={() => setOpen(false)} className={pathname.endsWith(c.slug) ? "active" : ""}><span>{c.number}</span>{c.short}</Link>)}</nav>
      <p>A journey through the hidden infrastructure powering artificial intelligence.</p>
    </div>
  </>;
}
