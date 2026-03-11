import React from "react";
import "../style/feed.scss";
import { usePost } from "../hooks/usePost";

const Post = ({ user, post, loading, handleLike, handleunLike, handleFollow, handleunfollowUser, currentUser }) => {

  return (
    <div className="post">
      <div className="user">
        <div className="user-left">
          <div className="img-wrapper">
            <img src={user.profileImage} alt="" />
          </div>
          <p>{user.username}</p>
        </div>

        {currentUser?.username !== user.username && (
          <button
            className={post.followStatus ? "normal" : "follow"}
            onClick={() => {
              if (post.followStatus === "accepted") {
                handleunfollowUser(post.userId.username);
              } else if (post.followStatus === "pending") {
                return;
              } else {
                handleFollow(post.userId.username);
              }
            }}
          >
            {post.followStatus === "accepted"
              ? "Unfollow"
              : post.followStatus === "pending"
              ? "Requested"
              : "Follow"}
          </button>
        )}
      </div>

      <img src={post.imgUrl} alt="" />

      <div className="icons">
        <div className="left">
          <button>
            <svg
              className={post.isLiked ? "like" : ""}
              onClick={function () {
                post.isLiked ? handleunLike(post._id) : handleLike(post._id);
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
            </svg>
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"></path>
            </svg>
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.4999 2C20.0945 1.99965 20.6988 2.15061 21.2499 2.46875C22.924 3.43525 23.4977 5.57598 22.5312 7.25L15.0312 20.2402C14.0647 21.9142 11.924 22.488 10.2499 21.5215C9.41368 21.0386 8.85171 20.2606 8.62005 19.3975L6.85345 12.8037L2.02533 7.97461C0.65837 6.60765 0.658729 4.39208 2.02533 3.02539C2.65755 2.39311 3.53385 2.00011 4.49994 2H19.4999ZM4.49994 4C4.08555 4.00011 3.71182 4.167 3.43939 4.43945C2.85354 5.0254 2.85378 5.97494 3.43939 6.56055L7.914 11.0352L14.8906 7.00684C15.3688 6.7308 15.9806 6.89487 16.2568 7.37305C16.5327 7.85124 16.3687 8.46312 15.8906 8.73926L8.914 12.7676L10.5517 18.8789C10.6515 19.2509 10.8913 19.5819 11.2499 19.7891C11.9673 20.2032 12.8845 19.9575 13.2988 19.2402L20.7988 6.25C21.213 5.53256 20.9674 4.61539 20.2499 4.20117C20.0128 4.06427 19.7555 3.99982 19.5009 4H4.49994Z"></path>
            </svg>
          </button>
        </div>

        <div className="right">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="bottom">
        <p>{post.isLiked ? "you Liked this post" : ""}</p>
        <p className="caption">{post.caption}</p>
      </div>
    </div>
  );
};

export default Post;