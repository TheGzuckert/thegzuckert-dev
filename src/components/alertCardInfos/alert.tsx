'use client'

import React from 'react'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'

type AlertCardProps = {
  trigger?: React.ReactNode
}

export function AlertCard({ trigger }: AlertCardProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {trigger ?? <Badge variant="outline">Contato</Badge>}
      </AlertDialogTrigger>
      <AlertDialogContent className="border-white/10 bg-surface">
        <AlertDialogHeader>
          <AlertDialogTitle>Entre em contato</AlertDialogTitle>
          <AlertDialogDescription className="space-y-2 text-on-surface-variant">
            <span className="block">
              Email: gustavo.santoszuckert@gmail.com
            </span>
            <span className="block">Github: github.com/TheGzuckert</span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Voltar</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
