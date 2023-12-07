'use client'
import Image from 'next/image';
import UpcomingEvents from '../UpcomingEvents'
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// react-icons
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Hero = () => {
    const teams = [
        { name: 'Boston Celtics', logo: '/boston.svg' },
        { name: 'Brooklyn Nets', logo: '/boston.svg' },
        { name: 'New York Knicks', logo: '/boston.svg' },
        { name: 'Philadelphia 76ers', logo: '/boston.svg' },
        { name: 'Toronto Raptors', logo: '/boston.svg' },
        { name: 'Chicago Bulls', logo: '/boston.svg' },
        { name: 'Cleveland Cavaliers', logo: '/boston.svg' },
    ];
    return (
        <div className="bg-cover bg-center bg-gradient-to-b from-blue-900 to-blue-600">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row text-white py-20 relative overflow-hidden">
                <div className="flex-1 text-center lg:text-left p-6 lg:p-10">
                    <h1 className="text-4xl lg:text-5xl font-extrabold mb-4  ">
                        Welcome to Basketball Central
                    </h1>
                    <p className="text-lg lg:text-xl mb-6  ">
                        The National Basketball Association is a professional basketball league in North America
                        composed of 30 teams. It is one of the major professional sports leagues in the United States and Canada and is considered the premier professional basketball league in the world.
                    </p>
                    <div className="flex flex-col lg:flex-row gap-4  ">
                        <button className="bg-yellow-400 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300">
                            Explore Now
                        </button>
                       
                    </div>
                </div>
                <div className="flex items-center justify-center lg:w-1/2">
                    <Image
                        src="/hero.jpg"
                        alt="hero"
                        width={500}
                        height={500}
                        objectFit="cover"
                        className="rounded-md shadow-xl "
                    />
                </div>
            </div>

            {/* Upcoming Event */}
             <UpcomingEvents/>

            {/* Teams */}
            <section className="bg-gray-100 py-8">
                <div className="container mx-auto">
                    <h2 className="text-lg sm:text-2xl lg:text-4xl font-extrabold text-center mb-8">Featured Teams</h2>

                    <Swiper
                        spaceBetween={!0}
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}

                    >
                        {teams.map((team, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white p-6 rounded-md shadow-md mx-6">
                                    <img
                                        src={team.logo}
                                        alt={`${team.name} Logo`}
                                        className="mx-auto mb-4 w-24 h-24 object-contain"
                                    />
                                    <h3 className="text-xl text-center font-semibold mb-2">{team.name}</h3>
                                    <div className='flex items-center justify-center'>

                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

        
        </div>
    );
};

export default Hero;
