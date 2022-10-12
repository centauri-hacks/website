import Countdown from "../components/countdown";
import Layout from "../components/layout"

export default function Home() {

    return (
      <Layout
        title="How long until Centauri Hackathon?"
        author="Centauri Hacks"
        date={{ day: 69, month: 69, year: 6969 }}
      >
        <Countdown />
      </Layout>
    );
}