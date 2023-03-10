import {
  Select,
  Space,
  Button,
  message,
  Steps,
  theme,
  Calendar,
  Row,
  Col,
  Typography,
  Menu,
  Table,
  Input,
} from "antd";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTimer } from "../store/features/classroom";
const { TextArea } = Input;

const { Title } = Typography;
const options = [
  { label: "08:00-10:00", value: 1 },
  { label: "10:00-12:00", value: 2 },
  { label: "12:00-14:00", value: 3 },
  { label: "14:00-16:00", value: 4 },
  { label: "16:00-18:00", value: 5 },
  { label: "18:00-20:00", value: 6 },
  { label: "20:00-22:00", value: 7 },
  { label: " 全部时间段", value: 8 },
];
//日历组件
const CardCalendar = () => {
  const { token } = theme.useToken();
  const onPanelChange = (value) => {
    console.log(value.format("YYYY-MM-DD"));
  };
  //console.log(token);
  const wrapperStyle = {
    width: 330,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <div style={wrapperStyle}>
      <Calendar
        fullscreen={false}
        onChange={onPanelChange}
        //defaultValue={dayjs("2023-03-15", "YYYY-MM-DD")}
      />
    </div>
  );
};

const Reserve = () => {
  const [time, settime] = useState([]);
  const [date, setdate] = useState();
  const [selectId,setSelectId]=useState()
  const dispatch = useDispatch()
  let searchTime = [0, 0, 0, 0, 0, 0, 0];
  const changeTime = (value) => {
    //console.log(`selected ${value}`);
    settime(value);
  };
  // useSelect获取classroom数据并转换
  let room = useSelector((store) => {
    return store.classroom;
  });
  let newRoom1 = JSON.parse(JSON.stringify(room.one));
  //console.log(newRoom1)
  //转换时间段函数
  const selectTime = (time) => {
    time.map((item) => {
      switch (item) {
        case 1:
          searchTime[0] = 1;
          break;
        case 2:
          searchTime[1] = 1;
          break;
        case 3:
          searchTime[2] = 1;
          break;
        case 4:
          searchTime[3] = 1;
          break;
        case 5:
          searchTime[4] = 1;
          break;
        case 6:
          searchTime[5] = 1;
          break;
        case 7:
          searchTime[6] = 1;
          break;
      }
    });
    //console.log("转换后的searchtime为:", searchTime);
    return searchTime;
  };
  //比对搜索函数
  const search = (searchTime, classroomN) => {
    for (let i = 0; i < 7; i++) {
      if (searchTime[i] === 1) {
        //console.log("i=", i);
        classroomN = classroomN.map((item) => {
          //console.log(item);
          if (item && item.usedtime[i] === 0) {
            return item;
          }
        });
        //console.log("本次classroomN=", classroomN);
      }
    }
    //console.log("匹配成功的项为：", classroomN);
    return classroomN;
  };
  //搜索例子
  search([1, 1, 0, 0, 0, 0, 0], newRoom1);
  //预约替换函数
  const render1 = () => (
    <div>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Title level={2}>选择您想预约的日期与时间段</Title>
      </Row>
      <Row>
        <Col span={7}>
          <CardCalendar />
        </Col>
        <Col span={17} style={{ display: "flex" }}>
          <Select
            mode="multiple"
            // 清楚
            allowClear
            value={time}
            defaultOpen={true}
            style={{
              position: "relative",
              width: "100%",
            }}
            placeholder="请选择时段"
            onChange={changeTime}
            options={options}
          />
        </Col>
      </Row>
    </div>
  );
  const render2 = () => {
    const [dataSource, setDataSouce] = useState([]);
    //导航栏选项
    const items = [
      {
        label: "一号教学楼 One",
        key: "one",
      },
      {
        label: "二号教学楼 Two",
        key: "two",
      },

      {
        label: "三号教学楼 Three",
        key: "three",
      },
      {
        label: "四号教学楼 four",
        key: "four",
      },
      {
        label: "五号教学楼 five",
        key: "five",
      },

      {
        label: "六号教学楼 six",
        key: "six",
      },
    ];
    // 表格表头
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
        key: "people",
      },
      {
        title: "操作",
        key: "action",
        render: (_, record) => (
          <Button
            onClick={() => {
              setSelectId(record.id)
              console.log(record.id), next();
            }}
          >
            预约
          </Button>
        ),
      },
    ];
    const [current3, setCurrent3] = useState("one");
    useEffect(() => {
      let reRoom = [];
      search(selectTime(time), newRoom1).map((item) => {
        if (item != undefined) {
          reRoom.push(item);
        }
      });
      console.log("change", reRoom);
      setDataSouce(reRoom);
    }, [time]);
    //

    const onClick = (e) => {
      console.log("click ", e);
      setCurrent3(e.key);
    };
    return (
      <div>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Title level={2}>选择您想预约的教室</Title>
        </Row>
        <Row>
          <Col span={4}>
            <Menu
              onClick={onClick}
              selectedKeys={current3}
              mode="inline"
              style={{ width: "100%" }}
              items={items}
            />
          </Col>
          <Col span={20}>
            <Table
              size="small"
              columns={columns}
              dataSource={dataSource}
              //pagination={{ pageSize: 6, total: 36 ,onChange:(v)=>changePage(v),current:page}}
            />
          </Col>
        </Row>
      </div>
    );
  };
  const render3 = () => {
    return (
      <div>
        <Row style={{ display: "flex", justifyContent: "center" }}>
        <Title level={2}>选择您想预约的日期与时间段</Title>
      </Row>
      <TextArea
        showCount
        maxLength={100}
        style={{ height: 120, marginBottom: 24 }}
        onChange={()=>{}}
        placeholder="can resize"
      />
      </div>
      
    );
  };
  const steps = [
    {
      title: "First",
      content: render1(),
    },
    {
      title: "Second",
      content: render2(),
    },
    {
      title: "Last",
      content:render3(),
    },
  ];
  //
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    height: "400px",
    lineHeight: "260px",
    textAlign: "center",
    padding: "10px",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => {
              let select=selectTime(time)
              let date=newRoom1
             date.map((item)=>{
                if(item.id===selectId){
                  for(let i=0;i<7;i++){
                    if(select[i]===1){
                      item.usedtime[i]=1
                    }
                  }
                }
              })
              console.log('searchtime',select,date)
              dispatch(changeTimer({value:date}))
              
              message.success("Processing complete!")}}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default Reserve;
