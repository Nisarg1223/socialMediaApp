import React from "react";
import '../style/stories.scss'

function Stories() {

  const stories = [
    { id: 1, username: "your_story", img: "https://i.pravatar.cc/150?img=1" },
    { id: 2, username: "john", img: "https://i.pravatar.cc/150?img=2" },
    { id: 3, username: "emma", img: "https://i.pravatar.cc/150?img=3" },
    { id: 4, username: "alex", img: "https://i.pravatar.cc/150?img=4" },
    { id: 5, username: "lisa", img: "https://i.pravatar.cc/150?img=5" },
    { id: 6, username: "mike", img: "https://i.pravatar.cc/150?img=6" },
    { id: 7, username: "sara", img: "https://i.pravatar.cc/150?img=7" }
  ];

  return (
    <div className="stories">
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <div className="story-img">
            <img src={story.img} alt="" />
          </div>
          <p>{story.username}</p>
        </div>
      ))}
    </div>
  );
}

export default Stories;