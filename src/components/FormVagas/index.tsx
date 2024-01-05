import { FormEvent, useState } from 'react'
import { styledForm } from './styles'

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
    <styledForm.Form onSubmit={aoEnviarForm}>
      <styledForm.Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <styledForm.BtnPesquisar type="submit">Pesquisar</styledForm.BtnPesquisar>
    </styledForm.Form>
  )
}
export default FormVagas
