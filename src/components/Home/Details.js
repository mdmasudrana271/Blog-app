import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();
  const { owner, publishDate, image, likes, text, tags } = data;
  console.log(data);

  return (
    <section className=" bg-white w-full p-6 rounded">
      <div className="container md:flex flex-col w-full rounded-md   text-gray-600">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src={owner.picture}
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <div>
                <h4 className="font-bold">
                  {owner.title}. <span>{owner.firstName}</span>{" "}
                  <span>{owner.lastName}</span>
                </h4>
                <p>is with #{tags[0]} #{tags[1]} #{tags[2]}</p>
              </div>
              <span className="text-xs dark:text-gray-400">{publishDate}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-full h-[160vh] bg-base-100">
        <figure>
          <img src={image} className="w-full " alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{text}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>

        <div>
          <button className="btn btn-tiny">
            <p className="flex justify-start gap-1 items-center">
              <FaThumbsUp className="text-blue-400 text-3xl"></FaThumbsUp>{" "}
              <span className="text-3xl">{likes}</span>
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Details;
