import React, { useState } from "react";
import arrowBack from "../../components/assets/arrow_back.png";

const BlogInputPage = () => {
    const [blogData, setBlogData] = useState({
        title: "",
        subtitle: "",
        content: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Blog Data Submitted: ", blogData);
        alert("Blog submitted successfully!");
        setBlogData({
            title: "",
            subtitle: "",
            content: "",
        });
    };

    return (
        <div className="relative font-sans w-full mx-auto mt-10 flex items-center justify-center">
            <button onClick={() => history.back()} className="absolute left-5 top-0 rounded-full hover:bg-gray-200 p-2">
                <img src={arrowBack} className="w-[50px] h-[50px]"></img>
            </button>
            <div className="w-[60vw]">
                <h1 className="text-[50px] tracking-tighter font-medium text-left mb-8">Create a New Blog</h1>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-10">
                    <div className="w-full flex flex-col gap-5">
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={blogData.title}
                            onChange={handleChange}
                            placeholder="Title"
                            className="w-full h-fit text-wrap text-[40px] font-medium px-4 py-2 border border-gray-200 rounded-[10px] focus:outline-none focus:ring-1 focus:ring-blue-300"
                            required
                        />

                        <textarea
                            type="text"
                            id="subtitle"
                            name="subtitle"
                            value={blogData.subtitle}
                            onChange={handleChange}
                            placeholder="Subtitle"
                            className="w-full px-4 py-2 border border-gray-200 text-[20px] font-medium text-gray-500 rounded-[10px] focus:outline-none focus:ring-1 focus:ring-blue-300"
                            required
                        />

                        <textarea
                            id="content"
                            name="content"
                            value={blogData.content}
                            onChange={handleChange}
                            placeholder="Content"
                            rows="8"
                            className="w-full min-h-fit px-4 py-2 border border-gray-200 text-[20px] font-normal text-black rounded-[10px] focus:outline-none focus:ring-1 focus:ring-blue-300"
                            required
                        />
                    </div>



                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-[300px] bg-blue-600 text-white text-[20px] py-5 rounded-[20px] hover:bg-blue-700 transition"
                    >
                        Submit Blog
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BlogInputPage;
