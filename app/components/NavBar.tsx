export function NavBar() {
    return (
        <div className='font-sans tracking-tighter flex justify-between items-center px-5 mt-3'>
            <div className='flex gap-10 items-center'>
                <div className='text-[40px] font-normal'>Blog Spot.</div>
                <div className='text-[20px] flex gap-10'>
                    <a>articles</a>
                    <a>radio</a>
                    <a>podcast</a>
                    <a>be a writer</a>
                    <a className='underline'>talk to us</a>
                </div>
            </div>
            <div className='text-[20px] flex gap-5 items-center'>
                <a className='underline'>sign up</a>
                <a className="bg-[#EDEDED] px-5 py-2 rounded-full">log in</a>
            </div>
        </div>
    );
}