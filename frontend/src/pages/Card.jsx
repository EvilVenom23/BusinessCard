
export default function Card({bcards}) {
    

      const tinder = "https://www.tinder.com";
      const bumble = "https://www.bumble.com";
      console.log(bcards)
     
 
    return <div>  
                      
              {
                bcards.map((card) => {
            return  <div style={styles.carding}>
          <div style={{display : "flex"}}>
         
          <h2 style={styles.name}>{card.name}</h2>
          <img src= {card.src} 
                width="23%"  style={{ margin : "10px ", borderRadius: "100%"}}/>

          </div>
          
          <div style={styles.description}>{card.description}</div>
          <h3 style={styles.interestsHeader}> Interests</h3>
          <ul style={styles.interestsList}>
            {/* <li>{props.inst[0]}</li>
            <li>{props.inst[1]}</li> */}
            
            {card.interest.map( (interests) => (
                    <li style={styles.interestItem}>{interests}</li>
                    
            ))}
          </ul>
         </div>    })  }
          </div>        
}

const styles = {
    carding: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px',
      maxWidth: '400px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f7d043',
      width : "60%"
    },
    name: {
      fontSize: '40px',
      marginBottom: '10px',
      color: '#d610e0',
    },
    description: {
      fontSize: '20px',
      color: '#fa4df4',
      marginBottom: '15px',
    },
    socialLinks: {
      display: 'flex',
      marginBottom: '15px',
    },
    link: {
      textDecoration: 'none',
      color: '#fff', // Text color
      padding: '10px 15px', // Padding for the button
      borderRadius: '5px', // Border radius for rounded corners
      backgroundColor: '#007BFF', // Background color for the button
      display: 'inline-block', // Display as inline-block to be side by side
      margin: '10px', // Margin between buttons
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
      cursor : 'pointer'
    },
    interestsHeader: {
      fontSize: '18px',
      marginBottom: '10px',
      color: '#c04dfa',
    },
    interestsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    interestItem: {
      fontSize: '14px',
      marginBottom: '5px',
      color: '#fa4df4',
    },
  };

//   <div style={styles.socialLinks}>
//   <a href={tinder} target="_blank" style={{...styles.link}}>
//    Tinder
//   </a>
//   <br />
//   <a href={bumble} target="_blank"  style={styles.link}>
//     Bumble
//   </a>
// </div>

  //   https://ih1.redbubble.net/image.2106996310.0701/ur,pin_large_front,square,600x600.u4.jpg