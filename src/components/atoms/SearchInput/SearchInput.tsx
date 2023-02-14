import { ReactComponent as SearchIcon } from 'lib/icons/search.svg';
import { Input, Wrapper } from './SearchInput.styles';
const SearchInput = () => (
	<Wrapper>
		<SearchIcon />
		<Input placeholder='Search for a country...' />
	</Wrapper>
);

export default SearchInput;
