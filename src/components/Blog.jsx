export default function Blog({ title, tags, createdAt, link, image }) {
    function getFormattedDate() {
        const parsedDate = new Date(createdAt);

        // Function to get the suffix for the day (e.g., 'st', 'nd', 'rd', 'th')
        function getDaySuffix(day) {
            if (day >= 11 && day <= 13) {
                return "th";
            }
            switch (day % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        }

        // Format the date as "14th Jan, 2024"
        const formattedDate = `${parsedDate.getDate()}${getDaySuffix(
            parsedDate.getDate()
        )} ${parsedDate.toLocaleString("default", {
            month: "short",
        })}, ${parsedDate.getFullYear()}`;

        return formattedDate;
    }

    const publishedDate = getFormattedDate(createdAt);
    return (
        <>
            <div className="blog_left">
                <h3 className="blog_title">{title}</h3>
                <span className="blog_date">{publishedDate}</span>
                <div className="blog_tags">
                    {tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
                <div className="blog_read">
                    <a
                        href={link}
                        className="btn secondary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Read{" "}
                        <img src="/images/link_black.svg" alt="" className="icon" />
                    </a>
                </div>
            </div>
            <div className="blog_right">
                <img src={image} alt="" />
            </div>
        </>
    );
}