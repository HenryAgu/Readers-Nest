import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="px-8 py-4">
        <Link href="/">
        <Image src="/logo.svg" width={173} height={32} alt="ReadersNest Logo" />
        </Link>
    </nav>
  )
}

export default Navbar