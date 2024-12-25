import searchIcon from './assets/search.svg'
import addIcon from './assets/add.svg'
import avatar from './assets/topic-section/avatar.png'
import p1 from './assets/topic-section/1.png'
import p2 from './assets/topic-section/2.png'
import p3 from './assets/topic-section/3.png'
import p4 from './assets/topic-section/4.png'
import p5 from './assets/topic-section/5.png'
import arrow from './assets/arrow.png'

export default function TopicSection() {

    const topics = ["Technology", "Health", "Business"]

    const posts = [{ image: p1 },
    { image: p2 },
    { image: p3 },
    { image: p4 },
    { image: p5 }
    ]

    return (
        <div className="w-full mt-20 flex flex-col items-center tracking-tighter leading-tight">
            <div className="w-[95%]">
                <div className='flex items-center gap-3'>
                    <h1 className='text-[96px] font-medium'>Topics</h1>
                    <img src={arrow} className='h-fit'></img>
                </div>
                <div className='flex gap-2'>
                    <div className="w-fit flex items-center bg-[#EDEDED] rounded-[20px] px-5 py-3">
                        <input placeholder="search topics..." className='bg-[#EDEDED] caret-purple-400' />
                        <button>
                            <img src={searchIcon}></img>
                        </button>
                    </div>
                    <button key={-1} className='bg-black rounded-[20px] px-5 py-3 text-white font-medium'>For You</button>
                    {topics.map((item, index) => {
                        return (
                            <button key={index} className='rounded-[20px] px-5 py-3 border-[#0000002f] border font-medium'>{item}</button>
                        );
                    })}
                </div>

                <div className='w-full mt-10 flex flex-col gap-5'>
                    {posts.map((item, index) => {
                        return (
                            <div className='flex items-center h-fit w-full gap-5'>
                                <p className='text-[36px] font-medium'>{index + 1}.</p>
                                <div className='relative w-[350px] h-[200px] rounded-[20px] overflow-hidden'>
                                    <img className='w-full h-full object-cover' src={item.image}></img>
                                    <div className='absolute right-2 top-2 bg-[#ffffffc4] backdrop-blur-[150px] h-[50px] w-[50px] p-4 rounded-full flex justify-center items-center'>
                                        <img src={addIcon}></img>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-around h-[200px] w-[70vw]'>
                                    <p className='text-[30px] font-medium'>Lorem ipsum dolor sit amet consectetur. Pellentesque elementum pellentesque montes sed aliquam vel. Ipsum dolor sit amet consectetur</p>
                                    <div className='flex items-center gap-2'>
                                        <img src={avatar}></img>
                                        <p className='text-[15px]'>Catylin Kiramman</p>
                                    </div>
                                    <div className='flex gap-10 text-[18px] font-medium'>
                                        <p>Likes 1.2k</p>
                                        <p>Comment 876</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}