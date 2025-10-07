export default function BlogPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 grid grid-cols-2 -z-10 opacity-10">
        <div className="bg-gradient-to-br from-primary/20 via-transparent to-transparent blur-3xl" />
        <div className="bg-gradient-to-bl from-primary/20 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Main content */}
      <div className="text-center space-y-8 px-6 animate-[fade-in-up_0.8s_ease-out]">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
          COMING SOON
        </h1>
        
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Exciting content is on its way
          </p>
          <p className="text-sm text-muted-foreground/80 max-w-md mx-auto">
            We&apos;re crafting amazing blog content to share with you. 
            Stay tuned for insightful articles and updates.
          </p>
        </div>

        <div className="h-1 w-20 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full animate-pulse" />
      </div>
    </div>
  )
}