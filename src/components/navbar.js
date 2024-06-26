import React from 'react';
import logo from '../assests/logo.svg'

const Navbar = () => {

    return (
        <div className='w-full bg-[#387943] flex justify-between py-4 items-center border-b-[0.5px] px-[40px] md:px-[70px] lg:px-[100px] xl:px-[150px] font-inter'>
            <div>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt='NoKasa logo'/>
                    <span className='text-[18px] md:text-[26px] font-bold text-[#FFFFFF] font-inter'>NoKasa</span>
                </div>
            </div>
            <div className='hidden md:flex justify-between md:min-w-[65%] lg:min-w-[55%] xl:min-w-[45%] items-center'>
                    <span className='text-[#FFFFFF] text-[16px] leading-[20px] cursor-pointer'>For Scrap Dealers</span>
                    <span className='text-[#FFFFFF] text-[16px] leading-[20px] cursor-pointer'>For companies</span>
                    <button className='bg-[#E3803B] py-[15px] px-[22px] font-semibold text-[#FFFFFF] text-[16px] leading-[20px] cursor-pointer'>
                        Talk to us
                    </button>
            </div>
            <div className='md:hidden'>
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5 8C21.5 8.23206 21.4078 8.45463 21.2437 8.61872C21.0796 8.78281 20.8571 8.875 20.625 8.875H1.375C1.14294 8.875 0.920376 8.78281 0.756282 8.61872C0.592187 8.45463 0.5 8.23206 0.5 8C0.5 7.76794 0.592187 7.54538 0.756282 7.38128C0.920376 7.21719 1.14294 7.125 1.375 7.125H20.625C20.8571 7.125 21.0796 7.21719 21.2437 7.38128C21.4078 7.54538 21.5 7.76794 21.5 8ZM1.375 1.875H20.625C20.8571 1.875 21.0796 1.78281 21.2437 1.61872C21.4078 1.45462 21.5 1.23206 21.5 1C21.5 0.767936 21.4078 0.545376 21.2437 0.381282C21.0796 0.217187 20.8571 0.125 20.625 0.125H1.375C1.14294 0.125 0.920376 0.217187 0.756282 0.381282C0.592187 0.545376 0.5 0.767936 0.5 1C0.5 1.23206 0.592187 1.45462 0.756282 1.61872C0.920376 1.78281 1.14294 1.875 1.375 1.875ZM20.625 14.125H1.375C1.14294 14.125 0.920376 14.2172 0.756282 14.3813C0.592187 14.5454 0.5 14.7679 0.5 15C0.5 15.2321 0.592187 15.4546 0.756282 15.6187C0.920376 15.7828 1.14294 15.875 1.375 15.875H20.625C20.8571 15.875 21.0796 15.7828 21.2437 15.6187C21.4078 15.4546 21.5 15.2321 21.5 15C21.5 14.7679 21.4078 14.5454 21.2437 14.3813C21.0796 14.2172 20.8571 14.125 20.625 14.125Z" fill="white"/>
                </svg>

            </div>
        </div>
    )
}

export default Navbar;