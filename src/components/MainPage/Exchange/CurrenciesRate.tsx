import { addPercent } from '../../../commons/exchangeCalc';
import {
    UsdSvg,
    GbpSvg,
    RubSvg,
    EurSvg,
    TableItemName,
    TableWrapper,
    Table,
    TableItemTitle,
    TableItemBuy,
    TableItemSell
} from './styles';
import { filterObjType } from '../../../commons/types';

type PropTypes = {
    exchangeValueInKZT: filterObjType
}


export const CurrenciesRate = ({ exchangeValueInKZT }: PropTypes) => {
    return (
        <TableWrapper>
            <tbody>
                <Table>
                    <td></td>
                    <TableItemTitle>Покупка</TableItemTitle>
                    <TableItemTitle>Продажа</TableItemTitle>
                </Table>
                <Table>
                    <TableItemName><UsdSvg />USD</TableItemName>
                    <TableItemBuy>{exchangeValueInKZT.USD}</TableItemBuy>
                    <TableItemSell>{addPercent(exchangeValueInKZT.USD)}</TableItemSell>
                </Table>
                <Table>
                    <TableItemName><EurSvg />EUR</TableItemName>
                    <TableItemBuy>{exchangeValueInKZT.EUR}</TableItemBuy>
                    <TableItemSell>{addPercent(exchangeValueInKZT.EUR)}</TableItemSell>
                </Table>
                <Table>
                    <TableItemName><RubSvg />RUB</TableItemName>
                    <TableItemBuy>{exchangeValueInKZT.RUB}</TableItemBuy>
                    <TableItemSell>{addPercent(exchangeValueInKZT.RUB)}</TableItemSell>
                </Table>
                <Table>
                    <TableItemName><GbpSvg />GBP</TableItemName>
                    <TableItemBuy>{exchangeValueInKZT.GBP}</TableItemBuy>
                    <TableItemSell>{addPercent(exchangeValueInKZT.GBP)}</TableItemSell>
                </Table>
            </tbody>
        </TableWrapper>
    )
}