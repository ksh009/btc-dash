import "./App.css";

function App() {
  return (
    <>
      {/* NavBar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Bitcoin Dashboard</h1>
          <ul className="space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="bg-gray-800 text-white w-64 flex-none">
          {/* Sidebar Content */}
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Bitcoin Dashboard</h1>
            <ul className="space-y-2">
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                  Price Trends
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                  Market Depth
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                  One more link
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">
                  One more small change
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="p-4">
            {/* Content goes here */}
            <h2 className="text-2xl font-bold mb-4">Bitcoin Price Trends</h2>
            <div className="bg-white p-4 rounded shadow">
              {/* Price chart goes here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
