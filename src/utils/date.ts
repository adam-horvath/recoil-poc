import { format, parse } from 'date-fns';

export interface FormatDateParams {
  date: string | Date;
  separator?: string;
  handleTime?: boolean;
  noClosingDot?: boolean;
}

export const formatDate = ({ date, separator = '.', handleTime = false, noClosingDot = false }: FormatDateParams) => {
  if (!date) {
    return '';
  }
  const dateToFormat = typeof date === 'string' ? new Date() : date;
  const noTime = separator === '.' && !noClosingDot ? '.' : '';
  return format(dateToFormat, `yyyy${separator}MM${separator}dd${handleTime ? '. HH:mm:ss' : noTime}`);
};
