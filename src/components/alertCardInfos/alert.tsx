import React from 'react'
import { saveAs } from 'file-saver'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Badge } from '../ui/badge'

export function AlertCard() {
  const fileUrl = '/Gustavo Curriculo.pdf'

  const downloadFile = () => {
    saveAs(fileUrl, 'Gustavo Curriculo.pdf')
  }

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Badge variant="outline">Contato</Badge>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Caso queria entrar em contato comigo:
            </AlertDialogTitle>
            <AlertDialogDescription>
              <br></br>
              Email: gustavo.santoszuckert@gmail.com <br></br>
              <br></br>
              Telefone / WhatsApp: +55 (12) 981387335 <br></br>
              <br></br>
              Ou clique no botão a baixo para baixar meu currículo
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Voltar</AlertDialogCancel>
            <AlertDialogAction onClick={downloadFile}>
              Baixar Curriculo
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
