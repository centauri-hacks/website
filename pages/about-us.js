import styles from '../styles/aboutus.module.css'

function AboutUs() {
  return (
    <>
      <div>
        <div id = {styles.homeImage}>
            <h1 id = {styles.imageHeader}>About Us</h1>
        </div>
        <div className = {styles.AboutUs}>
            <h1>Our Misson</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className = {styles.AboutUs}>
            <h1>About Us</h1>
            <div id = {styles.CardHolder}>
                <Card title = 'person1'/>
                <Card title = 'person2'/>
                <Card title = 'person3'/>
                <Card title = 'person4'/>
            </div>
        </div>
      </div>
    </>
  );
}

const Card = ({title, name, description}) => {
    return(
        <>
        <div className = {styles.card}>
            <img className = {styles.card}/>
            <div>
                <h5 className = {styles.card}>{title ? title : 'Web Developer'}</h5>
                <h1 className = {styles.card}>{name ? name : 'John Smith'}</h1>
                <p className = {styles.card}>{description ? description : 'Hiya! I am blue! I am an avid developer who loves working with React, Javascript, Typescript, and Python. I started developing at a young age and innovate with every project I make. You can find some of my projects on my Github at https://github.com/bluefalconhd (Though most of my projects are too WIP or dumb to put there)'}</p>
            </div>    
        </div>  
        </>
    );
}

export default AboutUs
