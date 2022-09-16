import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 20rem;
    height: 8rem;
  `,

  large: () => css`
    width: 30rem;
    height: 8rem;
  `,
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
    width: 5.8rem;
    height: 4.5rem;

    svg {
      height: 10rem
    }

    .text {
      display: none;
    }
  `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
