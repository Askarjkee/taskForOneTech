import { useState } from 'react';
import { TabsContent } from './TabsContent';
import { Container } from '../../../styles/container';
import { TabsWrapper, MuiTabs, MuiTab } from './styles';
import { TabsData, HiddenTabsData } from './mock';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<>
					<div>{children}</div>
				</>
			)}
		</div>
	);
}

const a11yProps = (index: number) => {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}


export const Tabs = () => {
	const [value, setValue] = useState(0);


	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<TabsWrapper>
			<Container>
				<MuiTabs value={value} onChange={handleChange} aria-label="tabs">
					{
						TabsData.map(tab => <MuiTab
							key={tab.id}
							label={tab.title}
							$active={value === tab.id}
							{...a11yProps(tab.id)} />)
					}
				</MuiTabs>
				{
					HiddenTabsData.map(tab => {
						return (
							<TabPanel key={tab.id} value={value} index={tab.id}>
								<TabsContent title={tab.title} content={tab.content} />
							</TabPanel>
						)
					})
				}
			</Container>
		</TabsWrapper>

	);
}