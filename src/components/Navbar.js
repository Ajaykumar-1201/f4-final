import { Link } from "react-router-dom"
import React from "react"

const Navbar = () => {
	return (
		<nav className="nav-bar">
			<div className="title">Shopping Cart</div>
			<div className="links">
				<Link to={"/"}>Home Page</Link>
				<Link to={"cart"}>Cart Page</Link>
			</div>
		</nav>
	)
}
export default Navbar
