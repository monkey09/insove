import Link from "next/link"

export const NavbarLinks = ({links}: {links: string[]}) => {
  return (
    <ul>
      {links.map((item, i) => (
        <li key={i}>
          <Link 
            href={`#${item}`}
            className="text-secondary hover:text-accent transition-all duration-300 capitalize"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  )
}