const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
  };
  return (
    // card template
    <>
    <div className="flex flex-col items-center justify-center h-1/2 w-1/2 mx-auto bg-slate-900 mt-10 rounded-3xl  shadow-lg shadow-slate-800">
      <h1 className="text-4xl text-slate-100 py-4">Use State Basics</h1>

    {/* end of card template */}

      <h2 className="text-slate-50 text-4xl py-10">{count}</h2>
      <button type='button' className='px-8 py-2 bg-slate-500 rounded-3xl hover:bg-slate-600 transition-all' onClick={handleClick}>
        increment
      </button>

    </div>
  </>
  )
}

export default ErrorExample;
