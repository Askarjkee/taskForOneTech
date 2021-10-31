import {
    SettingsWrapper,
    ForteLogoWrapper,
    Language,
    HiddenLanguage,
    HiddenLocation,
    StyledLink,
    HeaderContent,
    Location
} from './styles';
import { SettingsContentType } from './mock';

import { LocationSvg, ArrowSvg, ForteIconSvg } from './Icons';


type PropTypes = {
    settings: SettingsContentType
}

export const Settings = ({settings}: PropTypes) => {
    const { currentLang, secondLang, thirdLang, currentCity, secondCity, thirdCity} = settings;

    return (
        <SettingsWrapper>
            <ForteLogoWrapper href="#">
                <ForteIconSvg />
            </ForteLogoWrapper>
            <Language>
                <HeaderContent>
                    { currentLang }
                    <HiddenLanguage>
                        <StyledLink>{secondLang}</StyledLink>
                        <StyledLink>{thirdLang}</StyledLink>
                    </HiddenLanguage>
                </HeaderContent>
                <ArrowSvg />
            </Language>
            <Location>
                <LocationSvg />
                <HeaderContent>
                    {currentCity}
                    <HiddenLocation>
                        <StyledLink>{secondCity}</StyledLink>
                        <StyledLink>{thirdCity}</StyledLink>
                    </HiddenLocation>
                </HeaderContent>
            </Location>
        </SettingsWrapper>
    )
}