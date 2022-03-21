import React, { useState } from 'react';
import PaymentForm from '../PaymentForm';
import PurchaseSuccess from '../PurchaseSuccess';
import StickerForm from '../StickerForm';
import {
    Button,
    Container,
    Content,
    Footer,
    Header,
    Wrapper,
    Title
} from './styles';

const FormStepper = () => {

    const [stepIndex, setStepIndex] = useState(0);

    const steps = [
        {
            title: <Title>Formulário para compra de <br/><strong>Pacote de adesivos</strong></Title>,
            content: <StickerForm/>
        },
        {
            title: <Title>Escolha a <br/><strong>Forma de pagamento</strong></Title>,
            content: <PaymentForm/>
        },
        {
            title: <Title>Obrigado por escolher a  <br/><strong>BemPaggo!</strong></Title>,
            content: <PurchaseSuccess/>
        }
    ]

    const previousStep = () => {
        setStepIndex(stepIndex - 1);
    };
    const nextStep = () => {
        setStepIndex(stepIndex + 1);
    };

    return (
        <Wrapper>
            <Container>
                <Header>
                    {steps[stepIndex].title}
                </Header>
                <Content>
                    {steps[stepIndex].content}
                </Content>
               { stepIndex < steps.length -1 && <Footer>
                    <Button disabled={stepIndex === 0} onClick={previousStep}>Voltar</Button>
                    <Button onClick={nextStep}>Prosseguir</Button>
                </Footer>}
            </Container>
        </Wrapper>
    )
}

export default FormStepper