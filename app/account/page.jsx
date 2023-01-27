export default function Account() {
  const loggedIn = false;
  if(!loggedIn) {
    return(
      <main className="flex flex-col items-center justify-center h-full w-full">
        <form className="w-11/12 md:w-2/3 my-3 transition-all duration-300 motion-reduce:transition-none items-center flex flex-col">
          <input 
            type="text" 
            className='w-full border-solid border-4 text-sm p-3 my-3 rounded-2xl bg-text text-bkg focus:border-bkg dark:text-textsemi dark:border-darker dark:bg-bkg focus:outline-none dark:focus:border-text focus:border-3 transition-all duration-300 motion-reduce:transition-none focus:motion-reduce:transition-none' 
            placeholder="Email..."
          />
          <input 
            type="text" 
            className='w-full border-solid border-4 text-sm p-3 my-3 rounded-2xl bg-text text-bkg focus:border-bkg dark:text-textsemi dark:border-darker dark:bg-bkg focus:outline-none dark:focus:border-text focus:border-3 transition-all duration-300 motion-reduce:transition-none focus:motion-reduce:transition-none' 
            placeholder="Password..."
          />
          <div className="flex items-center justify-between w-full">
            <button className="p-5 rounded-lg text-sm mr-3 mt-3 w-6/12 dark:text-text text-bkg dark:bg-darker bg-text transition-all duration-300 motion-reduce:transition-none hover:scale-95">Log in</button>
            <button className="p-5 rounded-lg text-sm ml-3 mt-3 w-6/12 dark:text-text text-bkg dark:bg-darker bg-text transition-all duration-300 motion-reduce:transition-none hover:scale-95">Sign up</button>
          </div>
        </form>
      </main>
    )
  }
}