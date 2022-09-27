import Button from 'components/Button'
import Link from 'next/link'
import Base from 'templates/Base'
import * as S from './styles'

const Main = ({
  title = 'Desafio',
  description = 'Desenvolva um aplicativo que consuma a localização atual do usuário e exiba na interface o endereço atual os dados climáticos da região e um botão para atualizar os dados.'
}) => {
  return (
    <Base>
      <S.WrapperContent>
        <div>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </div>
        <S.WrapperImageContent>
          <S.Illustration
            src="/img/hero-illustration.svg"
            alt="Um desenvolvedor de frente para uma tela com código."
          />
          <Link href="/dashboard" passHref>
            <Button style={{ margin: 20 }}>Entrar</Button>
          </Link>
        </S.WrapperImageContent>
      </S.WrapperContent>
    </Base>
  )
}

export default Main
