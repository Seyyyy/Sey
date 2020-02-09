import styled from 'styled-components'

const Fade = styled.div`
  animation-name: fadein;
  animation-duration: 0.6s;
  animation-timing-function: eace;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export default Fade
