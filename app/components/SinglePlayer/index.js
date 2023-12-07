import Image from 'next/image';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const SinglePlayer = () => {
  return (
    <div className="container mx-auto my-10 p-8 text-white shadow-md rounded-lg bg-gradient-to-b from-blue-900 to-blue-600">
      <h1 className="text-4xl font-bold mb-6">Player Profile</h1>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0 flex items-center justify-center">
          <Image
            src="/player.jpg"
            width={500}
            height={1000}
            alt="player"
            className="rounded-lg"
          />
          <div className="absolute inset-0 rounded-lg border-4 border-white"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent rounded-lg"></div>
        </div>
        <div className="w-full lg:w-1/2 lg:ml-8">
          <p className="text-4xl font-extrabold text-white mb-4">John Doe</p>
          <p className="text-lg text-gray-300 mb-2">BIRTHDATE: February 19, 1995</p>
          <p className="text-gray-300 mb-4">COUNTRY: Serbia</p>
          <div className="flex items-center gap-8  mb-6">
            <div className="flex items-center gap-2">
              <FaFacebookSquare />
              <span className="text-gray-400">12K Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <FaInstagram />
              <span className="text-gray-400">8K Likes</span>
            </div>
          </div>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod, ante vel
            scelerisque blandit, elit turpis tincidunt tortor, ac dignissim purus odio vel
            enim. Quisque posuere orci sed efficitur fermentum.
          </p>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-6 py-2 rounded-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 transition duration-300 focus:outline-none focus:ring focus:border-blue-300">
              Follow
            </button>
            <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300 focus:outline-none focus:ring focus:border-blue-300">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
