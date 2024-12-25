import imgPrimary from './assets/hero-primary.png'
import imgSecondary from './assets/hero-secondary.png'
import linkArrow from './assets/link-arrow.svg'
import dot from './assets/dot.png'
import arrow from './assets/arrow.png'

export default function HeroSection() {
    return (
        <div className='w-full h-full flex items-center flex-col'>
            <div className='font-sans tracking-tighter leading-tight flex w-[98%] h-[85vh] justify-evenly items-center'>
                <div className='w-[70%] h-full flex items-end'>
                    <div className='w-full flex flex-col'>
                        <div className='flex items-baseline gap-3'>
                            <h1 className='text-[80px] font-medium'>Blogs of the week</h1>
                            <p className='text-[18px]'>see all posts</p>
                            <img src={arrow}></img>
                        </div>
                        <div className='relative'>
                            <p className='absolute top-5 left-5 font-medium text-[20px] bg-white px-5 py-3 rounded-full'>Sept 6, 2023</p>
                            <div className='absolute right-5 top-5 bg-[#ffffffc4] backdrop-blur-[150px] h-[65px] w-[65px] p-4 rounded-full flex justify-center items-center'>
                                <img src={linkArrow}></img>
                            </div>
                            <div className='absolute flex flex-col gap-3 bottom-5 left-5 bg-[#ffffffc4] backdrop-blur-[150px] rounded-[50px] px-10 py-5 w-[700px]'>
                                <div className='flex gap-2 w-fit items-center bg-white rounded-full py-2 px-5'>
                                    <img src={dot}></img>
                                    <p className='text-[20px] font-semibold'>Technology</p>
                                </div>
                                <p className='text-[40px]'>Top 10 things to get the most out of your PC.</p>
                            </div>
                            <img src={imgPrimary} className='w-full h-[65vh] object-cover rounded-[50px]'></img>
                        </div>
                    </div>
                </div>
                <div className='w-[25%] h-full'>
                    <div className='w-full h-full flex flex-col justify-between'>
                        <div className='relative flex flex-col justify-between w-full h-[37.5%] bg-[#ECE4D7] rounded-[50px] p-10'>
                            <div className='absolute right-5 top-5 bg-[#ffffffc4] backdrop-blur-[150px] h-[65px] w-[65px] p-4 rounded-full flex justify-center items-center'>
                                <img src={linkArrow}></img>
                            </div>
                            <div className='text-[24px]'>
                                <p>Become A</p>
                                <p>BROADCAST MEMBER</p>
                            </div>
                            <div className='text-[36px] font-medium'>
                                <p>Real talk in a corporate world.</p>
                            </div>
                        </div>
                        <div className='w-full h-[60%] relative'>
                            <p className='absolute top-5 left-5 font-medium text-[20px] bg-white px-5 py-3 rounded-full'>Sept 6, 2023</p>
                            <div className='absolute right-5 top-5 bg-[#ffffffc4] backdrop-blur-[150px] h-[65px] w-[65px] p-4 rounded-full flex justify-center items-center'>
                                <img src={linkArrow}></img>
                            </div>
                            <div className='absolute flex flex-col gap-3 bottom-0 left-0 bg-[#ffffffc4] backdrop-blur-[150px] rounded-[50px] px-10 py-5 w-full'>
                                <div className='flex gap-2 w-fit items-center bg-white rounded-full py-2 px-5'>
                                    <img src={dot}></img>
                                    <p className='text-[20px] font-semibold'>Health</p>
                                </div>
                                <p className='text-[40px]'>Benefits of laughing.</p>
                            </div>
                            <img src={imgSecondary} className='w-full h-full object-cover rounded-[50px]'></img>
                        </div>
                    </div>
                </div>
            </div>
            <p className='flex justify-center items-center mt-5 text-[20px] font-medium'>scroll down to see more.</p>
        </div>
    );
}