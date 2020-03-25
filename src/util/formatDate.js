import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

const formatDate = date => {
  if (!date) {
    return '---';
  }

  const newDate = parseISO(date);

  const formatted = format(newDate, "d'/'MM'/'yyyy", {
    locale: pt,
  });
  return formatted;
};

export default formatDate;
