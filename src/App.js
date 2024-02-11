import './App.css';
import {check,findind} from './Handlers';
import { vendor,PinCode } from './Data';
import { Option } from './Components/Option';
import { useState } from 'react';
import Available from './Components/Available';
import UnAvailable from './Components/UnAvailable';

function App() {
  const [VendorName,SetVendorName]=useState("");
  const [PinCodeNo,SetPinCodeNo]=useState(-1);
  const [flag,setflag]=useState(false);
  const [flag2,setflag2]=useState(false);

  function handleChange(event) {
    const newValue = event.target.value;
    SetVendorName(newValue);
  }

  function handle(event) {
    const newValue = event.target.value;
    SetPinCodeNo(newValue);
  }

  function print(){
    let Vindex=findind(VendorName,vendor);
    let Pindex=findind(PinCodeNo,PinCode);
    setflag2(true);
    setflag(check(Vindex,Pindex));
  }

  return (
    <div className="bg-regal-blue h-screen flex flex-col items-center justify-center font-sans">
          <div className="h-1/2 w-1/3 rounded-lg border border-zinc-600 flex flex-col justify-around items-center">
            <div className="h-1/5 w-1/2 text-white flex justify-around items-center text-3xl">
              Welcome 👋
              </div>
            <div className="h-1/5 w-4/6">
              <div className='text-white'>Vendor Name</div>
              <select className='h-1/2 w-full mt-2 rounded-lg bg-regal-blue border text-white border-zinc-600' onChange={handleChange} value={VendorName}>
                <option>Enter Vendor name</option>
                {vendor.map((data,index)=>{
                  return <Option name={data.name} key={index} className={data.name} i={data.index} />
                })}
             </select>
            </div>
            <div className="h-1/5 w-4/6">
             <div className='text-white'>PinCode</div>
             <select className='h-1/2 w-full mt-2 rounded-lg bg-regal-blue border text-white border-zinc-600' 
             value={PinCodeNo} onChange={handle}>
                <option>Enter Pincode</option>
                {PinCode.map((data,index)=>{
                  return <Option name={data.name} key={index} className={data.name} i={data.index}/>
                })}
             </select>
            </div>
            <div className="h-1/5 w-4/6 flex items-center justify-center">
              <button className='h-2/3 w-full bg-white text-black rounded-lg text-m' onClick={print}>Submit</button>
            </div>
          </div>
          {flag2?flag?<Available/>:<UnAvailable/>:null}

    </div>
  );
}

export default App;
