import React from 'react';
import styles from '../styles/about.css'

class About extends React.Component{
  render() {
    
    return(
      <div id='about' className='container'>
        <div className='content'>
          <h1>About KnowThyShelf</h1>
          <p className='description'>
            KnowThyShelf was created in July 2015 by owner/operator Joe Sipkins. Joe is an amateur book collector who was dismayed at the lack of information readily available about his favorite titles, so he decided to do something about it. Despite the intimidating nature of the task (cataloguing hundreds or thousands or millions of books), Joe is excited to plunge into the work necessary to make the website grow. For a bibliomaniac, there could be no greater task.
          </p>
        </div>
      </div>
    )
  }
}

export default About;