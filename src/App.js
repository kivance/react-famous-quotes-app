import data from './data.json'
import { useEffect, useState } from 'react';
import {AiOutlineSearch } from 'react-icons/ai'


function App() {

  const [searchVal, setSearchVal] = useState('');
  const [quotes, setQuotes] = useState(data);

  const handleSearch = (e) => {
    const searchValue = e.target.value
    setSearchVal(searchValue)

    const a = data.filter(
      (obj) =>
        obj.quoteAuthor.toLowerCase().includes(searchValue.toLowerCase()) ||
        obj.quoteText.toLowerCase().includes(searchValue.toLowerCase())
      );
      setQuotes(a)
  };

  useEffect(() => {
    
  }, [])
  
  return (
    <>
      <div className="w-full bg-indigo-600 mb-4 py-4 px-2">
      <div className="container flex flex-col items-center justify-center gap-4  max-w-[70rem] mx-auto">
        <h2 className='text-3xl font-black text-white'>Famous Quote App</h2>

        <div className="input  flex pr-1 items-center w-full mx-auto bg-transparent border-[.1rem] border-white border-opacity-20 rounded-full">
        <input type="text" value={searchVal} onChange={handleSearch} className='w-full text-white selection:bg-white selection:text-indigo-600 bg-transparent outline-none placeholder:text-gray-100  rounded-full px-4 h-8' placeholder='Search...' />
        <span className='bg-white bg-opacity-10 h-7 w-7 rounded-full flex items-center justify-center'>
        <AiOutlineSearch className='fill-white text-lg'/>
        </span>
        </div>
      </div> 
    </div>
    <div className='flex justify-between flex-col min-h-screen'>
      <div className='max-w-[70rem] px-4 rounded mx-auto flex justify-center'>
      <div className='mb-4 gap-4 mx-auto flex-wrap flex'>
      {quotes.length ? quotes.map((quote, index) => (<div
        className='flex justify-between flex-col lg:w-[calc(33%_-_.5rem)] md:w-[calc(50%_-_.5rem)] w-[100%] bg-gray-100 shadow-sm p-4'
        key={index}>
          <h2 className='flex-wrap font-semibold mb-3'>
          {quote.quoteText}
          </h2>
          <p>
          {quote.quoteAuthor ? quote.quoteAuthor : 'Unknown'}
          </p>
        </div>)) : <p>Not found...</p>}
      </div>
      </div>
      <div className='bg-neutral-900 py-4'>
        <div className='max-w-[70rem] mx-auto'>
          <a href="https://github.com/kivance/react-famous-quotes-app" className='text-neutral-100 font-normal text-sm'>You can find the source codes of this project in my github.</a>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;













