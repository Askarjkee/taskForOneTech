import styled from 'styled-components';
import Slider from '@mui/material/Slider';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/core/SwitchUnstyled';

export const SectionWrapper = styled.section`
    padding: 64px 0 0 0;
`

export const Line = styled.span`
    border: 1px solid #E0E0E0;
    width: 2px;
    height: 296px;
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 631px;
`

export const Title = styled.div`
    font-weight: 500;
    font-size: 30px;
    color: #1E2A41;
`

export const Subtitle = styled.div`
    margin-top: 24px;
    font-weight: 400;
    font-size: 16px;
    color: #303030;
`

export const CalcWrapper = styled.div`
    margin-top: 25px;
    background-color: #F2F2F2;
    border-radius: 4px;
    padding: 32px 0 0 32px;
    min-height: 344px;
    display: flex;
`

export const CalcTitle = styled.div`
    font-weight: 400;
    font-size: 16px;
    color: #303030;
`

export const CalcInput = styled(Slider)`
    && {
        margin-top: 11px;
        margin-right: 16px;
        width: 631px;
        height: 4px;
        color: #FFFFFF;
        .MuiSlider-track {
            color: #1E2A41;
        }
        .MuiSlider-thumb {
            box-shadow: none;
            width: 10px;
            height: 10px;
            color: #9D2550;
            padding: 5px;
            border: 12px solid #fff;
        }
        .Mui-active {
            box-shadow: none;
        }
        
    }
`

export const CalcValue = styled.span`
    font-weight: 400;
    font-size: 24px;
    color: #303030;
`

export const CalcAllowedValue = styled.div`
    margin: 8px 0 24px 0;
    display: block;
    margin-top: 8px;
    font-weight: 400;
    font-size: 12px;
    color: #737373;
`

export const CalcSwitch = styled(SwitchUnstyled)`
    && {
        font-size: 0;
        position: relative;
        display: inline-block;
        width: 34px;
        height: 20px;
        margin: 0;
        cursor: pointer;

    &.${switchUnstyledClasses.disabled} {
        opacity: 0.4;
        cursor: not-allowed;
    }

    & .${switchUnstyledClasses.track} {
        background: #FFFFFF;
        border-radius: 10px;
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
    }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #999999;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: #FFFFFF;
    box-shadow: 0 0 1px 8px rgba(0,0,0,0.25);
  }

  &.${switchUnstyledClasses.checked} { 
    .${switchUnstyledClasses.thumb} {
      left: 14px;
      top: 3px;
      background-color: #FFF;
    }

    .${switchUnstyledClasses.track} {
      background: #9D2550;
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`

export const LeftCalcBlock = styled.div`
    width: 826px;
`

export const RightCalcBlock = styled.div`
    padding-left: 32px;
`

export const CalcSubtitle = styled(CalcTitle)`
    margin-top: 28px;
    font-size: 14px;
`

export const CalcResult = styled.div`
    margin-top: 8px;
    font-weight: 500;
    font-size: 30px;
    color: #9D2550;
`

export const CalcPercent = styled(CalcResult)`
    font-weight: 400;
    font-size: 24px;
    color: #303030;
`

export const CalcBtn = styled.button`
    cursor: pointer;
    margin-top: 32px;
    width: 206px;
    height: 44px;
    background: #1E2A41;
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;
`
export const StyledSpan = styled.span`
    margin-left: 16px;
    font-weight: 400;
    font-size: 16px;
    color: #303030;
`

export const CalcDescr  = styled.div`
    margin-top: 20px;
    font-weight: 400;
    font-size: 14px;
    color: #737373;
`

export const SwitchWrapper = styled.div`
  display: flex;
`