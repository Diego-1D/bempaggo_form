import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    font-size: 1em;
    margin: 10px 0;
`;

export const InputWrapper = styled.form`
    padding: 10px 0;
    display: grid;
    align-items: center;
    grid-template-columns: 100px 1fr;
`;

export const Label = styled.label`
    font-size: 0.8em;
    margin-right: 10px;
`;

export const Input = styled.input`
    padding: 12px;
    background: ${theme.defaultGrey};
    font-size: 12px;
    border-radius: 8px;
    border: 1px solid ${theme.primary};
`;

export const TextArea = styled.textarea`
    padding: 12px;
    background: ${theme.defaultGrey};
    border-radius: 8px;
    border: 1px solid ${theme.primary};
`;