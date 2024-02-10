import { DNavbar } from "./DNavbar"
import { MNavbar } from "./MNavbar"
import { NavbarLinks } from "./NavbarLinks"

export const Navbar= ({links}: {links: string[]}) => {
  
  return (
    <>
      <MNavbar>
        <NavbarLinks links={links} />
      </MNavbar>
      <DNavbar>
        <NavbarLinks links={links} />
      </DNavbar>
    </>
  )
}