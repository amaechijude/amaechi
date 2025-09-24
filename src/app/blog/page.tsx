import React from "react";

const BlogPage = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-20 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Technical Insights & Mentoring Wisdom</h1>
        <p className="text-lg text-gray-400 mt-2">Sharing knowledge from the trenches of software development</p>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          {/* Featured Post */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Featured Post</h2>
            <div className="bg-[#1e293b] rounded-lg overflow-hidden">
              <div className="h-64 bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Featured Article Title</h3>
                <p className="text-gray-400 mt-2">A brief excerpt of the featured article goes here. Just a little bit to entice the reader.</p>
                <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                  <span>Oct 24, 2025</span>
                  <span>10 min read</span>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Posts */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Post Card */}
              <div className="bg-[#1e293b] rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-700"></div>
                <div className="p-4">
                  <h3 className="font-bold">Post Title</h3>
                  <p className="text-sm text-gray-400 mt-1">Short excerpt...</p>
                  <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                    <span>Oct 24, 2025</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </div>
              {/* Repeat Post Card for grid */}
              <div className="bg-[#1e293b] rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-700"></div>
                <div className="p-4">
                  <h3 className="font-bold">Post Title</h3>
                  <p className="text-sm text-gray-400 mt-1">Short excerpt...</p>
                  <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                    <span>Oct 24, 2025</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#1e293b] rounded-lg overflow-hidden">
                <div className="h-40 bg-gray-700"></div>
                <div className="p-4">
                  <h3 className="font-bold">Post Title</h3>
                  <p className="text-sm text-gray-400 mt-1">Short excerpt...</p>
                  <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                    <span>Oct 24, 2025</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside>
          <div className="bg-[#1e293b] p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Frontend Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Architecture & Scaling</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Career Mentoring</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Team Leadership</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Industry Insights</a></li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default BlogPage;