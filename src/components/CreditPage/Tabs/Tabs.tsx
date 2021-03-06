import { useState, useEffect } from 'react';
import { TabsContent } from './TabsContent';
import { Container } from '../../../styles/container';
import { TabsWrapper, MuiTabs, MuiTab } from './styles';
import { tabsData, hiddenTabsData, mobileTabsData, mobileHiddenTabsData } from './mock';

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
	const [tabs, setTabs] = useState(tabsData);
	const [hiddenTabs, setHiddenTabs] = useState(hiddenTabsData);
	const [width] = useState(window.screen.width);

    useEffect(() => {
        if (width < 575) {
            setTabs(mobileTabsData);
			setHiddenTabs(mobileHiddenTabsData);
        }
    }, [width])


	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<TabsWrapper>
			<Container>
				<MuiTabs value={value} onChange={handleChange} aria-label="tabs">
					{
						tabs.map(tab => <MuiTab
							key={tab.id}
							label={tab.title}
							$active={value === tab.id}
							{...a11yProps(tab.id)} />)
					}
				</MuiTabs>
				{
					hiddenTabs.map(tab => {
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