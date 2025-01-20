import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
      <div>
        <h1>ALURAFLIX</h1>
        <nav>
          <Link href="/">Início</Link>
          <Link href="/new-video">Filmes</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar