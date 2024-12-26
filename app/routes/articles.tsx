import type { Route } from "./+types/articles";
import avatar from "../components/assets/topic-section/avatar.png";
import { NavBar } from "~/components/NavBar";

export async function loader() {

    const post = {
        id: Number,
        image: String,
        title: String,
        likes: Number,
        comments: Number
    };
    const Posts = [post, post, post, post, post, post, post, post, post, post];

    return Posts;
}

export default function Articles({ loaderData }: Route.ComponentProps) {
    return (
        <>
            <NavBar />
            <div className="w-full flex flex-col items-center gap-10 mt-10 ml-5">
                <h1 className="w-full text-[40px] font-medium">All Articles: </h1>
                {loaderData.map((item, index) => {
                    return (
                        <div key={item.id} className='flex items-center h-fit w-full gap-5'>
                            <p className='text-[36px] font-medium'>{index + 1}.</p>
                            <div className='relative w-[350px] h-[200px] rounded-[20px] overflow-hidden'>
                                <img className='w-full h-full object-cover' src={item.image}></img>
                            </div>
                            <div className='flex flex-col justify-around h-[200px] w-[70vw]'>
                                <p className='text-[30px] font-medium'>Lorem ipsum dolor sit amet consectetur. Pellentesque elementum pellentesque montes sed aliquam vel. Ipsum dolor sit amet consectetur</p>
                                <div className='flex items-center gap-2'>
                                    <img src={avatar}></img>
                                    <p className='text-[15px]'>Catylin Kiramman</p>
                                </div>
                                <div className='flex gap-10 text-[18px] font-medium'>
                                    <p>Likes {item.likes}</p>
                                    <p>Comment {item.comments}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
