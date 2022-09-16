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
})
