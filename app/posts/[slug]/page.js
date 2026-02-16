import Link from 'next/link';
import { getPostBySlug, getAllSlugs } from '../../../lib/mdx';
import Image from 'next/image';

export async function generateStaticParams() {
  const paths = getAllSlugs();
  return paths;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const postData = await getPostBySlug(slug);
  return {
    title: postData.title,
    description: postData.description,
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const postData = await getPostBySlug(slug);

  return (
    <article className="min-h-screen bg-background text-foreground selection:bg-accent-pink/30 selection:text-white pb-32">
       <div className="container mx-auto px-6 pt-12 md:pt-20 max-w-3xl">
         {/* Navigation */}
         <nav className="mb-12">
            <Link href="/" className="text-muted hover:text-accent-pink transition-colors text-sm font-medium flex items-center gap-2 group">
                <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
                Back to Blog
            </Link>
         </nav>

         {/* Header */}
         <header className="mb-16 border-b border-card-border pb-8">
            <div className="mb-6 flex gap-3 text-sm font-medium text-accent-pink uppercase tracking-wider">
                <span>Article</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                {postData.title}
            </h1>
            
            <div className="flex items-center gap-4 text-muted text-sm">
                <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-card-border">
                         <Image 
                            src="/dp.jpg" 
                            alt={postData.author}
                            fill
                            className="object-cover"
                         />
                    </div>
                    <span>{postData.author}</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-card-border"></span>
                <span>{postData.date}</span>
                <span className="w-1 h-1 rounded-full bg-card-border"></span>
                <span>{/* Estimate read time could go here */} 5 min read</span>
            </div>
         </header>

         {/* Content */}
         <div className="prose prose-invert prose-lg max-w-none
            prose-headings:font-semibold prose-headings:text-foreground prose-headings:tracking-tight
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-a:text-foreground prose-a:underline prose-a:decoration-card-border prose-a:underline-offset-4 hover:prose-a:decoration-accent-pink hover:prose-a:text-accent-pink prose-a:transition-all
            prose-strong:text-white prose-strong:font-bold
            prose-blockquote:border-l-4 prose-blockquote:border-accent-pink prose-blockquote:bg-card-bg prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-gray-400
            prose-code:bg-[#151515] prose-code:text-accent-pink prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            prose-hr:border-card-border
            prose-img:rounded-xl prose-img:border prose-img:border-card-border">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
         </div>

         {/* Footer / Navigation */}
         <div className="mt-24 pt-12 border-t border-card-border">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {postData.prevPost ? (
                    <Link href={`/posts/${postData.prevPost.slug}`} className="group block bg-card-bg border border-card-border rounded-xl p-6 transition-all hover:border-accent-pink/50 text-left">
                        <span className="text-sm text-muted block mb-2 group-hover:text-accent-pink transition-colors">← Previous Article</span>
                        <span className="text-lg font-semibold text-foreground block">
                            {postData.prevPost.title}
                        </span>
                    </Link>
                ) : (
                    <div className="hidden md:block"></div>
                )}

                {postData.nextPost ? (
                    <Link href={`/posts/${postData.nextPost.slug}`} className="group block bg-card-bg border border-card-border rounded-xl p-6 transition-all hover:border-accent-pink/50 text-right">
                        <span className="text-sm text-muted block mb-2 group-hover:text-accent-pink transition-colors">Next Article →</span>
                        <span className="text-lg font-semibold text-foreground block">
                            {postData.nextPost.title}
                        </span>
                    </Link>
                ) : (
                    <div className="hidden md:block"></div>
                )}
             </div>
             
             <div className="mt-12 text-center">
                <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-accent-pink transition-colors text-sm font-medium">
                    View All Posts
                </Link>
             </div>
         </div>
       </div>
    </article>
  );
}
