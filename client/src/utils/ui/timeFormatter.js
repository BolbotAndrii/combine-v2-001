
export const TimeFormatter = ( { date } ) => {
    return  date.replace('T', '/').split('.')[0]
}
