import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a black color by default', () => {
    renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(/Platform Builders/i).parentElement
    ).toHaveStyle({ color: theme.colors.black })
  })

  it('should render a white color by props', () => {
    renderWithTheme(<Logo color="white" />)
    expect(
      screen.getByLabelText(/Platform Builders/i).parentElement
    ).toHaveStyle({ color: theme.colors.white })
  })

  it('should render a large logo by default', () => {
    renderWithTheme(<Logo />)
    expect(
      screen.getByLabelText(/Platform Builders/i).parentElement
    ).toHaveStyle({ width: '30rem' })
  })

  it('should render a normal logo by props', () => {
    renderWithTheme(<Logo size="normal" />)
    expect(
      screen.getByLabelText(/Platform Builders/i).parentElement
    ).toHaveStyle({ width: '20rem' })
  })

  it('should render a large logo without text', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(
      screen.getByLabelText(/Platform Builders/i).parentElement
    ).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})
