import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${media.lessThan('medium')`
    height: auto;
    padding: 0rem;
  `}
  background-color: #06092b;
  color: #fff;
  width: 100%;
  min-height: 100vh;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
    padding: 0rem;
  `}
    margin-top: ${theme.spacings.xlarge};
    flex: 1 0 auto;
    width: 100%;
    max-width: 1200px;
    padding: ${theme.spacings.small};
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    `}
  `}
`
