import React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout/layout";
import SEO from "../../components/seo/seo";
import teslaModel3 from "../../images/tesla-model-3.jpg";

const TeslaModel3Page = () => (
    <Layout>
        <SEO title="Tesla Model 3" />
        <h1>Tesla Model 3</h1>
        <div class="columns">
            <div class="column">
                <img src={teslaModel3} alt="model 3" />
            </div>
        </div>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            fugit optio consectetur tempora, sequi dolore debitis consequatur
            quaerat possimus ab! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Autem earum commodi at nesciunt tempore itaque
            voluptatibus quod doloribus quo, ullam corporis dicta natus harum
            corrupti saepe, placeat nemo cum veniam?
        </p>
        <p>
            <Link to="/" className="button is-link is-large">
                Home Page
            </Link>
        </p>
    </Layout>
);

export default TeslaModel3Page;
