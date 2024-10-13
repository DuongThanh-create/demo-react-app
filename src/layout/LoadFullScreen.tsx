import styled from '@emotion/styled'
import { CircularProgressMui } from './material'

const LoadingLayoutContentStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
`

const LoadingLayoutChildContentStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
`

const LoadingFullscreen = () => {
  return (
    <LoadingLayoutContentStyled>
      <CircularProgressMui size={60} />
    </LoadingLayoutContentStyled>
  )
}

export default LoadingFullscreen
