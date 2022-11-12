export class CreateScheduleDto {
  localId: number
  time: {
    segunda: {
      open: boolean
      inicio: string
      fim: string
    }
    terca: {
      open: boolean
      inicio: string
      fim: string
    }
    quarta: {
      open: boolean
      inicio: string
      fim: string
    }
    quinta: {
      open: boolean
      inicio: string
      fim: string
    }
    sexta: {
      open: boolean
      inicio: string
      fim: string
    }
    sabado: {
      open: boolean
      inicio: string
      fim: string
    }
    domingo: {
      open: boolean
      inicio: string
      fim: string
    }
  }

}
