export interface Time {
  day: string
  dateShort: string
  epoch: string | number
}

export const timeEmpty: Partial<Time> = {
  day: '',
  dateShort: '',
  epoch: '',
}
