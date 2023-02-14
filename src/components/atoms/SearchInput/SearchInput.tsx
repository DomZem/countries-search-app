import { ReactComponent as SearchIcon } from 'lib/icons/search.svg';
import { FC } from 'react';
import { Input, Wrapper } from './SearchInput.styles';

type SearchInputProps = {
	handleFilterName: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: FC<SearchInputProps> = ({ handleFilterName }) => (
	<Wrapper>
		<SearchIcon />
		<Input onChange={handleFilterName} placeholder='Search for a country...' />
	</Wrapper>
);

export default SearchInput;
