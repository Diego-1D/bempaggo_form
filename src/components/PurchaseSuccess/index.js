import React from 'react'
import congrats from '../../assets/imgs/congrats.svg'
import {
    Container,
    Label,
    Image
} from './styles';

const PurchaseSuccess = () => {

    return (
        <Container>
            <Label>Em breve sua compra chegará ao seu local</Label>
            <Image src={congrats} alt="Compra realizada" />
        </Container>
    )
}

export default PurchaseSuccess;