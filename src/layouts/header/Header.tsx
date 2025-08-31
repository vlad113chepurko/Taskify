import './_Header.scss';
import components from "@components/components";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <motion.header
    animate={{ x: 0, opacity: 1 }}
    initial={{ x: -25, opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="header">
      <components.Navigation />
    </motion.header>
  );
};

export default Header;
