import { useProfile } from "../hooks/useProfile";
import '../style/profile.scss'

function Profile() {

  const { profile, posts, stats, loading } = useProfile();

  if (loading || !profile || !stats) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="pro-profile">

      <div className="pro-profile__header">

        <div className="pro-profile__image">
          <img src={profile.profileImage} alt="profile" />
        </div>

        <div className="pro-profile__info">

          <div className="pro-profile__username">
            <h2>{profile.username}</h2>
            <button className="pro-edit-btn">Edit Profile</button>
          </div>

          <div className="pro-profile__stats">
            <span><b>{stats.postCount}</b> posts</span>
            <span><b>{stats.countFollowers}</b> followers</span>
            <span><b>{stats.countFollowing}</b> following</span>
          </div>

          <div className="pro-profile__bio">
            <p>{profile.bio}</p>
          </div>

        </div>

      </div>

      <div className="pro-profile__posts">

        {posts.map((post) => (
          <div key={post._id} className="pro-post">
            <img src={post.imgUrl} alt="post" />
          </div>
        ))}

      </div>

    </div>
  );
}

export default Profile;