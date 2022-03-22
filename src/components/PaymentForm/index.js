import React, { useState } from 'react';
import ImgQrCode from '../../assets/imgs/qrcode.svg';
import { usePlayer } from '../context';
import {
    Container,
    MethodsArea,
    MethodsOption,
    InputWrapper,
    CodeArea,
    Label,
    Input,
    InputOption,
    DivPix,
    ImageQrCode,
    CopyButton,
    Title,
    HeaderLabel,
    CartReview
} from './styles';

const PaymentForm = () => {

    const {qtyReact, qtyVue, qtyAngular} = usePlayer();
    const [paymentMethod, setPaymentMethod] = useState('cartao');
    const [cardField, setCardField] = useState("8888 8888 3333 2222");
    const [nameField, setNameField] = useState("Fulando da Silva");
    const [valField, setValField] = useState('08/2033');
    const [cvvField, setCvvField] = useState("223");
    const [cpfField, setCpfField] = useState("900.099.384-88");

    // const handleAddEvent = () => {
    //     let errors = [];

    //     if (cardField === "") {
    //         errors.push("Título vazio!");
    //     }
    //     if (nameField === "") {
    //         errors.push("Título vazio!");
    //     }
    //     if (valField === "") {
    //         errors.push("Título vazio!");
    //     }
    //     if (cvvField.length !== 3) {
    //         errors.push("Cvv inválido!");
    //     }
    //     if (cpfField.length !== 11) {
    //         errors.push("CPF inválido!");
    //     }
    //     if (errors.length > 0) {
    //         alert(errors.join("\n"));
    //     }
    // }

    return (
        <Container>
            <Title>Revisão do pedido:</Title>
            <CartReview>
            
            {qtyReact > 0 && <HeaderLabel>{`React: ${qtyReact} adesivos`}</HeaderLabel>}
            {qtyVue > 0 &&<HeaderLabel>{`Vue: ${qtyVue} adesivos`}</HeaderLabel>}
            {qtyAngular> 0 &&<HeaderLabel>{`Angular: ${qtyAngular} adesivos`}</HeaderLabel>}
            </CartReview>
            <MethodsArea>
                <MethodsOption>
                    <InputOption type='radio' name='radio' value='cartao' checked={paymentMethod == 'cartao'} id='cartao' onChange={() => setPaymentMethod('cartao')} />
                    <Label htmlFor='cartao'>Cartão</Label>
                </MethodsOption>
                <MethodsOption>
                    <InputOption type='radio' name='radio' value='boleto' checked={paymentMethod == 'boleto'} id='boleto' onChange={() => setPaymentMethod('boleto')} />
                    <Label htmlFor='boleto'>Boleto</Label>
                </MethodsOption>
                <MethodsOption>
                    <InputOption type='radio' name='radio' value='pix' checked={paymentMethod == 'pix'} id='pix' onChange={() => setPaymentMethod('pix')} />
                    <Label htmlFor='pix'>Pix</Label>
                </MethodsOption>
            </MethodsArea>
            {
                paymentMethod === 'cartao' &&
                <>
                    <InputWrapper>
                        <Label>Número do cartão</Label>
                        <Input
                            value={cardField}
                            onChange={(ev) => setCardField(ev.value)}
                            type='text'
                        >
                        </Input>
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Nome do titular</Label>
                        <Input
                            value={nameField}
                            onChange={(ev) => setNameField(ev.value)}
                            type='text'
                        >
                        </Input>
                    </InputWrapper>
                    <CodeArea>
                        <InputWrapper>
                            <Label>Validade</Label>
                            <Input
                                value={valField}
                                onChange={(ev) => setValField(ev.value)}
                                style={{ width: '120px' }}
                                type='text'
                            >
                            </Input>
                        </InputWrapper>
                        <InputWrapper>
                            <Label>CVV</Label>
                            <Input
                                value={cvvField}
                                onChange={(ev) => setCvvField(ev.value)}
                                maxLength={3}
                                style={{ width: '120px' }}
                                type='text'
                            >
                            </Input>
                        </InputWrapper>
                    </CodeArea>
                    <InputWrapper>
                        <Label>CPF/CNPJ do titular</Label>
                        <Input
                            value={cpfField}
                            name='cpf'
                            maxLength={11}
                            onChange={(ev) => setCpfField(ev.target.value)}
                            type='text'
                        >
                        </Input>
                    </InputWrapper>
                </>
            }
            {/* <button onClick={handleAddEvent}>Seguir</button> */}

            {paymentMethod === 'boleto' && <DivPix>
                <Label>Código de barra do boleto báncario a ser pago</Label>
                <Label>24253.53684 26465.183626 973548 363729757947932</Label>
                <CopyButton>Copiar</CopyButton>
                <CopyButton>Visualizar boleto</CopyButton>
            </DivPix>
            }
            {paymentMethod === 'pix' && <DivPix>
                <Label>Para realizar o pagamento, abra o aplicativo do seu banco em outro celular, escolha
                    a opção pix e escaneie com câmera o código abaixo:
                </Label>
                <ImageQrCode src={ImgQrCode} />
            </DivPix>}
        </Container >
    )
}

export default PaymentForm;