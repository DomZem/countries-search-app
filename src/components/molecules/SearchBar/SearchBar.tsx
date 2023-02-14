import SearchInput from 'components/atoms/SearchInput/SearchInput';
import SelectRegion from 'components/atoms/SelectRegion/SelectRegion';
import styled from 'styled-components';

const SearchBar = () => (
	<Wrapper>
		<SearchInput />
		<SelectRegion />
	</Wrapper>
);

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 3rem;

	@media (min-width: 475px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`;

export default SearchBar;
