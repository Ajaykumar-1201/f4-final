import React from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Home } from "./components/Home"
import { Cart } from "./components/Cart"

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"cart"} element={<Cart />} />
			</Routes>
		</>
	)
}

export default App
