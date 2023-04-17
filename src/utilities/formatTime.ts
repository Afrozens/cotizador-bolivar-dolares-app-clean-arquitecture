export const formatTime = (time:Date | string | number):string => {
    const now = new Date(time)
    const timeFormated = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
    return timeFormated
}