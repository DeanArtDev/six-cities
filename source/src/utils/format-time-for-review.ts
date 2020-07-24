import {MONTHS} from '@root/consts/consts';

const formatTimeForReview = (date: string): string => {
  const nextDate = new Date(date);
  const month = MONTHS[nextDate.getMonth()];
  const day = nextDate.getDate() < 10 ? `0${nextDate.getDate()}` : nextDate.getDate();

  return `${month} ${day} ${nextDate.getFullYear()}`;
};

export default formatTimeForReview;
