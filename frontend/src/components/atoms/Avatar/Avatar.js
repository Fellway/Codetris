import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  height: 40px;
  width: 40px;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 15px;
`;

const Avatar = ({ url }) => <Wrapper url={url} />;

export default Avatar;

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
};
