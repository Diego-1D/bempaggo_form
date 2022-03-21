import React from 'react';
import {
    Container,
    MethodsArea,
    MethodsOption,
    InputWrapper,
    CodeArea,
    Label,
    Input,
    TextArea
} from './styles';

const PaymentForm = () => {

    return (
        <Container>
            <MethodsArea>
                <MethodsOption>
                    <input type='checkbox' />
                    <p>Cartão</p>
                </MethodsOption>
                <MethodsOption>
                    <input type='checkbox' />
                    <p>Boleto</p>
                </MethodsOption>
                <MethodsOption>
                    <input type='checkbox' />
                    <p>Pix</p>
                </MethodsOption>
            </MethodsArea>
            <InputWrapper>
                <Label>Número do cartão</Label>
                <Input
                    type='number'
                    min={0}
                >
                </Input>
            </InputWrapper>
            <InputWrapper>
                <Label>Nome do titular</Label>
                <Input
                    type='text'
                    min={0}
                >
                </Input>
            </InputWrapper>
            <CodeArea>

                <InputWrapper>
                    <Label>Validade</Label>
                    <Input
                        type='date'
                        min={0}
                    >
                    </Input>
                </InputWrapper>
                <InputWrapper>
                    <Label>CVV</Label>
                    <Input
                        type='number'
                        min={0}
                    >
                    </Input>
                </InputWrapper>
            </CodeArea>
            <InputWrapper>
                <Label>CPF/CNPJ do titular</Label>
                <Input
                    type='number'
                    min={0}
                >
                </Input>
            </InputWrapper>
        </Container >
    )
}

export default PaymentForm;