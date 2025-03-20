import { useEffect, useState } from "react";
import NotificationItem from "./NotificationItem";

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("/notifications.json")
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.map((notif, index) => ({
          ...notif,
          status: index < 3 ? false : true,
        }));
        setNotifications(updatedData);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (index) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notif, i) =>
        i === index ? { ...notif, status: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notif) => ({ ...notif, status: true }))
    );
  };

  return (
    <main className="bg-white rounded-lg shadow-md p-6 md:max-w-2xl md:mt-4">
      <div className="flex justify-between mb-4">
        <h1 className="font-extrabold text-very-dark-blue text-lg">
          Notifications
          <span className="bg-blue text-white px-2 rounded-sm ml-2">
            {notifications.filter((n) => !n.status).length}
          </span>
        </h1>
        <button
          onClick={markAllAsRead}
          className="text-dark-grayish-blue cursor-pointer text-sm hover:text-blue hover:font-medium"
        >
          Mark all as read
        </button>
      </div>

      <div>
        {notifications.length > 0 ? (
          notifications.map((item, index) => (
            <NotificationItem
              key={index}
              {...item}
              onClick={() => handleClick(index)}
            />
          ))
        ) : (
          <p>Loading Notifications...</p>
        )}
      </div>
    </main>
  );
};

export default NotificationPage;
