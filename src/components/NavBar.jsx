import React from 'react';
import {Link, NavLink} from "react-router-dom";
import CartWidget from './CartWidget';

const NavBar = () => {
	return (
		<header className='container'>
			<div className='row'>
				<div className="col-md-12">
					<nav className="navbar navbar-expand-lg">
						<div className="container-fluid">
							<Link className="navbar-brand" to={"/"}><img src={"/img/logo.jpg"} alt={"Logo JP Custom"} srcset="" /></Link>
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
												<NavLink className="nav-link active" aria-current="page" to={"/"}>Home</NavLink>
											</li>
											<li className="nav-item">
												<NavLink className="nav-link" to={"/category/micro-vintage"}>Micro Vintage</NavLink>
											</li>
											<li className="nav-item">
												<NavLink className="nav-link" to={"/category/cuadros"}>Cuadros</NavLink>
											</li>
											<li className="nav-item">
												<NavLink className="nav-link" to={"/category/llaveros"}>Llaveros</NavLink>
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