import styled from '@emotion/styled';

const Fallback = styled.div<{ size?: 'small' | 'medium' }>`
  position: relative;
  background: #f5f5f5;
  text-align: center;

  p {
    padding-top: 1rem;
    font-weight: 600;
    color: #222222;
  }

  ${({ size }) => {
    switch (size) {
      case 'small':
        return 'padding: 5rem 2rem; font-size: 1.5rem;';
      default:
        return 'padding: 10rem 2rem; font-size: 1.8rem;';
    }
  }}
`;

export default Fallback;
