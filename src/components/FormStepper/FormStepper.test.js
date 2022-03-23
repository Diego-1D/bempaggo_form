// __tests__/fetch.test.js
import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import FormStepper from '.'
import StickerForm from '../StickerForm'
import { Title } from './styles'
import PaymentForm from '../PaymentForm'
import PurchaseSuccess from '../PurchaseSuccess'
import { Context, useFormData } from '../context'

const customRender = (ui, {providerProps, ...renderOptions}) => {
  return render(
    <Context.Provider {...providerProps}>{ui}</Context.Provider>,
    renderOptions,
  )
}

describe('componente: FormStepper', ()=>{

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

  const contextParams = {
    stepIndex: 0,
    nextStep: ()=>{},
    previousStep: ()=>{},
    qtyAngular: 0,
    qtyReact: 0,
    qtyVue: 0
  }
  test('Os inputs para inserir a quantidade de adesivos foram renderizados', () => {

    render(
      <Context.Provider value={
        contextParams
      }><FormStepper/></Context.Provider>
    )
    // customRender(<FormStepper/>, {contextParams})
  
    // fireEvent.click(screen.getByText('Load Greeting'))
    expect(screen.getAllByRole('input')).toBeGreaterThan(3)
    // expect(screen.getByRole('button')).toBeDisabled()
  })
})

