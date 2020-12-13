import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import "./MainSection.css";
import { Button } from './Button';
function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to='#' className='navbar-logo' onClick={closeMobileMenu}>
						Abheet.
						
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link
								activeClass="active"
								to="about"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className='nav-links'
								onClick={closeMobileMenu}>
								About
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className="nav-item2"
								activeClass="active"
								to="work"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className='nav-links'
								onClick={closeMobileMenu}
							>
								Work
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className="nav-item3"
								activeClass="active"
								to="contact"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className='nav-links'
								onClick={closeMobileMenu}
							>
								Contact
							</Link>
						</li>

						
					</ul>
					
				</div>
			</nav>
		</>
	);
}

export default Navbar;

