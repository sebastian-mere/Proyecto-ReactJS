import React from 'react'

const Footer = () => {
    return (
        <footer className="footer py-4">
            <div className="text-center">
                <a className="p-2" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src="/img/facebook.png" alt="facebook" width={"30px"}/></a>
                <a className="p-2" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src="/img/instagram.png" alt="instagram" width={"30px"}/></a>
            </div>
            <nav className="text-center">
                <ul className="navbar-nav d-inline-block">
                    <li className="nav-item d-inline-block p-2">
                        <a className="nav-link" href="/home" rel="noreferrer">Home</a>
                    </li>
                    <li className="nav-item d-inline-block p-2">
                        <a className="nav-link" href="/miniaturas" rel="noreferrer">Miniaturas</a>
                    </li>
                    <li className="nav-item d-inline-block p-2">
                        <a className="nav-link" href="/cuadros" rel="noreferrer">Cuadros</a>
                    </li>
                    <li className="nav-item d-inline-block p-2">
                        <a className="nav-link" href="/llaveros" rel="noreferrer">Llaveros</a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer