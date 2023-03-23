import {
  Space,
  Table,
  Tag,
  Card,
  Col,
  Row,
  Statistic,
  Progress,
  Typography,
} from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const tag = [
  "08:00-10:00",
  "10:00-12:00",
  "12:00-14:00",
  "14:00-16:00",
  "16:00-18:00",
  "18:00-20:00",
  "20:00-22:00",
];
const m = new Map([
  ["buildOne", "一"],
  ["buildTwo", "二"],
  ["buildThree", "三"],
  ["buildFour", "四"],
  ["buildFive", "五"],
  ["buildSix", "六"],
]);
//表头
const columns = [
  {
    title: "教室名",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "容量",
    dataIndex: "people",
    key: "age",
  },
  {
    title: "被预约时间",
    dataIndex: "percent",
    width: 240,
    key: "address",
    render: (v) => (
      <Progress
        percent={v}
        strokeColor={{ "100%": "#87d068", "0%": "#108ee9" }}
      />
    ),
  },
  {
    title: "可预约时段",
    key: "usedtime",
    width: 400,

    dataIndex: "usedtime",
    render: (v) => {
      let count = -1;
      return (
        <Row wrap={true} style={{ width: "380px" }}>
          {v.map((item) => {
            count++;
            if (item === 0) {
              return (
                // <Col span={6}>
                <Tag color="geekblue" key={count}>
                  {tag[count]}
                </Tag>
                // </Col>
              );
            }
          })}
        </Row>
      );
    },
  },
  {
    title: "操作",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
//数据

const { Title } = Typography;
const Preview = () => {
  // 拿到parms中的建筑编号数据
  let params = useParams();
  console.log("parms:", params);
  const [page, setPage] = useState(1);
  //从store拿数据并转换

  let room = useSelector((store) => {
    switch (params.build) {
      case "buildOne":
        //console.log(store.classroom.buildOne);
        return store.classroom.buildOne;
      case "buildTwo":
        return store.classroom.buildTwo;
      case "buildThree":
        return store.classroom.buildThree;
      case "buildFour":
        return store.classroom.buildFour;
      case "buildFive":
        return store.classroom.buildFive;
      case "buildSix":
        return store.classroom.buildSix;
    }
  });
  // 初始化为第一页
  const [newRoom1, setnewRoom1] = useState(
    JSON.parse(JSON.stringify(room.one))
  );
  useEffect(() => {
    console.log(page);
    switch (page) {
      case 1:
        setnewRoom1(JSON.parse(JSON.stringify(room.one)));
        break;
      case 2:
        setnewRoom1(JSON.parse(JSON.stringify(room.two)));
        break;
      case 3:
        setnewRoom1(JSON.parse(JSON.stringify(room.three)));
        break;
      case 4:
        setnewRoom1(JSON.parse(JSON.stringify(room.four)));
        break;
      case 5:
        setnewRoom1(JSON.parse(JSON.stringify(room.five)));
        break;
      case 6:
        setnewRoom1(JSON.parse(JSON.stringify(room.six)));
        break;
    }
  }, [page, params]);

  newRoom1.map((item) => {
    let count = 0;
    //console.log(item)
    for (let i = 0; i < 7; i++) {
      if (item.usedtime[i] === 1) {
        count++;
      }
    }
    item.percent = count * 14;
    //console.log(item);
    return 0;
  });
  //翻页函数
  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div style={{ padding: "10px" }}>
      <Row>
        <Col span={16}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Title>{m.get(params.build)}号教学楼预约总览</Title>
          </div>
          <Row gutter={10}>
            <Col span={8}>
              <Card bordered={false} style={{ height: "118px" }}>
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{
                    color: "#3f8600",
                  }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false} style={{ height: "118px" }}>
                <Statistic
                  title="Idle"
                  value={9.3}
                  precision={2}
                  valueStyle={{
                    color: "#cf1322",
                  }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered={false} style={{ height: "118px" }}>
                <Progress type="circle" percent={75} width={80} />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Card
            title="Default size card"
            extra={<a href="#">More</a>}
            style={{ height: "210px", marginLeft: "10px" }}
          >
            <p>这里是</p>
            <p>Card content</p>
            <p>在右边</p>
          </Card>
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={newRoom1}
        pagination={{
          pageSize: 6,
          total: 36,
          onChange: (v) => changePage(v),
          current: page,
        }}
      />
      ;
    </div>
  );
};
export default Preview;
