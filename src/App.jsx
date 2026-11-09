
function App(){

  return (
    
      
    
    <header className="bg-blue-900 p-2">
      
      <nav className="flex justify-between items-center  max-w-9xl">
        <div>
        <img src="https://m.media-amazon.com/images/M/MV5BMmQxMmFhYWEtZDVhYi00ZmU3LWI1YTUtNTYxODY2NmE1NTIyXkEyXkFqcGc@._V1_.jpg" alt="" className="w-20 h-15 object-contain rounded  py-2 mr-10 " />
      </div>
        <ul className="flex space-x-4 text-white  items-center gap-8">
          <li><a href="#" className="hover:text-yellow-400">Home</a></li> 
          <li><a href="#" className="hover:text-yellow-400">About</a></li>
          <li><a href="#" className="hover:text-yellow-400">Services</a></li>
          <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
        </ul>

        <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded hover:bg-yellow-300">Sign Up</button>
      </nav>
    </header>
    
  );

}
export default App;