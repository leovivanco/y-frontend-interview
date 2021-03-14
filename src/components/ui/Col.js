import styled from 'styled-components'

const Col = styled.div`
  width: 100%;
  position: relative;
  ${(props) =>
    props.bg &&
    `
      background-image: url(${props.bg});
      background-size: cover;
      color: #fff
  `}

  ${(props) =>
    props.bgColor &&
    `
      background-color: ${props.bgColor};
  `}
`
export default Col
