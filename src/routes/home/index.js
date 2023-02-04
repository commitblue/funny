import { h } from 'preact';
import style from './style.css';

const Home = () => {
	return (
		<div class={style.home}>
			<a href="/">
				<img src="../../assets/FUNNY.svg" alt="FUNNY" />
			</a>
			<h1>random stuff goes here</h1>
			<section>
				<Resource
					title="home"
					description="your already here"
					link="/"
				/>
				<Resource
				    title="clock"
					description="useful for knowing what the time is"
					link="/clock/"
				/>
				<Resource
				    title="clicker"
					description="very hard game only people with 1 billion cps can beat"
					link="/clicker/"
				/>
			</section>
		</div>
	);
};

const Resource = props => {
	return (
		<a href={props.link} class={style.resource}>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
};

export default Home;
