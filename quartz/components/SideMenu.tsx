import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"

const links: Array<{ label: string; slug: FullSlug }> = [
  { label: "About Me", slug: "about-me" as FullSlug },
  { label: "Education", slug: "education" as FullSlug },
  { label: "Experience", slug: "experience" as FullSlug },
  { label: "Projects", slug: "projects" as FullSlug },
  { label: "Resumes", slug: "resumes" as FullSlug },
  { label: "Skills", slug: "skills" as FullSlug },
]

const SideMenu: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const current = fileData.slug ?? ("index" as FullSlug)
  return (
    <nav class="portfolio-side-menu" aria-label="Primary">
      <ul>
        {links.map((item) => {
          const href = resolveRelative(current as FullSlug, item.slug)
          const isActive = current === item.slug || current.startsWith(`${item.slug}/`)
          return (
            <li>
              <a class={isActive ? "active" : undefined} href={href}>
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default (() => SideMenu) satisfies QuartzComponentConstructor

