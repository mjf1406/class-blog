import Link from "next/link"
import { sitename } from "@/settings/settings"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
      <h1 className="text-4xl font-bold mb-4 sm:text-7xl">{sitename}</h1>
      <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
        Learn all about the goings-on here at ClassQuest from me, the dev, and
        all sorts of guest authors!
      </p>
      <div className="flex items-center gap-5">
        <Link
          href={`/blog${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}
