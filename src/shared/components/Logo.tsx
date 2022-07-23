import styled from '@emotion/styled'

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoCircle />
      <LogoCircle />
      <LogoCircle />
    </LogoWrapper>
  )
}

const LogoWrapper = styled('div')`
  display: inline-block;
  padding: 0 8px;
  transform: rotate(45deg);
  width: 40px;
`

const LogoCircle = styled('div')`
  box-sizing: border-box;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border-width: 0px;
  border-style: solid;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  &:nth-child(1) {
    border-color: hsl(166deg 16% 73%);
    background-color: hsl(166deg 16% 73% / 50%);
  }
  &:nth-child(2) {
    margin-top: -60%;
    margin-left: -25%;
    border-color: hsl(20deg 86% 78%);
    background-color: hsl(20deg 86% 78% / 50%);
  }
  &:nth-child(3) {
    margin-top: -100%;
    margin-left: 25%;
    border-color: hsl(228deg 22% 69%);
    background-color: hsl(228deg 22% 69% / 50%);
  }
`
