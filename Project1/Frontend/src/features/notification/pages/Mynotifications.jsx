import React, { useEffect } from "react";
import { useNotifications } from "../hooks/useNotifications";
import '../styles/notification.scss'
const Mynotifications = () => {
  const { fetchPendingRequests, loading, pendingRequests, handleAccept,handleReject } = useNotifications();

  useEffect(() => {
    fetchPendingRequests();
  }, []);

  if (loading) {
    return <h2>Loading notifications...</h2>;
  }

  return (
    <div className="notifications-page">
      <h2>Follow Requests</h2>

      {pendingRequests.length === 0 ? (
        <p>No pending follow requests</p>
      ) : (
        <div className="requests">
          {pendingRequests.map((req, idx) => {
            return (
              <div className="request" key={idx}>
                <div className="left">
                  <img
                    src="https://ik.imagekit.io/xboj1v5ab/instagram_default_user.png"
                    alt=""
                  />

                  <p className="username">
                    <strong>{req.follower}</strong> requested to follow you
                  </p>
                </div>

                <div className="right">
                  <button className="accept"
                  onClick={function(){
                    handleAccept(req.follower);
                  }}
                  >Accept</button>
                  <button className="reject"
                  onClick={function(){
                    handleReject(req.follower)
                  }}
                  >Reject</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Mynotifications;