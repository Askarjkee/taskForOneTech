import { InstagramSvg, FacebookSvg, YoutubeSvg, TikTokSvg, EyeSvg } from './styles';

export const FooterEnd = () => {
    return (
        <div className="footer__end">
            <div className="footer__end__feedback">
                <a href="1">Оставить обратную связь</a>
                <a href="1">Все права защищены © forte 2020</a>
            </div>
            <div className="footer__end__icons">
                <a href="1"><InstagramSvg /></a>
                <a href="1"><FacebookSvg /></a>
                <a href="1"><YoutubeSvg /></a>
                <a href="1"><TikTokSvg /></a>
            </div>
            <button className="btn">
                Версия для слабовидящих:
                <EyeSvg />
            </button>
        </div>
    )
}