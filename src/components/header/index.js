import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<a href="/" class={style.logo}>
			<img src="../../assets/FUNNY.svg" alt="funy" />
			<h1>funny</h1>
		</a>
		<nav>
			<Link activeClassName={style.active} href="/">
				home
			</Link>
			<Link activeClassName={style.active} href="/clock/">
				clock
			</Link>
			<Link activeClassName={style.active} href="/clicker/">
				clicker
			</Link>
		</nav>
	</header>
);

export default Header;
