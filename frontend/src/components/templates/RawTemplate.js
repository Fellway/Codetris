import React from 'react';
import styled from 'styled-components';
import DemoDashboardImage from 'assets/dashboard-demo.png';
import Header from '../atoms/Header/Header';
import Paragraph from '../atoms/Paragraph/Paragraph';
import { theme } from '../../theme/MainTheme';

const WelcomeMessageBox = styled.div`
  max-width: 800px;
  background-color: #211f1f;
  padding: 75px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.grey100};
  border-radius: 10px;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-row-gap: 50px;
  box-shadow: 5px 5px 15px 5px #000000;
`;

const StyledHeader = styled(Header)`
  text-align: center;
`;

const StyledParagraph = styled(Paragraph)`
  text-indent: 50px;
  text-align: justify;
  font-size: ${theme.fontSize.m};
  margin: 0 auto;
`;

const Regards = styled(Paragraph)`
  font-size: ${theme.fontSize.m};
  width: fit-content;
  justify-self: right;
`;

const DemoDashBoard = styled.div`
  width: calc(100% + 50px);
  height: 100vh;
  background-image: url(${DemoDashboardImage});
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: -50px;
  filter: blur(3px);
`;

const RawTemplate = () => (
  <>
    <DemoDashBoard />
    <WelcomeMessageBox>
      <StyledHeader>Welcome to Codetris</StyledHeader>
      <StyledParagraph>
        It&apos;s nice to see you here! We are glad that you are using our application. As you know,
        the application is in early access stage. A lot of functionality and solutions may not be
        fully operational yet. However, please be patient. Our team works to provide the highest
        quality solutions.
      </StyledParagraph>
      <Regards>
        Best Regards,
        <br />
        Codetris Team
      </Regards>
    </WelcomeMessageBox>
  </>
);

export default RawTemplate;
