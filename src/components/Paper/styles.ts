import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import theme from 'styles/theme'
import { PaperProps } from '.'

const wrapperModifiers = {
  small: () => css`
    ${media.lessThan('medium')`
    max-width: 100%;
    width: auto;
  `}
    max-width: 36rem;
    height: 12rem;
    width: auto;
    background-color: ${theme.colors.white};
    border-radius: 0.8rem;
    padding: ${theme.spacings.xsmall};
    margin: ${theme.spacings.xsmall};
  `,

  medium: () => css`
    ${media.between('medium', 'large')`
    max-width: 100%;
    width: auto;
  `}
    ${media.lessThan('medium')`
    max-width: 100%;
    width: auto;
    height: 32rem;
  `}

    max-width: 36rem;
    height: 38rem;
    width: auto;
    background-color: ${theme.colors.white};
    border-radius: 0.8rem;
    padding: ${theme.spacings.xsmall};
    margin: ${theme.spacings.xsmall};
  `,
  large: () => css`
    ${media.between('medium', 'large')`
    max-width: 100%;
    width: auto;
  `}
    ${media.lessThan('medium')`
    width: auto;
    max-width: 100%;
  `}
    max-width: 74rem;
    width: auto;
    height: 38rem;
    background-color: ${theme.colors.white};
    border-radius: 0.8rem;
    padding: ${theme.spacings.xsmall};
    margin: ${theme.spacings.xsmall};
  `
}

export const Wrapper = styled.div<PaperProps>`
  ${({ size }) => css`
    ${!!size && wrapperModifiers[size]}
  `}
`

export const Content = styled.main`
  color: ${theme.colors.black};
`
