import Link from 'next/link';

const previews = [
  <><path fill="#7b93a8" d="M17 58C15 26 38 12 65 22c16 6 20 23 11 39-12 22-43 27-65 12z" /><path fill="#c96442" d="M38 36c18-18 38-18 55 1-13 20-35 21-55 6z" /></>,
  <><path fill="#8a9a5b" d="M18 74c-8-38 10-62 40-65 17 31 5 61-29 70z" /><path fill="#c9a227" d="M59 80c-5-35 12-58 40-63 12 31-4 57-31 67z" /><path fill="#c96442" d="M28 79c18-31 39-48 62-60" /></>,
  <><path fill="#c9a227" d="m13 62 29-45 20 21 24-16 12 45-48 17z" /><path fill="#7b93a8" d="m44 38 18 17-18 18-18-17z" /></>,
  <><path fill="#c96442" d="M14 64c6-35 32-53 62-42 22 8 25 34 9 55-25 9-50 0-71-13z" /><path fill="#8a9a5b" d="M50 18c-3 28 4 47 23 62" /></>,
  <><path fill="#7b93a8" d="M11 49c19-29 49-35 70-14 14 14 8 40-11 52-26 4-48-11-59-38z" /><path fill="#c9a227" d="M37 45h39v29H37z" /></>,
  <><path fill="#8a9a5b" d="M15 76c-3-42 22-65 52-65 18 23 8 57-21 73z" /><path fill="#c96442" d="M68 79c-10-27-5-51 17-63 18 19 12 47-5 63z" /></>,
  <><path fill="#c96442" d="M15 73c8-38 32-58 65-52 23 4 29 31 16 52-22 16-57 15-81 0z" /><path fill="#7b93a8" d="M34 30h44v31H34z" /><path fill="#c9a227" d="M43 39h25v12H43z" /></>,
];

const surfaces = ['#e3dacc', '#f5e3c7', '#dfe5e1', '#f2ddd1', '#e1e7eb', '#eee0cb', '#e3dacc'];

function PreviewArt({ variant, title, featured }) {
  return <div className={`paper-grain flex shrink-0 items-center justify-center overflow-hidden rounded-[.85rem] ${featured ? 'mb-7 aspect-[16/8] w-full' : 'h-28 w-32 sm:h-32 sm:w-40'}`} style={{ backgroundColor: surfaces[variant % surfaces.length] }}><svg viewBox="0 0 110 100" className={featured ? 'h-44 w-48' : 'h-24 w-28'} role="img" aria-label={`Illustrated preview for ${title}`}><defs><filter id={`preview-${variant}`}><feTurbulence type="fractalNoise" baseFrequency=".025" numOctaves="2" seed={variant + 20} result="noise" /><feDisplacementMap in="SourceGraphic" in2="noise" scale="3" /></filter></defs><g filter={`url(#preview-${variant})`} stroke="#1a1815" strokeWidth="3.5" strokeLinejoin="round">{previews[variant % previews.length]}</g></svg></div>;
}

function FeatureIllustration() {
  return <svg viewBox="0 0 420 230" className="h-auto w-full max-w-sm" role="img" aria-label="Two speech bubbles crossing paths"><defs><filter id="feature-rough"><feTurbulence type="fractalNoise" baseFrequency=".018" numOctaves="2" seed="13" result="noise" /><feDisplacementMap in="SourceGraphic" in2="noise" scale="3" /></filter></defs><g filter="url(#feature-rough)" stroke="#1a1815" strokeWidth="4" strokeLinejoin="round"><path fill="#7b93a8" d="M48 65c11-36 52-52 90-34 27 13 31 49 8 73-22 22-58 22-87 5l-36 17 16-34c-3-9 0-18 9-27z" /><path fill="#c96442" d="M230 117c18-32 60-37 90-14 22 17 20 52-2 71-24 20-59 15-79-7l-37 7 19-30c-4-9-1-18 9-27z" /><path fill="#8a9a5b" d="M155 207c-16-34-9-65 19-85 21 28 18 61-5 86z" /><path fill="#c9a227" d="M298 205c-5-33 11-59 42-68 10 31-4 57-31 71z" /></g><path d="M96 83h28M253 138h29" stroke="#1a1815" strokeWidth="4" strokeLinecap="round" /></svg>;
}

export default function PostCard({ post, featured = false, variant = 0 }) {
  const text = <div className="min-w-0 flex-1"><p className="mb-3 text-sm text-[var(--muted)]">{post.date}</p><Link href={`/posts/${post.slug}`} className="group block"><h2 className={`editorial-serif font-bold leading-[1.05] tracking-[-.035em] transition-colors group-hover:text-[var(--terracotta)] ${featured ? 'text-4xl sm:text-5xl' : 'text-2xl sm:text-3xl'}`}>{post.title}</h2><p className="mt-3 max-w-xl leading-relaxed text-[#4b443b]">{post.description}</p><span className="mt-5 inline-block text-sm font-bold underline decoration-1 underline-offset-4 group-hover:text-[var(--terracotta)]">Read article <span aria-hidden="true">→</span></span></Link></div>;
  return <article className={featured ? 'pb-4 md:pb-0' : 'border-b site-rule py-7 first:pt-0'}>{featured ? <><PreviewArt variant={variant} title={post.title} featured />{text}<div className="mt-12 flex justify-center border-t site-rule pt-9 md:mt-16"><FeatureIllustration /></div></> : <div className="flex gap-5"><PreviewArt variant={variant} title={post.title} />{text}</div>}</article>;
}
