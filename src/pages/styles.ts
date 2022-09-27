import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'

type PaperProps = {
  grid?: 'primary' | 'secondary'
}
const wrapperModifiers = {
  primary: () => css`
    ${media.lessThan('medium')`
    grid-template-columns: 100% [col-start];
  `}
    display: grid;
    width: 100%;
    max-width: 1200px;
    justify-content: flex-start;
    grid-template-columns: 1fr 2fr;
  `,
  secondary: () => css`
    ${media.lessThan('medium')`
    grid-template-columns: 100% [col-start];
  `}
    display: grid;
    width: 100%;
    max-width: 1200px;
    justify-content: flex-start;
    grid-template-columns: 1fr 1fr 1fr;
  `
}

export const DashboardWrapper = styled.main<PaperProps>`
  ${({ grid }) => css`
    ${!!grid && wrapperModifiers[grid]}
  `}
`

export const LoadingHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32rem;
`

export const DescriptionNow = styled.p`
  font-size: 2rem;
  font-weight: bold;
`

export const WrapperCurrentTemperature = styled.div`
  margin: ${theme.spacings.xsmall};
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const TemperatureHeading = styled.h1`
  font-size: 4rem;
`

export const DescriptionCurrentTime = styled.h2`
  text-align: justify;
  padding: 18px 18px 0 18px;
`
export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${theme.spacings.large};
  ${media.lessThan('medium')`
    margin-top: ${theme.spacings.xxsmall};
  `}
`

export const ContentWind = styled.div`
  margin-bottom: ${theme.spacings.xsmall};
  display: flex;
  justify-content: space-between;
  border-left: solid 0.6rem ${theme.colors.primary};
  border-radius: 0.4rem;
`

export const WindInformation = styled.h1`
  margin-left: 1rem;
  font-size: 1.6rem;
`
export const ReferenceAPI = styled.div`
  display: flex;
  height: 5rem;
  align-items: end;
  justify-content: end;
  font-size: ${theme.font.sizes.xsmall};
`
export const OpenWeatherTitle = styled.a`
  margin-left: 0.4rem;
`
export const WrapperGoogleMaps = styled.div`
  width: auto;
  height: auto;
`
export const WrapperSmallPaper = styled.div`
  display: flex;
  margin: 0.4rem;
  justify-content: space-between;
`
export const WrapperImage = styled.div`
  height: 8rem;
  display: flex;
  flex-direction: column;
`
export const ContentTemperature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 8rem;
`
