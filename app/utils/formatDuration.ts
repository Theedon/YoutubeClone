const LEADING_ZERO_FORMATTER = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
});

const formatDuration = (duration: number): string => {
  const hours = Math.floor(duration / 60 / 60);
  const minutes = Math.floor((duration - hours * 60 * 60) / 60) as number;

  const seconds = duration % 60;

  const formattedString =
    hours <= 0
      ? `${LEADING_ZERO_FORMATTER.format(
          minutes,
        )}:${LEADING_ZERO_FORMATTER.format(seconds)}`
      : `${hours}:${LEADING_ZERO_FORMATTER.format(
          minutes,
        )}:${LEADING_ZERO_FORMATTER.format(seconds)}`;
  return formattedString;
};

export default formatDuration;
