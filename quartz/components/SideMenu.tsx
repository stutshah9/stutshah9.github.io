import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"

const links: Array<{
  label: string
  href: (current: FullSlug) => string
  isActive: (current: FullSlug) => boolean
}> = [
  {
    label: "Home",
    href: (current) => resolveRelative(current, "index" as FullSlug),
    isActive: (current) => current === ("index" as FullSlug),
  },
  {
    label: "About",
    href: (current) => `${resolveRelative(current, "index" as FullSlug)}#about`,
    isActive: (current) => current === ("index" as FullSlug),
  },
  {
    label: "Education",
    href: (current) => `${resolveRelative(current, "index" as FullSlug)}#education`,
    isActive: (current) => current === ("index" as FullSlug),
  },
  {
    label: "Experience",
    href: (current) => `${resolveRelative(current, "index" as FullSlug)}#experience`,
    isActive: (current) => current === ("index" as FullSlug),
  },
  {
    label: "Projects",
    href: (current) => `${resolveRelative(current, "index" as FullSlug)}#projects`,
    isActive: (current) => current === ("index" as FullSlug) || current.startsWith("projects/"),
  },
  {
    label: "Resumes",
    href: (current) => resolveRelative(current, "resumes" as FullSlug),
    isActive: (current) => current === ("resumes" as FullSlug),
  },
  {
    label: "Skills",
    href: (current) => `${resolveRelative(current, "index" as FullSlug)}#skills`,
    isActive: (current) => current === ("index" as FullSlug),
  },
]

const SideMenu: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const current = fileData.slug ?? ("index" as FullSlug)
  return (
    <nav class="portfolio-side-menu" aria-label="Primary">
      <ul>
        {links.map((item) => {
          const href = item.href(current as FullSlug)
          const isActive = item.isActive(current as FullSlug)
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
