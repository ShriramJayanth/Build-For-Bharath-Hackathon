import './App.css';

function App() {
  return (
    <div className="bg-regal-blue h-screen flex items-center justify-center">
          <div className="h-1/2 w-1/3 rounded-lg border border-zinc-600 flex flex-col justify-around items-center">
            <div className="h-1/5 w-1/2 text-white flex justify-around items-center font-sans text-3xl">
              Welcome 👋
              </div>
            <div className="h-1/5 w-4/6">
              <div className='text-white'>Vendor Name</div>
              <select className='h-1/2 w-full mt-2 rounded-lg bg-regal-blue border text-white border-zinc-600'>
                <option>Enter Vendor name</option>
                <option>Shakti Shoppers</option>
                <option>Annapurna Avenues</option>
                <option>Kisan Kendra</option>
                <option>Rangoli Retailers</option>
             </select>
            </div>
            <div className="h-1/5 w-4/6">
             <div className='text-white'>PinCode</div>
             <select className='h-1/2 w-full mt-2 rounded-lg bg-regal-blue border text-white border-zinc-600'>
                <option>Enter Pincode</option>
                <option>638701</option>
                <option>638702</option>
                <option>638703</option>
                <option>638704</option>
             </select>
            </div>
            <div className="h-1/5 w-4/6 flex items-center justify-center">
              <button className='h-2/3 w-full bg-white text-black rounded-lg text-m'>Submit</button>
            </div>
          </div>
    </div>
  );
}

export default App;
