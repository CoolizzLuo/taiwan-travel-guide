import styled from '@emotion/styled'

const FootWrapper = styled.footer`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
`

const Content = styled.div`
  height: 205px;
  letter-spacing: 1px;
  text-align: center;
  background: #333;
  color: #fff;
`

const Copyright = styled.div`
  height: 24px;
  line-height: 24px;
  letter-spacing: 1px;
  text-align: center;
  background: #1f1f1f;
  color: #fff;
`

const Footer = () => {
  return (
    <FootWrapper>
      <Content>

      </Content>
      <Copyright>&copy; copyright 2021</Copyright>
    </FootWrapper>
  )
};

export default Footer
