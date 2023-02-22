import { ReactComponent as HomeIcon } from 'lib/icons/home.svg';
import { Link } from 'react-router-dom';
import { Button } from './HomeButton.styles';

const HomeButton = () => (
	<Button as={Link} to='/'>
		<HomeIcon />
		Go home
	</Button>
);

export default HomeButton;
