import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
	return (
		<header className='container'>
			<div className='row'>
				<div className="col-md-12">
					<nav className="navbar navbar-expand-lg">
						<div className="container-fluid">
							<a className="navbar-brand" href="index.html"><img src={"img/logo.jpg"} alt={"Logo JP Custom"} srcset="" /></a>
							<div className='d-flex justify-content-lg-between flex-lg-row-reverse'  >
								<div className='p-2'>
									<CartWidget />
								</div>
								<div className='p-2 '>
									<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
										<span className="navbar-toggler-icon"></span>
									</button>
									<div className="collapse navbar-collapse" id="navbarNav">
										<ul className="navbar-nav">
											<li className="nav-item">
												<a className="nav-link active" aria-current="page" href="/home">Home</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="/miniaturas">Miniaturas</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="/cuadros">Cuadros</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="/llaveros">Llaveros</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default NavBar