import { Flex } from "antd";
import BottomAppBar from "./component/BottomAppBar";
import TopAppBar from "./component/TopAppBar";
import Container from "@/base/components/BaseUI/Container";

import "./style.css";
const AppBar = () => {
  return (
    <Flex vertical className="app-bar">
      <Container>
        <TopAppBar />
        <BottomAppBar />
      </Container>
    </Flex>
  );
};

export default AppBar;
