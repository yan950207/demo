import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const RangePicker = DatePicker.RangePicker;


function disabledDate(current) {
    const dateFormat = 'YYYY/MM/DD';
    var d=new Date();
    d.setDate(d.getDate()-1);
    return current && current.valueOf() < Date.now() || current && current.valueOf() > moment('2017/09/01', dateFormat);
}

function App() {
  return (
    <div style={{ margin: 100 }}>
        <DatePicker
            format="YYYY-MM-DD"
            disabledDate={disabledDate}
            showTime
            />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


