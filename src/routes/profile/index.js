import { h } from 'preact';
import { useEffect, useState, useReducer } from 'preact/hooks';

const Profile = ({ user, d }) => {
	const [time, setTime] = useState(Date.now());
	const [count, dispatch] = useReducer((state, action) => {
		switch(action){
			case 'add':
				return state + 1
		}
	}, 10);

	useEffect(() => {
		let timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div>
			<h1>Profile: {user}</h1>
			<p>This is the user profile for a user named {user} { d }.</p>

			<div>Current time: {new Date(time).toLocaleString()}</div>

			<p>
				<button onClick={() => dispatch('add')}>Click Me</button>{' '}
				Clicked {count} { d } times.
			</p>
		</div>
	);
};

export default Profile;
