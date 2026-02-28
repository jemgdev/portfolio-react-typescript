type Project = {
  img: string
  title: string
  category: string
  featured: boolean
  logo?: string
  description: string
  link: string | null
  code: string | null
  languages: { name: string; color: string }[]
}

export default Project
