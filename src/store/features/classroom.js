import { createSlice } from '@reduxjs/toolkit';


const mock=[
  {name:'301教室',key:1,id:301,people:60,usedtime:[1,0,1,0,0,1,1]},
  {name:'302教室',key:2,id:302,people:60,usedtime:[1,0,1,0,0,1,1]},
  {name:'303教室',key:3,id:303,people:60,usedtime:[1,0,1,0,0,1,1]},
  {name:'304教室',key:4,id:304,people:60,usedtime:[1,0,1,0,0,1,1]},
  {name:'305教室',key:5,id:305,people:60,usedtime:[1,0,1,0,0,1,1]},
  {name:'306教室',key:6,id:306,people:60,usedtime:[1,0,1,0,0,1,1]}, 
]

export const today = createSlice({
    name: 'classroom',
    initialState:
    {one:[
      {name:'101教室',key:1,id:101,people:60,usedtime:[0,0,0,0,0,0,1]},
      {name:'102教室',key:2,id:102,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'103教室',key:3,id:103,people:60,usedtime:[1,1,1,0,0,1,1]},
      {name:'104教室',key:4,id:104,people:60,usedtime:[0,0,1,0,0,1,1]},
      {name:'105教室',key:5,id:105,people:60,usedtime:[0,0,1,1,1,1,1]},
      {name:'106教室',key:6,id:106,people:60,usedtime:[1,0,1,0,0,1,0]}, 
    ],
    two:[
      {name:'201教室',key:1,id:201,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'202教室',key:2,id:202,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'203教室',key:3,id:203,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'204教室',key:4,id:204,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'205教室',key:5,id:205,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'206教室',key:6,id:206,people:60,usedtime:[1,0,1,0,0,1,1]}, 
    ],
    three:[
      {name:'301教室',key:1,id:301,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'302教室',key:2,id:302,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'303教室',key:3,id:303,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'304教室',key:4,id:304,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'305教室',key:5,id:305,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'306教室',key:6,id:306,people:60,usedtime:[1,0,1,0,0,1,1]}, 
    ],
    four:[
      {name:'401教室',key:1,id:401,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'402教室',key:2,id:402,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'403教室',key:3,id:403,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'404教室',key:4,id:404,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'405教室',key:5,id:405,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'406教室',key:6,id:406,people:60,usedtime:[1,0,1,0,0,1,1]}, 
    ],
    five:[
      {name:'501教室',key:1,id:501,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'502教室',key:2,id:502,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'503教室',key:3,id:503,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'504教室',key:4,id:504,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'505教室',key:5,id:505,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'506教室',key:6,id:506,people:60,usedtime:[1,0,1,0,0,1,1]}, 
    ],
    six:[
      {name:'601教室',key:1,id:601,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'602教室',key:2,id:602,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'603教室',key:3,id:603,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'604教室',key:4,id:604,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'605教室',key:5,id:605,people:60,usedtime:[1,0,1,0,0,1,1]},
      {name:'606教室',key:6,id:606,people:60,usedtime:[1,0,1,0,0,1,1]}, 
    ],
    value:1
  
  },
     //[1,2,3,4,5]
  
    // 定义 reducers 并生成关联的操作
    reducers: {
      // 定义一个方法
      changeTimer: (state,{payload}) => {
        console.log(payload.value)
        const num=payload.num-1
        state.one=payload.value
        console.log('state',state.value)
      //  state.map((item)=>{if(item.id===payload.id){
      //   payload.value.map((timer)=>item.usedtime[timer]=true)
      //  }})
      },
      // 定义一个减的方法
      decrement: (state) => {
        state.value -= 1;
      },
    },
  });

  export const { changeTimer } = today.actions;
  export default today.reducer;
