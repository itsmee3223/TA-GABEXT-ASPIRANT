import styled from 'styled-components';

const Wrapper = styled.footer`
  width: 100%;
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #161a4f;
  text-align: center;
  p {
    color: #53589d;
  }
  span {
    color: var(--clr-primary-5);
  }
  h1 {
    font-weight: 400;
    color: var(--clr-grey-6);
    text-transform: none;
    line-height: 1.25;
    margin-top: 20px;
  }
  h5 {
    color: var(--clr-grey-6);
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  .underline {
    width: 80%;
    height: 1px;
    margin-bottom: 1rem;
    background: #333769;
  }

  @media (min-width: 776px) {
    flex-direction: column;
  }
`;

export default Wrapper;
