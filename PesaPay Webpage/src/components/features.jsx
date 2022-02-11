import Lottie from "lottie-react";
import animation from '../lotties/qrcode.json'



export const Features = (props) => {


    
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='row-md-10 row-md-offset-1 section-title'>
          <h2>So many reasons to start using PesaScan</h2>
        </div>
        <Lottie animationData={animation} loop='true' width='50' height='20' />
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='row-xs-6 row-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <img src={d.img} alt='...' className='features-image' />
                  
                  <span><br></br></span>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  );
}

