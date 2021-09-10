import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from 'theme/MainTheme';
import 'date-fns';
import CloseIcon from '@material-ui/icons/Close';
import { TextareaAutosize } from '@material-ui/core';
import Header from '../../atoms/Header/Header';
import Button from '../../atoms/Button/Button';
import DatePicker from '../DatePicker/DatePicker';
import BasicInput from '../../atoms/Input/BasicInput';

const Wrapper = styled.div`
  position: fixed;

  .textarea {
    background-color: transparent;
    border: none;
  }

  input,
  svg,
  .textarea {
    color: ${theme.grey200};
    font-size: ${theme.fontSize.s};
  }

  .MuiInput-underline {
    :before {
      border-bottom-color: ${theme.grey200};
    }
  }

  .MuiInput-underline {
    :hover:not(.Mui-disabled):before {
      border-bottom-color: ${theme.colors.primary} !important;
    }
  }
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.58);
  z-index: 20;
`;

const BoxWrapper = styled.div`
  position: fixed;
  z-index: 20;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background-color: ${theme.grey450};
  border-radius: 5px;
`;

const Form = styled.div`
  padding: 25px;
  display: grid;
  grid-row-gap: 20px;
`;

const InputWithLabel = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.25fr;
  grid-column-gap: 20px;
`;

const Label = styled.div`
  align-self: center;
  color: ${theme.grey100};
  font-size: ${theme.fontSize.m};
  text-align: right;
`;

const Footer = styled.footer`
  width: 100%;
  background-color: ${theme.grey500};
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr 100px 100px;
  grid-column-gap: 15px;
`;

const StyledButton = styled(Button)`
  font-size: ${theme.fontSize.xs};
  background-color: ${({ primary }) => (primary ? `${theme.colors.primary}` : `${theme.grey100}`)};
  color: ${({ primary }) => (primary ? `${theme.grey100}` : `${theme.grey400}`)};
  width: 100px;
  border-radius: 5px;
`;

const HeaderWrapper = styled.header`
  padding: 25px;
  border-radius: 5px;
  background-color: ${theme.colors.primary};
  color: white;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: ${theme.fontSize.l};
  color: ${theme.grey100};

  svg {
    font-size: ${theme.fontSize.l};
  }

  :hover {
    cursor: pointer;
  }

  :focus {
    outline: 0;
  }
`;

const Modal = ({ onClose, onSave }) => (
  <Wrapper>
    <Background onClick={onClose} />
    <BoxWrapper>
      <HeaderWrapper>
        <Header s>Add new project</Header>
        <CloseButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </CloseButton>
      </HeaderWrapper>
      <Form>
        <InputWithLabel>
          <Label>Name:</Label>
          <BasicInput placeholder="Provide title of event" />
        </InputWithLabel>
        <InputWithLabel>
          <Label>Website:</Label>
          <BasicInput placeholder="Project website" />
        </InputWithLabel>
        <InputWithLabel>
          <Label>Start date:</Label>
          <DatePicker />
        </InputWithLabel>
        <InputWithLabel>
          <Label>End date:</Label>
          <DatePicker />
        </InputWithLabel>
        <InputWithLabel>
          <Label>Description:</Label>
          <TextareaAutosize
            minRows="5"
            className="textarea"
            aria-label="empty textarea"
            placeholder="Put description of the project"
          />
        </InputWithLabel>
      </Form>
      <Footer>
        <div>
          <span />
        </div>
        <StyledButton onClick={onClose}>Discard</StyledButton>
        <StyledButton onClick={onSave} primary>
          Create
        </StyledButton>
      </Footer>
    </BoxWrapper>
  </Wrapper>
);

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};
