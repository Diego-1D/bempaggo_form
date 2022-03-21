import React, { useState } from 'react'
import {
    Container,
    Title,
    InputWrapper,
    Label,
    Input,
    TextArea
} from './styles';

const StickerForm = () => {

    const [qtyReact, setQtyReact] = useState(0);
    const [qtyVue, setQtyVue] = useState(0);
    const [qtyAngular, setQtyAngular] = useState(0);

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
                    onChange={(ev) => setQtyReact(ev.value)}
                >
                </Input>
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor='vue'>Vue</Label>
                <Input
                    type='number'
                    min={0}
                    id='vue'
                    value={qtyVue}
                    onChange={(ev) => setQtyVue(ev.value)}
                ></Input>
            </InputWrapper>
            <InputWrapper>
                <Label htmlFor='angular'>Angular</Label>
                <Input
                    type='number'
                    min={0}
                    id='angular'
                    value={qtyAngular}
                    onChange={(ev) => setQtyAngular(ev.value)}
                ></Input>
            </InputWrapper>
            <Title>Observações:</Title>
            <TextArea rows={4} placeholder='Alguma dúvida? Recado?'></TextArea>
        </Container>
    )
}

export default StickerForm;