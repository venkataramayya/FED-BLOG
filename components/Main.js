import React from "react";
import Sidebar from "./Sidebar";
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';
import image7 from './image7.png';
import image8 from './image8.png';
import image9 from './image9.png';

const Main = () => {
    return (

    <div>

  <div className="article">
      <table className="tab">

      <h1><u>HTML Web Workers API</u></h1>

      <tr><h2 align="left">Web Workers API</h2>
        <p>A web worker is a JavaScript running in the background, without affecting the performance of the page.

</p>
          <h2>What is a Web Worker?</h2>
          <p>Everyone wants a website or application which work fast and can execute multiple operations simultaneously without affecting the performance of the page. However, sometimes we experience some delay response or degraded performance of page while executing some large operations. So this problem can be solved using the Web Workers.

Web Workers are the multithreaded object which can execute multiple JavaScript in parallel without affecting the performance of the application or webpage.
</p><br/>
<p><b>Following are some key features of the Web Workers:</b></p>
<ul>
  <li>Web-workers are threaded JavaScript.</li>
  <li>Web-workers are the kernel-level thread.</li>
  <li>Web-workers requires more space and CPU time.</li>
  <li>Web-workers enhances the speed of a website.</li>
  <li>Web-worker executes codes on the client side (not server-side).</li>
  <li>Web worker threads communicate with each other using postMessage() callback method</li>
</ul>
      </tr>

      <tr><h2 align="left"><b>Types of Web Workers:</b></h2>
      <p><b>In HTML5 Web Workers are of two types:</b></p>
      <h6>Dedicated Web Workers:</h6>
      <p>The dedicated worker can be accessed by only one script which has called it. The dedicated worker thread end as 
        its parent thread ends. Dedicated workers are only used by one or single main thread.</p></tr><br/>
     <h6>Shared Web Workers:</h6>
     <p>It can be shared by multiple scripts and can communicate using the port. Shared 
      workers can be accessed by different windows, iframes or workers.</p>
      












<tr>
      <h2 align="left"> Web Workers Browser Support:</h2>


          <p>Before learning the web Workers first, we need to check about the browser support.
             So following is the code which checks whether your browser is supporting or not.</p><br/>

             <img src={image2} alt="image2" align="left" style={{width:'50%'}}/> <br/></tr><tr></tr><tr></tr><tr><h3 align="left" >output:</h3></tr><tr>
             
             <img src={image8} alt="image8" align="left" style={{width:'60'}}/>

</tr>

          
      

      <tr><h2 align="left">Creation of Web worker file:</h2>
          <p>In above "worker.js" file, we have created the JS file for web Worker now it needs to call on an HTML file. To create the web worker object, you need to call the Worker() constructor.

</p><br/>
<p><b>Following is the syntax to call and create the object of Web Worker:</b></p>

<img src={image4} alt="image4" align="left"/>
          
          </tr>
          
      <tr><h3 align="left">Sending messages between the Worker thread and main thread:</h3>
          <p>All the communication of Worker thread depends on the postMessage() method and onmessage event handler.</p>
          <h3>Terminating the Web Worker:</h3>
          <p>If you want to immediately terminate the currently running worker in the main thread, then you can terminate it by calling the terminate() method of Web Worker.
             Here is the syntax for web worker termination:</p>
             <img src={image5} alt="image5" align="left"/>

             </tr>







          <tr><br/>
          <h3 align="left">Example</h3>
          <img src={image6} alt="image6" align="left" style={{width:'75%'}}/>

      </tr>

      <tr><h3 align="left"> Worker.js file:</h3>
      <img src={image7} alt="image7" align="left" style={{width:'70%'}}/><br/>
      <br></br></tr>
      <tr></tr><tr></tr><tr><h3 align="left" >output:</h3></tr>
             
             <img src={image9} alt="image9" align="left" style={{width:'60'}}/>
      <tr><h2>example explanation:</h2>
      <p>In the above example in HTML file we have used</p>
      <ul>
        <li>var worker= new Worker("worker.js"); To create the web Worker object.</li>
        <li>worker.onmessage= function(event): It is used to send the message between the main thread and Worker thread.</li>
        <li>worker.postMessage(num); This is the method used to communicate between the Worker thread and main thread.
           Using this method Worker thread return the result to the main thread.</li>
      </ul>
      </tr>

      
      
        
        

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </table>


   </div>
    <Sidebar />
    </div>
    )
};

export default Main;