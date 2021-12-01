import styled from 'styled-components'

export const Image = styled.img`
  border-radius: 15px;
  background: darkGrey;
  display: flex;
  padding: 15px 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 23vw;
  position: absolute;
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 15px;
  row-gap: 15px;
  max-width: 100vw;
`

export const OverlayWrapper = styled.div`
  background: darkGrey;
  transition: all 800ms ease-in-out;
  &.slide-enter {
    transform: translateY(75vh);
  }

  &.slide-enter-active,
  &.slide-enter-done {
    transform: translateY(0);
  }

  &.slide-exit {
    transform: translateY(0);
  }

  &.slide-exit-active {
    transform: translateY(100%);
  }
`
