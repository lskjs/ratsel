import moment, { Moment } from 'moment';

export function convertDateToMoment(date: Date | Moment | undefined): Moment | undefined {
  if (!date) return undefined;
  if (moment.isMoment(date)) return date;
  return moment(date);
}
