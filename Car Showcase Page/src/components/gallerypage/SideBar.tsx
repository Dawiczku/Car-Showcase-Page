import { slide as Menu } from "react-burger-menu";
import { burgerMenuStyles } from "utils/burgerMenuStyles";

export const SideBar = () => {
  return (
    <aside className="side-bar__wrapper">
      <div className="side-bar__logo">
        <img
          src="src/assets/icons/JapanRacing.svg"
          style={{ height: "64px", width: "64px" }}
        />
      </div>
      <div className="side-bar__menu">
        <Menu isOpen={false} styles={burgerMenuStyles}>
          <div>
            <p>Nissan SX180</p>
          </div>
        </Menu>
      </div>
      <div className="side-bar__links">
        <a>
          <img
            src="src/assets/icons/github.svg"
            style={{ height: "48px", width: "48px" }}
          />
        </a>
      </div>
    </aside>
  );
};
