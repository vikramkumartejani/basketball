import Image from 'next/image';
import Link from 'next/link';

const Teams = () => {
  const teams = {
    atlantic: [
      { id: 1, image: "/boston.svg", title: 'Boston Celtics' },
      { id: 2, image: "/boston.svg", title: 'Boston Celtics' },
      { id: 3, image: "/boston.svg", title: 'Boston Celtics' },
      { id: 4, image: "/boston.svg", title: 'Boston Celtics' },
      { id: 5, image: "/boston.svg", title: 'Boston Celtics' },
    ],
    central: [
      { id: 1, image: "/boston.svg", title: 'Boston Celtics' },
      { id: 2, image: "/boston.svg", title: 'Boston Celtics' },
      { id: 3, image: "/boston.svg", title: 'Boston Celtics' },
      { id: 4, image: "/boston.svg", title: 'Boston Celtics' },
      { id: 5, image: "/boston.svg", title: 'Boston Celtics' },
    ],
    southeast: [
      { id: 1, image: "/boston.svg", title: 'Boston Celtics' },
      { id: 2, image: "/boston.svg", title: 'Boston Celtics' },
      { id: 3, image: "/boston.svg", title: 'Boston Celtics' },
      { id: 4, image: "/boston.svg", title: 'Boston Celtics' },
      { id: 5, image: "/boston.svg", title: 'Boston Celtics' },
    ],
  };

  return (
    <div className='bg-gradient-to-b from-blue-800 to-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8'>
      <div className='container mx-auto'>
        <h3 className='text-4xl font-extrabold text-center mb-8'>ALL TEAMS</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-6'>
          {Object.entries(teams).map(([division, divisionTeams], index) => (
            <div key={index} className='md:px-4 px-2 py-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300'>
              <h1 className='text-xl font-bold mb-4 uppercase text-black'>{division}</h1>
              {divisionTeams.map((item, teamIndex) => (
                <div key={teamIndex} className='flex items-center gap-4 mb-3 bg-gray-50 hover:bg-gray-200 py-3 rounded-md transition duration-300'>
                  <Image
                    src={item.image}
                    width={53}
                    height={53}
                    alt={item.title}
                    className='rounded'
                  />
                  <div className=' '>
                    <Link href='#'>
                      <span className='text-black text-lg font-semibold hover:underline'>{item.title}</span>
                    </Link>
                    <div className='flex items-center gap-2 '>
                      <Link href='#'>
                        <span className='text-[#0268D6] text-sm hover:underline'>Profile</span>
                      </Link>
                      <Link href='#'>
                        <span className='text-[#0268D6] text-sm hover:underline'>Stats</span>
                      </Link>
                      <Link href='#'>
                        <span className='text-[#0268D6] text-sm hover:underline'>Schedule</span>
                      </Link>
                      <Link href='#'>
                        <span className='text-[#0268D6] text-sm hover:underline'>Tickets</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
