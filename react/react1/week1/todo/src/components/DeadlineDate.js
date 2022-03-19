function DeadlineDate(props) {
  console.log("propsÆ ", props.date);
  const propsDate = props.date.split(" ");
  console.log(propsDate);
  const weekday = propsDate[0];
  const month = propsDate[1];
  const day = propsDate[2];
  const year = propsDate[3];
  return (
    <div>
      <div>{weekday}</div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default DeadlineDate;
