import { Menu } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const homeMenu = () => {
  let user = useSelector((store) => store.user);
  const itemsaa = () => {
    if (user.isAdmain) {
      return [
        {
          label: "可预约教学楼列表",
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
                  key: "buildTwo",
                },
                {
                  label: "三号教学楼",
                  key: "buildThree",
                },
                {
                  label: "四号教学楼",
                  key: "buildFour",
                },
                {
                  label: "五号教学楼",
                  key: "buildFive",
                },
                {
                  label: "六号教学楼",
                  key: "buildSix",
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
          label: "我的预约",
          key: "myroom",
        },
      ];
    } else {
      return [
        {
          label: "可预约教学楼列表",
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
                  key: "buildTwo",
                },
                {
                  label: "三号教学楼",
                  key: "buildThree",
                },
                {
                  label: "四号教学楼",
                  key: "buildFour",
                },
                {
                  label: "五号教学楼",
                  key: "buildFive",
                },
                {
                  label: "六号教学楼",
                  key: "buildSix",
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
          label: "我的预约",
          key: "myroom",
        },
        {
          label: "预约管理",
          key: "manage",
        },
      ];
    }
  };
  const [items, setitems] = useState([
    {
      label: "可预约教学楼列表",
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
              key: "buildTwo",
            },
            {
              label: "三号教学楼",
              key: "buildThree",
            },
            {
              label: "四号教学楼",
              key: "buildFour",
            },
            {
              label: "五号教学楼",
              key: "buildFive",
            },
            {
              label: "六号教学楼",
              key: "buildSix",
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
      label: "我的预约",
      key: "myroom",
    },
  ]);
  useEffect(() => {
    console.log("管理员：",user.isAdmain)
    if (user.isAdmain===false) {
      setitems([
        {
          label: "可预约教学楼列表",
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
                  key: "buildTwo",
                },
                {
                  label: "三号教学楼",
                  key: "buildThree",
                },
                {
                  label: "四号教学楼",
                  key: "buildFour",
                },
                {
                  label: "五号教学楼",
                  key: "buildFive",
                },
                {
                  label: "六号教学楼",
                  key: "buildSix",
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
          label: "我的预约",
          key: "myroom",
        },
      ]);
    } else {
      setitems([
        {
          label: "可预约列表",
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
                  key: "buildTwo",
                },
                {
                  label: "三号教学楼",
                  key: "buildThree",
                },
                {
                  label: "四号教学楼",
                  key: "buildFour",
                },
                {
                  label: "五号教学楼",
                  key: "buildFive",
                },
                {
                  label: "六号教学楼",
                  key: "buildSix",
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
          label: "我的预约",
          key: "myroom",
        },
        {
          label: "预约管理",
          key: "manage",
        },
      ]);
    }
  }, [user.isAdmain]);
  let navigate = useNavigate();
  const [current, setCurrent] = useState("buildOne");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    if (e.key === "reservation") {
      navigate(`/index/reservation`);
    } else if (e.key === "myroom") {
      navigate(`/index/myroom`);
    } else if (e.key === "manage") {
      navigate(`/index/manage`);
    } else {
      navigate(`/index/preview/${e.key}`);
    }
  };
  return (
    <Menu
      onClick={onClick}
      defaultOpenKeys={["SubMenu"]}
      selectedKeys={[current]}
      mode="inline"
      items={items}
    />
  );
};
export default homeMenu;