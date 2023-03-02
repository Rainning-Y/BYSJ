import { Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const items = [
    {
        label: "Navigation Three - Submenu",
        key: "SubMenu",
    
        children: [
          {
            type: "group",
            label: "教学楼",
            children: [
              {
                label: "一号教学楼",
                key: "buildOne",
              },
              {
                label: "二号教学楼",
                key: "setting:2",
              },
              {
                label: "三号教学楼",
                key: "setting:3",
              },
              {
                label: "四号教学楼",
                key: "setting:4",
              },
              {
                label: "五号教学楼",
                key: "setting:5",
              },
              {
                label: "六号教学楼",
                key: "setting:6",
              },
            ],
          },
        ],
      },
  {
    label: "预约教室",
    key: "reservation",
  },
  {
    label: "Navigation Two",
    key: "app",
  },
  
];
const homeMenu = () => {
  let navigate = useNavigate();
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(`/${e.key}`)
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="inline"
      items={items}
    />
  );
};
export default homeMenu;
