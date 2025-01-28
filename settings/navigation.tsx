import { PageRoutes } from "@/lib/pageroutes"

export const Navigations = [
  {
    title: "Blog",
    href: `/blog${PageRoutes[0].href}`,
  },
  {
    title: "Home",
    href: "https://www.rubixstudios.com.au/",
    external: true,
  },
]

export const GitHubLink = {
  href: "https://github.com/rubixvi/rubix-documents",
}
