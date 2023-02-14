import SearchInput from 'components/atoms/SearchInput/SearchInput';
import SelectRegion from 'components/atoms/SelectRegion/SelectRegion';
import { FC } from 'react';
import { Wrapper } from './SearchBar.styles';

type SearchBarProps = {
	handleFilterRegion: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	handleFilterName: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: FC<SearchBarProps> = ({ handleFilterRegion, handleFilterName }) => (
	<Wrapper>
		<SearchInput handleFilterName={handleFilterName} />
		<SelectRegion handleFilterRegion={handleFilterRegion} />
	</Wrapper>
);

export default SearchBar;
