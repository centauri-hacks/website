import styles from '../styles/aboutus.module.css'

function AboutUs() {
  return (
    <>
      <div>
        <div id = {styles.homeImage}>
            <h1 id = {styles.imageHeader}>About Us</h1>
        </div>
        <div id = {styles.AboutUs}>
            <h1>About Us</h1>
            <div id = {styles.CardHolder}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
      </div>
    </>
  );
}

const Card = ({}) => {
    return(
        <>
        <div className = {styles.card}>
            <img className = {styles.card}/>
            <div>
                <h5 className = {styles.card}>Web Developer</h5>
                <h1 className = {styles.card}>John Smith</h1>
                <p className = {styles.card}>Hiya! I am blue! I am an avid developer who loves working with React, Javascript, Typescript, and Python. I started developing at a young age and innovate with every project I make. You can find some of my projects on my Github at https://github.com/bluefalconhd (Though most of my projects are too WIP or dumb to put there)</p>
            </div>    
        </div>  
        </>
    );
}

export default AboutUs
