export function parseDate(dateString: Date): string {
    const date = new Date(dateString)

    const month = date.toLocaleString('default', { month: 'long' })
    const year = date.getFullYear()

    return `${month} ${year}`
}
