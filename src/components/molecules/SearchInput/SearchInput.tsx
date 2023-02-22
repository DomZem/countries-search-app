import { ReactComponent as SearchIcon } from 'lib/icons/search.svg';
import { FC } from 'react';
import { StyledInput, Wrapper } from './SearchInput.styles';

type SearchInputProps = {
	handleFilterName: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: FC<SearchInputProps> = ({ handleFilterName }) => (
	<Wrapper>
		<SearchIcon />
		<StyledInput onChange={handleFilterName} placeholder='Search for a country...' />
	</Wrapper>
);

export default SearchInput;
