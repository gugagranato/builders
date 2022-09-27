import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100vh;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
`

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  max-width: 80rem;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`

export const WrapperContent = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`
export const WrapperImageContent = styled.div`
  display: flex;
  flex-direction: column;
`
