export default function Socials() {
    return (
        <section className="socials">
            <div className="container">
                <h2>
                    <span className="highlight2">
                        Have a project in mind ?{" "}
                    </span>{" "}
                    Let's talk.
                </h2>
                {/* <img src="/icons/t1.svg" className="test" alt="" /> */}
                <img src="/icons/t2.svg" className="svg_float" alt="" />
                <img src="/icons/t3.svg" className="svg_float" alt="" />
                <div className="social_container">
                    <div>
                        <img
                            className="social_icon"
                            src="/icons/linkedin.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="social_icon"
                            src="/icons/gmail.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="social_icon"
                            src="/icons/github.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}