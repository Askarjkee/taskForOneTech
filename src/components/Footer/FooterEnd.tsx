import { 
    InstagramSvg, 
    FacebookSvg, 
    YoutubeSvg, 
    TikTokSvg, 
    EyeSvg,
    FooterEndWrapper ,
    Copyright,
    Feedback,
    Icons,
    Btn,
    FooterEndCopyright
} from './styles';

import { FooterEndContent } from './mock';

export const FooterEnd = () => {
    return (
        <FooterEndWrapper>
            <FooterEndCopyright>
                <Feedback>{FooterEndContent.feedback}</Feedback>
                <Copyright>{FooterEndContent.copyright}</Copyright>
            </FooterEndCopyright>
            <Icons>
                <a href="1"><InstagramSvg /></a>
                <a href="1"><FacebookSvg /></a>
                <a href="1"><YoutubeSvg /></a>
                <a href="1"><TikTokSvg /></a>
            </Icons>
            <Btn>
                {FooterEndContent.btnText}
                <EyeSvg />
            </Btn>
        </FooterEndWrapper>
    )
}