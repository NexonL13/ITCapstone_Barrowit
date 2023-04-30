import React from 'react'

const Profile = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
    <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
		<div className="p-4 md:p-12 text-center lg:text-left">
			<div className="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{backgroundImage: "url(" + "https://picsum.photos/200/300" + ")"}}></div>
			
			<h1 className="text-3xl font-bold pt-8 lg:pt-0">Mr/Ms Administrator</h1>
			<div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
			<p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><img className="mr-3" src="https://img.icons8.com/dusk/30/000000/new-job.png"/>Administrator</p>
			<p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><img className="mr-3" src="https://img.icons8.com/officel/30/000000/worldwide-location.png"/>Location:<a href="https://what3words.com/after.takes.shorts" target="_blank"> ///after.takes.shorts</a></p>
			<p className="pt-8 text-sm">Description of Profile...</p>

			<div className="pt-12 pb-8">
				<button className="bg-teal-700 hover:bg-blue-800 hover:text-white text-black font-bold py-2 px-4 rounded-full">
				  Get In Touch
				</button> 
			</div>
		</div>

	</div>
    </div>
  )
}

export default Profile