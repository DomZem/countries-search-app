import styled from 'styled-components';

const SelectRegion = () => (
	<Select name='region' id='region' defaultValue=''>
		<option value=''>Filter by region</option>
		<option value='africa'>Africa</option>
		<option value='americas'>America</option>
		<option value='asia'>Asia</option>
		<option value='europe'>Europe</option>
		<option value='oceania'>Oceania</option>
	</Select>
);

const Select = styled.select`
	border: none;
	outline: none;
	border-radius: 5px;
	padding: 1.4rem 3rem 1.4rem 1.4rem;
	background-color: ${({ theme }) => theme.element};
	color: ${({ theme }) => theme.text};
	font-weight: 600;
	box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.3);
`;

export default SelectRegion;
