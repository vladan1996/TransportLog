 import React from 'react';
 import {Week, TimelineViews, TimelineMonth, Day, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject } from '@syncfusion/ej2-react-schedule';
 import useData from './useData';
 import './Home.css'
 import { Editing } from 'devextreme-react/data-grid';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';

 const Home = () => {

   const {data} = useData();


 function editorTemplate(props) {
            return (props !== undefined && Object.keys(props).length > 0 ? <table className="custom-event-editor" style={{ width: '100%', padding: '5' }}><tbody>
          <tr><td className="e-textlabel">Summary</td><td colSpan={4}>
            <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }}/>
          </td></tr>
          <tr><td className="e-textlabel">Owner</td><td colSpan={4}>
            {/* <MultiSelectComponent className="e-field" placeholder='Choose owner' data-name="OwnerId" dataSource={data} fields={this.fields} value={props.OwnerId}/> */}
          </td></tr>
          <tr><td className="e-textlabel">From</td><td colSpan={4}>
            {/* <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent> */}
          </td></tr>
          <tr><td className="e-textlabel">To</td><td colSpan={4}>
            {/* <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent> */}
          </td></tr>
          <tr><td className="e-textlabel">Reason</td><td colSpan={4}>
            <textarea id="Description" className="e-field e-input" name="Description" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
          </td></tr></tbody></table> : <div></div>);
        }



  return(
    <ScheduleComponent width='100%' height='550px' currentView='Week' selectedDate={new Date(2022, 11, 1)}  group={{ resources: ['Owners'] }} editorTemplate={editorTemplate.bind(this)}>
      <ViewsDirective>
          <ViewDirective option='Day'/>
          <ViewDirective option='Week'/>
      </ViewsDirective>
      <Editing allowAdding={true}/>
      <ResourcesDirective>
          <ResourceDirective field='OwnerId' title='Owner' name='Owners' allowMultiple={true} dataSource={data} textField='DockName' idField='Id'>
          </ResourceDirective>
      </ResourcesDirective>
      <Inject services={[Day, Week, TimelineViews, TimelineMonth]}/>
    </ScheduleComponent>
  );  
}
export default Home;




// import * as ReactDOM from 'react-dom';
// import * as React from 'react';
// import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, ResourcesDirective, ResourceDirective, Inject } from '@syncfusion/ej2-react-schedule';
// import { extend } from '@syncfusion/ej2-base';
// import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
// import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
// class App extends React.Component {
//     constructor() {
//         super(...arguments);
//         this.eventSettings = { dataSource: this.data };
//         this.ownerData = [
//             { OwnerText: 'Nancy', Id: 1, OwnerColor: '#ffaa00' },
//             { OwnerText: 'Steven', Id: 2, OwnerColor: '#f8a398' },
//             { OwnerText: 'Michael', Id: 3, OwnerColor: '#7499e1' }
//         ];
//         this.fields = { text: 'OwnerText', value: 'Id' };
//     }
//     editorTemplate(props) {
//         return (props !== undefined && Object.keys(props).length > 0 ? <table className="custom-event-editor" style={{ width: '100%', padding: '5' }}><tbody>
//       <tr><td className="e-textlabel">Summary</td><td colSpan={4}>
//         <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }}/>
//       </td></tr>
//       <tr><td className="e-textlabel">Owner</td><td colSpan={4}>
//         <MultiSelectComponent className="e-field" placeholder='Choose owner' data-name="OwnerId" dataSource={this.ownerData} fields={this.fields} value={props.OwnerId}/>
//       </td></tr>
//       <tr><td className="e-textlabel">From</td><td colSpan={4}>
//         <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
//       </td></tr>
//       <tr><td className="e-textlabel">To</td><td colSpan={4}>
//         <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
//       </td></tr>
//       <tr><td className="e-textlabel">Reason</td><td colSpan={4}>
//         <textarea id="Description" className="e-field e-input" name="Description" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
//       </td></tr></tbody></table> : <div></div>);
//     }
//     render() {
//         return <ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} ref={schedule => this.scheduleObj = schedule} eventSettings={this.eventSettings} editorTemplate={this.editorTemplate.bind(this)} showQuickInfo={false} group={{ resources: ['Owners'] }}>
//       <ResourcesDirective>
//         <ResourceDirective field='OwnerId' title='Owner' name='Owners' allowMultiple={false} dataSource={this.ownerData} textField='OwnerText' idField='Id' allowGroupEdit={false} colorField='OwnerColor'></ResourceDirective>
//       </ResourcesDirective>
//       <ViewsDirective>
//         <ViewDirective option='Day'/>
//         <ViewDirective option='Week'/>
//         <ViewDirective option='WorkWeek'/>
//         <ViewDirective option='Month'/>
//       </ViewsDirective>
//       <Inject services={[Day, Week, WorkWeek, Month]}/>
//     </ScheduleComponent>;
//     }
// }
// ;
// ReactDOM.render(<App />, document.getElementById('schedule'));