import DeadlineDate from "./DeadlineDate";

function Description(props) {
    console.log(props);
  return (
    <div>
      <DeadlineDate date={props.date} />
      <h2>{props.description}</h2>
    </div>
  );
}

export default Description;
