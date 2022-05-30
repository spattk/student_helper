import React from "react";
import { Input, Menu, Segment } from "semantic-ui-react";

const MenuHeader = (props) => {
  // const [showLogout, setShowLogout] = useState(true)
  // console.log("token " + props.token);
  // if(props.token != undefined && props.token == 'approved'){
  //   setShowLogout(true);
  // }

  const handleLogout = () => {
    console.log("Logging out");
    let token = "not approved";
    // setShowLogout(false);
    props.setToken(token);
  };

  return (
    <div>
      <Segment style={{ backgroundColor: "#193D62" }}>
        <Menu style={{ backgroundColor: "#193D62", border: "1px solid white" }}>
          <Menu.Item
            name="student helper"
            style={{ color: "white", fontWeight: "bold" }}
          />
          <Menu.Item
            name="home"
            style={{ color: "white", fontWeight: "bold" }}
          />

          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            {props.token == "approved" ? (
              <Menu.Item
                name="session logout"
                onClick={handleLogout}
                style={{ color: "white", fontWeight: "bold" }}
              />
            ) : (
              <div></div>
            )}
          </Menu.Menu>
        </Menu>
      </Segment>
    </div>
  );
};

export default MenuHeader;
