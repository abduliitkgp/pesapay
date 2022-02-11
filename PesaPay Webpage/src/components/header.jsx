import {Html5Qrcode} from 'html5-qrcode';
import Lottie from "lottie-react";
import animationData from '../lotties/scan.json';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import React, {useCallback} from 'react';


  

export const Header = (props) => {



  

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const handle = useFullScreenHandle();
  


function scanQrcode()
{
  handle.enter();
  const html5QrCode = new Html5Qrcode("reader");
  
  
    
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      console.log(`Code matched = ${decodedText}`, decodedResult);
    
      
      if(html5QrCode.isScanning)
      {
        html5QrCode.stop().then((ignore) => {
          goToLink(decodedText);
        }).catch((err) => {
          // Stop failed, handle it.
          prompt("Scan Again");
        });
      }
    }
      


      
    
    const qrCodeErrorCallback = () => {
      

    
    }
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    
    html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback,qrCodeErrorCallback);
}

function goToLink(url){
  window.open(url, "_blank");
}
function exit()
{
  handle.exit();

}


  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1 id='text'>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p id='para'>{props.data ? props.data.paragraph : 'Loading'}</p>
                <button className='btn btn-custom btn-lg page-scroll' onClick={scanQrcode}
                >
                  Scan QR Code
                </button>
                <FullScreen handle={handle}>
                <div className="full-screenable-node" style={{background: "white"}}>
                <div id="reader" width='90%' height='90%'/>

            


                  </div>
                
                
      </FullScreen>
      
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </header>
  )
}

