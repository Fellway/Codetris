import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import React from 'react';
import styled from 'styled-components';
import ChatIcon from 'assets/chat.svg';
import NotificationIcon from 'assets/bell.svg';
import EmailIcon from 'assets/email.svg';

const Wrapper = styled.div`
  display: grid;
  row-gap: 10px;
  justify-items: start;
`;

const MessagesMenu = () => (
  <Wrapper>
    <ButtonIcon icon={ChatIcon}>Chat</ButtonIcon>
    <ButtonIcon icon={NotificationIcon}>Notifications</ButtonIcon>
    <ButtonIcon icon={EmailIcon}>Emails</ButtonIcon>
  </Wrapper>
);

export default MessagesMenu;
