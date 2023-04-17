export interface Time {
  day: string
  dateShort: string
  epoch: string | number
}

export const timeEmptyState: Time = {
  day: '',
  dateShort: '',
  epoch: '',
}
