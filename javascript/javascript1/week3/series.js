//Q3) Series duration of my life

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function getPercentage(seriesDuration) {
  let lifeSpan = 365 * 24 * 80;
  return ((seriesDuration / lifeSpan) * 100).toFixed(3);
}

function logOutOfSeriesText() {
  let totalPercentage = 0.0;
  for (let i = 0; i < seriesDurations.length; i++) {
    const series = seriesDurations[i];
    const daysToHours = series.days * 24;
    const totalHours = daysToHours + series.hours;
    const totalHoursInPErcentage = getPercentage(totalHours);
    let logText = series.title + ' took ' +  totalHoursInPErcentage + '% of my life';
    console.log(logText);
    totalPercentage = (totalPercentage * 10 + totalHoursInPErcentage * 10) / 10;
  }
  console.log('Intotal that is ' + totalPercentage.toFixed(3) + '%');
}

logOutOfSeriesText();

