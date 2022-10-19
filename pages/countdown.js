import Layout from "../components/layout_countdown"

import Countdown from 'react-countdown';

import styles from "../styles/Home.module.css";

export default function Home() {
  let hackathonDay = new Date("December 25, 2022 23:15:00");

  const CustomCountdown = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <h2 className = {styles.countdown}>Let the hacking begin!</h2>;
    } else {
      // Render a countdown
      return (
      <div className={styles.content}>
        <h2 className = {styles.countdown}>Countdown<br/>Days: {days} <br/>Hours:{hours} <br/>Minutes:{minutes} <br/>Seconds:{seconds}</h2>
      </div>
        );
    }
  }
  return (
    <Countdown date={hackathonDay} renderer={CustomCountdown} />
  );
}
