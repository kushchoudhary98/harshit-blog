export function NavBar() {
    return (
        <div className='font-sans tracking-tighter flex justify-between items-center px-5 mt-3'>
            <div className='flex gap-10 items-center'>
                <div className='text-[40px] font-normal'>Blog Spot.</div>
                <div className='text-[20px] flex gap-10'>
                    <a href="/articles">articles</a>
                    <a>submit work</a>
                    <a>contact us</a>
                    <a className='underline'>work with us</a>
                </div>
            </div>
        </div>
    );
}