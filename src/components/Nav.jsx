import React from 'react'

export default function nav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-warning" href="/">
                            Pokemon Info |
                            </a>
                        </li>
                        
                        <li className="nav-item active">
                            <a className="nav-link text-danger mx-5" href="/">
                            Home
                            </a>
                        </li>
                        <li className="nav-item text-center">
                            <a className="nav-link  text-danger mx-5" href="/src/views/Pokemon.jsx">
                            Pokemon Stats
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-danger mx-5" href="/">
                            N/A
                            </a>
                        </li>
                    </ul>
                </div>
            </h1>
        </nav>

    </div>
  )
}
