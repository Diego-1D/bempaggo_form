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
    margin-bottom: 1rem;
`;

export const MethodsOption = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem;
    border-radius: 5px;
    gap: 0.3rem;


    &:hover{
        border: 1px solid ${theme.primary};
    }
`;


export const InputWrapper = styled.form`
    padding: 10px 0;
    display: grid;
    grid-template-rows: 20px 1fr;
`;

export const Label = styled.label`
    font-size: 0.8em;
    margin-right: 10px;
`;


export const Input = styled.input`
    padding: 12px;
    background: ${theme.defaultGrey};
    font-size: 12px;
    border-radius: 5px;
    border: 1px solid ${theme.primary};
`;

export const CodeArea = styled.div`
    display: flex;
    gap: 3rem;
`;