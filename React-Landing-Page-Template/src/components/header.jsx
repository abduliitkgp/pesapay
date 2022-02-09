import {Html5Qrcode} from 'html5-qrcode';


  
export const Header = (props) => {


function scanQrcode()
{
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
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <button className='btn btn-custom btn-lg page-scroll' onClick={scanQrcode}
                >
                  Scan QR Code
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="reader" width="100vw" height="100vh"></div>
    </header>
  )
}
