import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import tesla from "../images/tesla-models.jpg";
import tesla3 from "../images/tesla-model-3.jpg";
import teslaY from "../images/model-y.jpg";
import teslaS from "../images/model-s.jpg";

const IndexPage = () => (
    <Layout isHome={true}>
        <SEO title="Home Page" />

        <div className="columns">
            <img src={tesla} alt="hero image" />
        </div>
        <h2 className="title is-2">Electric Cars</h2>
        <div className="columns">
            <div className="column">
                <h3 className="title is-3">Tesla Model 3</h3>
                <img src={tesla3} />
                <p>
                    Model 3 comes with the option of dual motor all-wheel drive,
                    20” Performance Wheels and Brakes and lowered suspension for
                    total control, in all weather conditions. And a carbon fiber
                    spoiler improves stability at high speeds, all allowing
                    Model 3 to accelerate from 0-60 mph in as little as 3.2
                    seconds.
                </p>
                {/* If you're linking interally, use `Link` instead of `a` */}
                <Link to="/tesla/model-3" className="button">
                    Read More
                </Link>
            </div>

            <div className="column">
                <h3 className="title is-3">Tesla Model Y</h3>
                <img src={teslaY} />
                <p>
                    Model Y provides maximum versatility—able to carry 7
                    passengers and their cargo. Each second row seat folds flat
                    independently, creating flexible storage for skis,
                    furniture, luggage and more. The liftgate opens to a low
                    trunk floor that makes loading and unloading easy and quick.
                </p>
                <Link to="/" className="button">
                    Read More
                </Link>
            </div>

            <div className="column">
                <h3 className="title is-3">Tesla Model S</h3>
                <img src={teslaS} />
                <p>
                    Model S is built with best in class storage, seating for up
                    to five adults and an expansive 17-inch touchscreen.
                    Advanced noise engineering creates sound dynamics comparable
                    to a recording studio, while the standard Glass Roof
                    provides a spacious interior experience for every passenger.
                </p>
                <Link to="/" className="button">
                    Read More
                </Link>
            </div>
        </div>
    </Layout>
);

export default IndexPage;
