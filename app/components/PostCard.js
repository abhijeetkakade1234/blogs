import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <Link href={`/posts/${post.slug}`} className="block group">
      <div className="h-full bg-card-bg rounded-lg border border-card-border p-6 transition-all duration-300 hover:-translate-y-1 hover:brightness-110 hover:border-accent-pink/40">
        <div className="flex flex-col h-full">
           <div className="mb-4">
              <h2 className="text-2xl font-semibold text-foreground group-hover:text-white transition-colors mb-2">
                {post.title}
              </h2>
              <div className="flex items-center gap-3 text-sm text-muted font-medium">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-card-border"></span>
                <span>{post.author}</span>
              </div>
           </div>
           
           <p className="text-muted/80 leading-relaxed mb-6 flex-grow">
             {post.description}
           </p>

           <div className="flex items-center text-accent-pink text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
              Read article <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
           </div>
        </div>
      </div>
    </Link>
  );
}
