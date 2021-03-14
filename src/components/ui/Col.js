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
`
export default Col
