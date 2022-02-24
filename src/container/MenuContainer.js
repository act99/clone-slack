import React from "react";
import Directlist from "../component/MenuContainer/DirectList";
import MenuHeader from "../component/MenuContainer/MenuHeader";
import { MenuScroll, WorkspaceName } from "../shared/style";

const MenuContainer = (props) => {
  return (
    <div>
      <WorkspaceName>
        <MenuHeader />
      </WorkspaceName>
      <MenuScroll>
        <Directlist />
      </MenuScroll>
    </div>
  );
};

export default MenuContainer;
