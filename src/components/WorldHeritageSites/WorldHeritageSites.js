import Data from "../DB/Data";
import './worldHeritageSites.css';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gridAnimation, cardAnimation, h3Animation } from "../Animations/Animations";

const WorldHeritageSites = () => {
    return (
        <div className="sitesContainer">
          <motion.h3 variants={h3Animation} animate="show" exit="hide">
            Choose site to know more
          </motion.h3>
          <motion.div
            className="sites"
            variants={gridAnimation}
            animate="show"
            exit="hide"
          >
            {Data.map((item) => {
              return (
                <Link to={`/site/${item.id}`} key={item.id}>
                  <motion.div className="card" variants={cardAnimation}>
                    <img src={`../images/products/${item.image}`} alt="images" />
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      );
};

export default WorldHeritageSites;