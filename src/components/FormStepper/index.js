import React from 'react';
import { useFormData } from '../context';
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

    const { stepIndex, nextStep, previousStep } = useFormData();

    const steps = [
        {
            title: <Title>Formulário para compra de <br /><strong>Pacote de adesivos</strong></Title>,
            content: <StickerForm />
        },
        {
            title: <Title>Escolha a <br /><strong>Forma de pagamento</strong></Title>,
            content: <PaymentForm />
        },
        {
            title: <Title>Obrigado por escolher a <strong>BemPaggo!</strong></Title>,
            content: <PurchaseSuccess />
        }
    ]

    return (
        <Wrapper>
            <Container>
                <Header>
                    {steps[stepIndex].title}
                </Header>
                <Content>
                    {steps[stepIndex].content}
                </Content>
                {stepIndex < steps.length - 1 && <Footer>
                    <Button disabled={stepIndex === 0} onClick={previousStep}>Voltar</Button>
                    <Button onClick={nextStep}>Prosseguir</Button>
                </Footer>}
            </Container>
        </Wrapper>
    )
}

export default FormStepper;