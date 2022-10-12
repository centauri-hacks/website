import RCountdown from "react-countdown";
import Heading from "./heading";
import styles from "./countdown.module.css"

// DATE CONFIG
// const startDate = new Date("march 24, 2023");
const startDate = new Date("march 24, 2023");
const endDate = new Date("march 27, 2023");

const rendererBefore = ({ days, completed }) => {
  if (!completed) {
    return (
      <div className={styles.container}>
        <Heading type="h1">
          Centauri Hackathon starts in <span className={styles.highlightedb}>{days}</span> days. Come back soon! ✌️
        </Heading>
      </div>
    );
  }
};

const rendererDuring = ({ days, completed }) => {
  if (!completed) {
    return (
      <div className={styles.container}>
        <Heading type="h1">
          Centauri Hackathon ends in{" "}
          <span className={styles.highlighted}>{days} days</span>. Good luck! 🔮
        </Heading>
      </div>
    );
  }
};

export default function Countdown() {
    if (Date.now() >= startDate) {
        return <RCountdown date={endDate} renderer={rendererDuring} />;
    } else {
        return <RCountdown date={startDate} renderer={rendererBefore} />;
    }
}
