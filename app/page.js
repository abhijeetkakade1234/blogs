import { getAllPosts } from '../lib/mdx';
import Hero from './components/Hero';
import PostCard from './components/PostCard';

export default function Home() {
  const [featuredPost, ...posts] = getAllPosts();
  return <main className="min-h-screen"><Hero post={featuredPost} /><section className="site-shell pb-24 pt-8 md:pt-12"><div className="mb-8 flex items-end gap-6 border-b-2 border-[var(--ink)] pb-4"><h2 className="editorial-serif text-4xl font-bold tracking-[-.045em]">Latest writing</h2><span className="mb-1.5 text-sm text-[var(--muted)]">{posts.length} more posts</span></div><div className="grid gap-10 md:items-start md:grid-cols-[.9fr_1.1fr] md:gap-12"><PostCard post={posts[0]} featured /><div>{posts.slice(1).map((post, index) => <PostCard key={post.slug} post={post} variant={index} />)}</div></div></section></main>;
}
