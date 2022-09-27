import { ReactNode } from 'react'
import * as S from './styles'

export type PaperProps = {
  size?: 'small' | 'medium' | 'large'
  children?: ReactNode
}

const Paper = ({ size = 'medium', children }: PaperProps) => (
  <S.Wrapper size={size} role="paper">
    <S.Content>{children}</S.Content>
  </S.Wrapper>
)

export default Paper
