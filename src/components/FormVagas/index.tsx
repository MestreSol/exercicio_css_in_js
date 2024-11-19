import { FormEvent, useState } from 'react'
import styled from 'styled-components'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <StyledFormVagas onSubmit={aoEnviarForm}>
      <StyledInput
        type="text"
        placeholder="Pesquise por vagas"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
      />
      <StyledButton type="submit">Pesquisar</StyledButton>
    </StyledFormVagas>
  )
}

const StyledFormVagas = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
const StyledButton = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`
const StyledInput = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`
export default FormVagas
