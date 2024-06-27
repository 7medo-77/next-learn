// import { home } from '@heroicons/react/20/solid';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/outline'; // For outline icons


const Sidebar = () => {
	return (
		<div>
{/*
			<div className="fixed top-0 left-0 h-full w-64 bg-yellow-800 text-white flex flex-col justify-between">
			  <div className="flex flex-col space-y-4 p-4">
				<button className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700">
				  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
					</svg>
				  <span>Button 1</span>
				</button>
				<button className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700">
				  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
					</svg>
				  <span>Button 2</span>
				</button>
				<button className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700">
				  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
					</svg>
				  <span>Button 3</span>
				</button>
				<button className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700">
				  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
					</svg>
				  <span>Button 4</span>
				</button>
				</div>
			</div>
*/}
			<div className="fixed top-0 left-0 h-full w-1/6 bg-blue-400 text-white flex flex-col justify-around">
				<button className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700">
				  <HomeIcon />
				  <span>Button 1</span>
				</button>
				<button className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700">
				  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
					</svg>
				  <span>Button 2</span>
				</button>
				<button className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700">
				  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
					</svg>
				  <span>Button 3</span>
				</button>
				<button className="flex items-center px-4 py-2 rounded-md hover:bg-gray-700">
				  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
					</svg>
				  <span>Button 4</span>
				</button>
			</div>

		</div>
	)
}

export default Sidebar;
