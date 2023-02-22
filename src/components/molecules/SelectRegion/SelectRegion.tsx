import { FC } from 'react';
import { Select } from './SelectRegion.styles';

type SelectRegionProps = {
	handleFilterRegion: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectRegion: FC<SelectRegionProps> = ({ handleFilterRegion }) => (
	<Select as='select' onChange={handleFilterRegion} name='region' id='region' defaultValue=''>
		<option value=''>Filter by region</option>
		<option value='africa'>Africa</option>
		<option value='americas'>America</option>
		<option value='asia'>Asia</option>
		<option value='europe'>Europe</option>
		<option value='oceania'>Oceania</option>
	</Select>
);

export default SelectRegion;
