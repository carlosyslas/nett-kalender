import compareAsc from "date-fns/compare_asc";
import isSameDay from "date-fns/is_same_day";
import { selectEvent } from "../events/selectors";

export const selectYearEvents = (state, { year }) => {
  const { monthly } = state;
  const eventsByDate = monthly.entities[year];
  if (!eventsByDate) {
    return {};
  }

  const selected = {};

  Object.keys(eventsByDate).forEach(date => {
    selected[date] = eventsByDate[date]
      .map(id => selectEvent(state, id))
      .filter(v => !!v && isSameDay(v.start, `${year}-${date}`))
      .sort((a, b) => compareAsc(a.start, b.start));
  });

  return selected;
};
