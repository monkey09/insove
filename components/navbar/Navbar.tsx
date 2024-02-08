import { MNavbar } from "./MNavbar"

export const Navbar= () => {
  const links = ['home', 'doctors', 'department', 'services', 'blog', 'contact']
  return (
    <MNavbar links={links} />
  )
}