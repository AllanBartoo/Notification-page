const NotificationItem = ({
  user,
  action,
  post,
  group,
  time,
  img,
  status,
  onClick,
}) => {
  return (
    <article
      onClick={onClick}
      className={`flex gap-4 mb-2 p-4 rounded-md cursor-pointer ${
        status ? "bg-white" : "bg-very-light-grayish-blue"
      }`}
    >
      <img src={img} alt={user} className="w-10 h-10 rounded-full" />

      <div className="flex-1">
        <div className="flex items-start gap-2 justify-between text-dark-grayish-blue">
          <span className="text-base">
            <span className="font-extrabold text-very-dark-blue mr-1">
              {user}
            </span>
            {action}
            {post && <span className="font-extrabold hover ml-1">{post}</span>}
            {group && (
              <span className="font-extrabold text-dark-blue hover ml-1">
                {group}
              </span>
            )}

            {!status && (
              <span className="w-2 h-2 bg-red-500 rounded-full inline-block ml-1"></span>
            )}
          </span>
        </div>

        <span className="text-grayish-blue text-sm block">{time}</span>
      </div>
    </article>
  );
};

export default NotificationItem;
