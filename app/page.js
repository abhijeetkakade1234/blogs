import { getAllPosts } from '../lib/mdx';
import Hero from './components/Hero';
import PostCard from './components/PostCard';

export default function Home() {
  const allPostsData = getAllPosts();

  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-accent-pink/30 selection:text-white">
      <Hero />
      
      <section className="container mx-auto px-6 pb-20 max-w-5xl">
        <div className="flex items-center justify-between mb-12 border-b border-card-border pb-4">
            <h2 className="text-2xl font-semibold text-foreground tracking-tight">
                Latest Writing
            </h2>
            <div className="text-sm text-muted">
                {allPostsData.length} Posts
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allPostsData.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
