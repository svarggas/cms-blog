import { FC, HTMLAttributes } from 'react'
import { formatDate } from '@/lib/helpers'

interface DateComponentProps {
    dateString: string
    options?: Intl.DateTimeFormatOptions
    [x: string]: any;
}

const DateComponent: FC<DateComponentProps> = ({ dateString, options, ...props }) => {
    return (
        <time dateTime={dateString} {...props}>
            {formatDate(dateString, options)}
        </time>
    )
}

export default DateComponent