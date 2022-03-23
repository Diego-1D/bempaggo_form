import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;

export const MethodsArea = styled.div`
    width: 100%;
    height: 1.5rem;
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.7rem;
`;

export const MethodsOption = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem;
    border-radius: 5px;
`;

export const Title = styled.label`
    font-size: 1em;
    font-weight: bold ;
    margin-bottom: 5px;
`;

export const HeaderLabel = styled.p`
    font-size: 0.8em;
`;

export const InputOption = styled.input`
    -webkit-appearance: checkbox;
    -moz-appearance: checkbox;    
    -ms-appearance: checkbox;  
`;

export const InputWrapper = styled.form`
    padding: 10px 0;
    display: grid;
    grid-template-rows: 15px 1fr;
`;

export const Label = styled.label`
    font-size: 0.8em;
    margin-right: 10px;
`;


export const Input = styled.input`
    padding: 10px;
    background: ${theme.defaultGrey};
    font-size: 0.8em;
    border-radius: 5px;
    border: 1px solid ${theme.primary};
`;

export const CodeArea = styled.div`
    width: 100%;
    display: flex;
    gap: 3rem;
`;

export const OptionArea = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.2rem;
`;

export const CartReview = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    border-bottom: 1px solid grey;
    margin-bottom: 5px;
`;

export const ImageQrCode = styled.img`
    width: 170px;
    object-fit: cover;
`;

export const CopyButton = styled.button`
    background-color: ${theme.primary};
    padding: 15px 65px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    color: ${theme.defaultGrey};
    cursor: pointer;
`;