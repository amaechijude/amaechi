"use client";
import React, { useState } from "react";
import { posts, categories } from "@/lib/blog-data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const BlogPage = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const featuredPost = posts.find((post) => post.featured);
  const recentPosts = posts.filter((post) => !post.featured);

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 3);
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Technical Insights & Mentoring Wisdom
        </h1>
        <p className="text-lg text-slate-400 mt-3 max-w-2xl mx-auto">
          Sharing knowledge from the trenches of software development
        </p>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3">
          {featuredPost && (
            <section className="mb-16 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Featured Post</h2>
              <div className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                <div className="relative h-64 md:h-96">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    <span className="text-xs font-bold uppercase text-purple-400 bg-purple-900/50 px-2 py-1 rounded">
                      Featured
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mt-2 text-white">
                      {featuredPost.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-slate-400 mt-2 text-base">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-6 text-sm text-slate-500">
                    <div className="flex items-center">
                      <Image
                        src="/profile.jpg"
                        alt="author"
                        width={24}
                        height={24}
                        className="rounded-full mr-2"
                      />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span>{featuredPost.date}</span>
                      <span>{featuredPost.readTime} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          <section>
            <h2 className="text-3xl font-bold mb-6">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentPosts.slice(0, visiblePosts).map((post, index) => (
                <div
                  key={post.id}
                  className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span
                      className={`text-xs font-bold uppercase ${
                        categories.find((c) => c.name === post.category)
                          ?.color
                      }`}
                    >
                      {post.category}
                    </span>
                    <h3 className="font-bold text-xl mt-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-2 h-16">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-4 text-xs text-slate-500">
                      <span>{post.date}</span>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {visiblePosts < recentPosts.length && (
              <div className="text-center mt-12">
                <Button
                  onClick={loadMorePosts}
                  variant="outline"
                  className="bg-transparent border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
                >
                  Load More Posts
                </Button>
              </div>
            )}
          </section>
        </div>

        <aside className="lg:sticky top-24 h-fit">
          <div className="relative mb-8">
            <Input
              type="search"
              placeholder="Search articles..."
              className="bg-[#1e293b] border-slate-700 pl-10 focus:border-purple-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
          </div>

          <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <a
                    href="#"
                    className="flex justify-between items-center text-slate-400 hover:text-white hover:bg-slate-700/50 p-2 rounded-md transition-colors duration-200"
                  >
                    <span className="flex items-center">
                      <span
                        className={`w-2 h-2 rounded-full mr-3 ${
                          category.color.replace('text-', 'bg-')
                        }`}
                      ></span>
                      {category.name}
                    </span>
                    <span className="text-xs bg-slate-700 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default BlogPage;