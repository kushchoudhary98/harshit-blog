export function NavBar() {
    return (
        <div className='font-sans tracking-tighter flex justify-between items-center px-5 mt-3'>
            <div className='flex gap-10 items-center'>
                <a href="/" className='text-[40px] font-normal'>Blog Spot.</a>
                <div className='text-[20px] md:flex hidden gap-10'>
                    <a href="/articles">articles</a>
                    <a>submit work</a>
                    <a>contact us</a>
                    <a className='underline'>work with us</a>
                </div>
            </div>
            <a href="/login" className="text-[20px] underline">login</a>
        </div>
    );
}