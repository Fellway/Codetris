import styled from 'styled-components';

const Avatar = styled.div`
  height: 40px;
  width: 40px;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 15px;
`;

export default Avatar;
