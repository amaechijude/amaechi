import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-6 animate-[fade-in-up_0.5s_ease-out]">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter">404</h1>
          <h2 className="text-2xl font-semibold text-muted-foreground">Page Not Found</h2>
        </div>
        
        <p className="text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="pt-4">
          <Button
            asChild
            variant="default"
            className="transition-all duration-300 hover:scale-105"
          >
            <Link href="/">
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}