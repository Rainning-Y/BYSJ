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
const tag = [
  "08:00-10:00",
  "10:00-12:00",
  "12:00-14:00",
  "14:00-16:00",
  "16:00-18:00",
  "18:00-20:00",
  "20:00-22:00",
];

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
  const [page, setPage] = useState(1);
  //从store拿数据并转换
  let room = useSelector((store) => {
    return store.classroom;
  });
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
  }, [page]);

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
            <Title>一号教学楼预约总览</Title>
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
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
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
