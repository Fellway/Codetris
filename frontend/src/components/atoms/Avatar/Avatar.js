import styled from 'styled-components';

const Avatar = styled.div`
  height: 40px;
  width: 40px;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: ${({ circle }) => (circle ? '50%' : '15px')};
`;

export default Avatar;
