import moment from 'moment';

export const FormatDate = (date: Date) => {
  return moment(date).format('D [de] MMMM, YYYY');
};
