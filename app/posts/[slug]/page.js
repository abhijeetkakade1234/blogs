import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug, getAllSlugs } from '../../../lib/mdx';
import ArticleMarginArt from '../../components/ArticleMarginArt';

function ArticleIllustration({ title, slug }) {
  const variant = slug.split('').reduce((total, character) => total + character.charCodeAt(0), 0) % 3;
  const art = [<><path fill="#7b93a8" d="M56 243c-24-54-14-96 27-119 29 35 23 83-11 126z" /><path fill="#8a9a5b" d="M87 261c4-54 34-84 77-87 8 43-21 78-67 91z" /><path fill="#faf9f5" d="m166 59 152-21c15-2 25 5 27 20l24 176c2 14-5 23-20 26l-152 22c-15 2-24-5-26-20L147 86c-2-14 5-24 19-27z" /><path fill="#e3dacc" d="m185 83 117-17 20 157-117 17z" /><path fill="#c96442" d="M327 259 377 88l18 5-51 171z" /><path fill="#c9a227" d="m326 261 5 27 18-21z" /></>, <><path fill="#c96442" d="M61 236c-26-50-10-95 29-114 25 38 16 84-13 120z" /><path fill="#c9a227" d="M71 111c-17-35 1-68 34-76 18 32 4 65-25 82z" /><path fill="#8a9a5b" d="M189 68c44-30 104-20 124 20 17 34-7 77-49 81-42 5-84-27-75-101z" /><path fill="#faf9f5" d="M214 157c34 11 75 3 98-26l22 72c-43 35-100 29-134-9z" /><path fill="#7b93a8" d="M302 250c-3-39 18-68 53-78 13 35-6 68-42 84z" /></>, <><path fill="#c9a227" d="M57 240c-9-58 17-101 65-111 19 48-5 94-50 119z" /><path fill="#7b93a8" d="m151 58 130 4c16 1 24 10 23 26l-5 151c0 16-10 24-26 23l-130-5c-16-1-24-10-23-26l5-151c0-16 10-24 26-23z" /><path fill="#faf9f5" d="m151 85 122 4-5 145-122-4z" /><path fill="#8a9a5b" d="M313 243c-21-41-9-76 27-96 26 35 15 75-14 100z" /><path fill="#c96442" d="M211 176c25-32 57-38 87-18-15 34-51 42-87 25z" /></>][variant];
  return <svg viewBox="0 0 480 330" className="h-auto w-full max-w-md" role="img" aria-label={`Illustration for ${title}`}><defs><filter id="article-rough"><feTurbulence type="fractalNoise" baseFrequency=".02" numOctaves="2" seed={variant + 7} result="noise" /><feDisplacementMap in="SourceGraphic" in2="noise" scale="3" /></filter></defs><g filter="url(#article-rough)" stroke="#1a1815" strokeWidth="4" strokeLinejoin="round">{art}</g></svg>;
}

function PostSignature({ slug }) {
  const variants = [
    <><circle cx="30" cy="30" r="20" fill="#c96442" /><path d="M30 9v42M9 30h42" /></>,
    <><path fill="#8a9a5b" d="M30 6c20 14 20 35 0 48C10 41 10 20 30 6z" /><path d="M30 9v42" /></>,
    <><path fill="#7b93a8" d="m8 30 22-22 22 22-22 22z" /><circle cx="30" cy="30" r="7" fill="#c9a227" /></>,
    <><path fill="#c9a227" d="M8 15h44v30H8z" /><path d="M16 23h28M16 32h20M16 41h25" /></>,
    <><path fill="#c96442" d="M9 43 29 8l22 35z" /><path d="m29 19 0 14M29 39h.1" /></>,
    <><path fill="#7b93a8" d="M10 10h40v40H10z" /><path fill="#8a9a5b" d="M18 18h24v24H18z" /></>,
    <><path fill="#c9a227" d="M30 7c14 13 21 28 0 47C9 35 16 20 30 7z" /><path fill="#c96442" d="M20 22h20v20H20z" /></>,
  ];
  const slugs = ['i-built-breaking-ice-because-i-had-this-problem', 'the-hardest-lesson-i-learned-nobody-owes-your-product-their-time', 'it-worked-in-dev-until-it-didnt', 'why-was-my-frontend-so-slow', 'vibe-coding-with-ai', 'it-works-on-my-machine', 'first-post'];
  const index = Math.max(0, slugs.indexOf(slug));
  return <svg viewBox="0 0 60 60" className="absolute right-5 top-5 h-12 w-12" aria-hidden="true"><g stroke="#1a1815" strokeWidth="4" strokeLinejoin="round">{variants[index]}</g></svg>;
}

export async function generateStaticParams() { return getAllSlugs(); }

export async function generateMetadata({ params }) { const { slug } = await params; const postData = await getPostBySlug(slug); const title = `${postData.title} | Blogs by Abhi`; return { title, description: postData.description, openGraph: { title, description: postData.description, type: 'article' }, twitter: { card: 'summary', title, description: postData.description } }; }

export default async function Post({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return <article className="relative min-h-screen overflow-hidden pb-24"><ArticleMarginArt contentLength={post.contentHtml.length} /><div className="site-shell relative z-10 pt-8 md:pt-12"><nav className="mb-7"><Link href="/" className="text-sm font-bold underline decoration-1 underline-offset-4 hover:text-[var(--terracotta)]">← All blogs</Link></nav><header className="paper-grain grid overflow-hidden rounded-[1.25rem] bg-[var(--featured)] md:grid-cols-[1.12fr_.88fr]"><div className="px-7 py-11 md:px-12 md:py-14"><p className="mb-5 text-sm text-[var(--muted)]">{post.date} · {post.author}</p><h1 className="editorial-serif max-w-3xl text-5xl font-bold leading-[.93] tracking-[-.055em] md:text-7xl">{post.title}</h1><p className="mt-7 max-w-2xl text-xl leading-relaxed text-[#4b443b]">{post.description}</p><div className="mt-8 flex items-center gap-3 text-sm"><div className="relative h-9 w-9 overflow-hidden rounded-full border border-[var(--ink)]"><Image src="/dp.jpg" alt={post.author} fill className="object-cover" /></div><span>{post.author}</span><span aria-hidden="true">·</span><span className="text-[var(--muted)]">5 min read</span></div></div><div className="relative flex items-end justify-center px-6 pt-6 md:pt-10"><ArticleIllustration title={post.title} slug={post.slug} /><PostSignature slug={post.slug} /></div></header><div className="article-copy prose prose-lg mx-auto mt-16 max-w-none"><div dangerouslySetInnerHTML={{ __html: post.contentHtml }} /></div><nav className="mx-auto mt-20 grid max-w-[43rem] gap-6 border-t-2 border-[var(--ink)] pt-8 md:grid-cols-2">{post.prevPost ? <Link href={`/posts/${post.prevPost.slug}`} className="group"><span className="text-sm text-[var(--muted)]">← Previous</span><span className="editorial-serif mt-2 block text-2xl font-bold leading-tight group-hover:text-[var(--terracotta)]">{post.prevPost.title}</span></Link> : <span />}{post.nextPost ? <Link href={`/posts/${post.nextPost.slug}`} className="group text-left md:text-right"><span className="text-sm text-[var(--muted)]">Next →</span><span className="editorial-serif mt-2 block text-2xl font-bold leading-tight group-hover:text-[var(--terracotta)]">{post.nextPost.title}</span></Link> : <span />}</nav></div></article>;
}
