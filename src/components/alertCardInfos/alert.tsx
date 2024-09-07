import React from 'react'
// import { saveAs } from 'file-saver'
import {
  AlertDialog,
  // AlertDialogAction,
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
  // const fileUrl = '/GustavoCurriculo.pdf'

  // const downloadFile = () => {
  //   saveAs(fileUrl, 'GustavoCurriculo.pdf')
  // }

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
              Email: gustavo.santoszuckert@gmail.com<br></br>
              <br></br>
              Giithub: github.com/TheGzuckert
              {/* colocar botão que direciona ao gihub */}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Voltar</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
