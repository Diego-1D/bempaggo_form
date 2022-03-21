import React from 'react'
import congrats from '../../assets/imgs/congrats.svg'
import {
    Container,

} from './styles';

const PurchaseSuccess = () => {

    return (
        <Container>
            Em breve sua compra chegará ao local
           <img height='300px' src={congrats} alt="Compra realizada"/>
        </Container>
    )
}

export default PurchaseSuccess;