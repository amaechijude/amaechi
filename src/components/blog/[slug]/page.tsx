import { posts } from "@/lib/blog-data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Twitter, Linkedin, Facebook, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.id.toString() === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="w-full max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <article>
        <header className="text-center mb-12">
          <div className="mb-4">
            <Link
              href="/blog"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              &larr; Back to Blog
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
            {post.title}
          </h1>
          <div className="mt-4 text-slate-400 flex items-center justify-center space-x-4">
            <span>{post.date}</span>
            <span>&middot;</span>
            <span>{post.readTime} min read</span>
            <span>&middot;</span>
            <span className="text-purple-400 font-semibold">
              {post.category}
            </span>
          </div>
        </header>

        <div className="relative w-full h-96 rounded-xl overflow-hidden mb-12 shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="prose prose-invert prose-lg mx-auto">
          <p>{post.excerpt}</p>
          <p>{post.content}</p>

          <h2>Code Block Example</h2>
          <pre>
            <code className="language-javascript">
              {`const greeting = "Hello, World!";
console.log(greeting);`}
            </code>
          </pre>

          <h2>Blockquote Example</h2>
          <blockquote>
            <p>
              This is a blockquote. It can be used to highlight a quote or
              important information.
            </p>
          </blockquote>
        </div>

        <hr className="border-slate-800 my-12" />

        {/* Author Bio */}
        <section className="flex items-center bg-[#1e293b] p-6 rounded-xl shadow-lg">
          <Image
            src="/profile.jpg"
            alt="Amaechi"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="ml-6">
            <h3 className="text-xl font-bold">Amaechi</h3>
            <p className="text-slate-400 mt-1">
              A passionate full-stack developer and mentor, helping others to
              start and grow their careers in tech.
            </p>
            <div className="mt-4 space-x-4">
              <Link href="/" className="text-purple-400 hover:underline">
                View Portfolio
              </Link>
              <Link href="/contact" className="text-purple-400 hover:underline">
                Mentoring Services
              </Link>
            </div>
          </div>
        </section>

        {/* Social Share */}
        <section className="text-center my-12">
          <h3 className="text-lg font-bold mb-4">Share this post</h3>
          <div className="flex justify-center space-x-4">
            <Link
              href="#"
              className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
            >
              <Facebook size={20} />
            </Link>
            <Button className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors">
              <LinkIcon size={20} />
            </Button>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  href={`/blog/${relatedPost.id}`}
                  key={relatedPost.id}
                  className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mt-2">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center justify-between mt-4 text-xs text-slate-500">
                      <span>{relatedPost.date}</span>
                      <span>{relatedPost.readTime} min read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
