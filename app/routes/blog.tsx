import testImage from "../components/assets/hero-primary.png";
import arrowBack from "../components/assets/arrow_back.png"
import type { Route } from "./+types/blog";
import type { MouseEventHandler } from "react";
import Credits from "~/components/Credits";

export async function loader({ params }: Route.LoaderArgs) {
  //{ params.blogId: string }
  return {
    id: params.blogId,
    title: "Partition Algorithm | Basics of Quick Sort — Pivoting!",
    smallTitle: "Partition Problem. Well, that’s a very common problem that may be even asked at a lot of tech interviews — especially among Software EngineersKnowing how to solve this problem (by writing our “Coolest Partition Algorithm”) — will take us a step closer to solving much more complicated problems by using more complicated algorithms (for example, the famous QuickSort Algorithm, right?)",
    image: testImage,
    content: "The partitioning algorithm is a fundamental concept in computer science, particularly in the context of sorting algorithms like Quick Sort. The primary goal of the partitioning algorithm is to rearrange the elements of an array or list such that elements less than a chosen pivot element are placed on its left, and elements greater than the pivot are placed on its right. This process effectively divides the array into two sub-arrays, which can then be recursively sorted to achieve the overall sorted order. The efficiency of the partitioning algorithm is crucial for the performance of Quick Sort, as it directly impacts the number of comparisons and swaps required. A well-implemented partitioning algorithm ensures that the pivot element is positioned as close to the middle of the array as possible, leading to balanced sub-arrays and optimal sorting performance. Understanding and mastering the partitioning algorithm is essential for software engineers, as it forms the basis for more advanced sorting and searching techniques used in various applications, from database indexing to large-scale data processing.",
  };
}

export default function Blog({ loaderData }: Route.ComponentProps) {

  const backBtnHandler: MouseEventHandler = () => {
    history.back();
  }

  return (
    <div className="reltaive flex flex-col items-center justify-center w-full]">
      <button onClick={backBtnHandler} className="absolute left-5 top-5 rounded-full hover:bg-gray-200 p-2">
        <img src={arrowBack} className="w-[50px] h-[50px]"></img>
      </button>
      <div className="font-sans w-[60vw] mt-10">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-[40px] font-medium my-5">{loaderData.title}</h1>
          <h3 className="text-[20px] font-medium text-gray-500 mb-10">{loaderData.smallTitle}</h3>
          <img src={loaderData.image} alt={loaderData.title} className="rounded-[50px]" />
        </div>
        <div>
          <p className="text-[20px] mt-20">{loaderData.content}</p>
        </div>
      </div>
      <div>
        <div className='flex my-10 gap-10 text-[18px] font-medium'>
          <p>Likes 1.2k</p>
          <p>Comment 876</p>
        </div>
        <div className="w-[60vw]">
          <h2 className="text-[30px] font-medium my-5">Comments</h2>
          <div className="mt-5">
            <textarea
              className="w-full p-2 border rounded-lg"
              rows={2}
              placeholder="Add a comment..."
            ></textarea>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Submit
            </button>
          </div>
          <div className="flex flex-col gap-4 my-5">
            <div className="flex flex-col p-4 border rounded-lg">
              <p className="font-medium">User1</p>
              <p>This is a very informative article. Thanks for sharing!</p>
            </div>
            <div className="flex flex-col p-4 border rounded-lg">
              <p className="font-medium">User2</p>
              <p>Great explanation of the partitioning algorithm.</p>
            </div>
          </div>
        </div>
      </div>
      <Credits />
    </div>
  );
}
