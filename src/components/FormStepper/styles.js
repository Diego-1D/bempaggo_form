import styled from 'styled-components';
import { theme } from '../../theme/theme';
import background from '../../assets/imgs/banner.svg'

export const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    padding: 1rem 0;
    justify-content: center;
    background-color: ${theme.defaultPurple};

    @media screen and (max-width: 490px){
        padding: 0;
    }
`;

export const Container = styled.section`
    background: ${theme.defaultWhite};
    width: 460px;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 490px){
        width: 100%;
    }
`;

export const Header = styled.header`
    background-color: ${theme.primary};
    width: 100%;
    height: 10rem;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom right;
    border-radius: 5px 5px 0 0;
`;

export const Content = styled.div`
    flex: 1;
    background-color: ${theme.defaultWhite};
`;

export const Footer = styled.footer`
    background-color: ${theme.defaultGrey};
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    border-radius: 0 0 5px 5px;
`;

export const Button = styled.button`
    background-color: ${theme.primary};
    padding: 15px 25px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    color: ${theme.defaultGrey};
    cursor: pointer;
    &:disabled{
        background-color: grey;
    }
`;

export const Title = styled.h1`
    font-size: 1.5em;
    max-width: 60%;
    font-weight: 100;
    color: ${theme.defaultWhite};
    padding: 20px;
        strong{
    font-weight: bold;
   }
`;