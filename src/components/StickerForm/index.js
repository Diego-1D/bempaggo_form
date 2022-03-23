import React from 'react'
import { useFormData } from '../context';
import {
    Container,
    Title,
    InputWrapper,
    Label,
    Input,
    TextArea
} from './styles';

const StickerForm = () => {

    const {
        qtyAngular, setQtyAngular,
        qtyReact, setQtyReact,
        qtyVue, setQtyVue
    } = useFormData();

    return (
        <Container>
            <Title>Quantos adesivos de cada categoria?</Title>
            <InputWrapper>
                <Label htmlFor='react'>React</Label>
                <Input
                    type='number'
                    min={0}
                    id='react'
                    value={qtyReact}
                    onChange={(e) => setQtyReact(e.target.value)}
                    onKeyDown={(e) => {if (e.keyCode === 13) {
                        e.preventDefault();
                    }}}
                >
                </Input>
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor='vue'>Vue</Label>
                <Input
                tabIndex={1}
                    type='number'
                    min={0}
                    id='vue'
                    value={qtyVue}
                    onChange={(e) => setQtyVue(e.target.value)}
                    onKeyDown={(e) => {if (e.keyCode === 13) {
                        e.preventDefault();
                    }}}

                ></Input>
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor='angular'>Angular</Label>
                <Input
                    type='number'
                    min={0}
                    id='angular'
                    value={qtyAngular}
                    onChange={(e) => setQtyAngular(e.target.value)}
                    onKeyDown={(e) => {if (e.keyCode === 13) {
                        e.preventDefault();
                    }}}
                ></Input>
            </InputWrapper>
            <Title>Observações:</Title>
            <TextArea rows={4} placeholder='Alguma dúvida? Recado?'></TextArea>
        </Container>
    )
}

export default StickerForm;