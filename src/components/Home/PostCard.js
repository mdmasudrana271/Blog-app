import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const { image, likes, owner, publishDate, text, id } = post;
  console.log(post);
  return (
    <section className=" bg-white p-6 rounded">
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
              <h4 className="font-bold">
                {owner.title}. <span>{owner.firstName}</span>{" "}
                <span>{owner.lastName}</span>
              </h4>
              <span className="text-xs dark:text-gray-400">{publishDate}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-between items-center">
        <img src={image} className="w-full sm:w-60" alt="post img" />
        <div className="card-body">
          <h2 className="text-md font-semibold">{text}</h2>
          <p>{publishDate}</p>
          <p className="flex justify-start gap-1 items-center">
            <FaThumbsUp className="text-blue-400"></FaThumbsUp>{" "}
            <span>{likes}</span>
          </p>
          <div className="card-actions justify-start">
            <button className="btn btn-xs">
              <Link to={`/posts/${id}`}>Details</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostCard;
