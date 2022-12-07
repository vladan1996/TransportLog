 import {useEffect, useState} from 'react';
 import {Week, TimelineViews, TimelineMonth, Day, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject } from '@syncfusion/ej2-react-schedule';
 import useData from './useData';
 import './Home.css'
 import { Editing } from 'devextreme-react/data-grid';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import {L10n} from '@syncfusion/ej2-base';
import {insertJob,deleteJob, updateJob} from './homeService';





 const Home = () => {

   const {data} = useData();

   const customer = data.customers;
   const docks = data.docks;
   const statuses = data.statuses;

   
console.log(customer);
console.log(statuses);

   const fieldsDocks = { value: 'Id', text: 'DockName' };
   const fieldsCustomer = { value: 'Id', text: 'FirstName'};
   const fieldsStatuses = { value: 'Id', text: 'Name' };


function onActionBegin(args){
  console.log(args);

  if(args.requestType === 'eventCreate') {

    const job = {
      CustomerId: args.addedRecords[0].CustomerId[0],
      SuportStatusId: args.addedRecords[0].StatusId[0],
      DockId: args.addedRecords[0].OwnerId,
      endTime : args.addedRecords[0].EndTime,
      startTime: args.addedRecords[0].StartTime,
      NoPallets: parseInt(args.addedRecords[0].NoPallets),
      LoadNo: args.addedRecords[0].LoadNo,
      LoadType: args.addedRecords[0].LoadType,
      Customers: [],
      SupportStatuses: [],
      Dock: [],
      job:[]
    }
    insertJob(job);
    console.log(args);
  }else if(args.requestType === 'eventRemove'){
    deleteJob(args.deletedRecords[0].Guid);
  }
}



 function editorTemplate(props) {
  console.log(props)
  
       return (props !== undefined && Object.keys(props).length > 0 ? 
       <table className="custom-event-editor" style={{ width: '100%', padding: '5' }}><tbody>
              <tr><td className="e-textlabel">Start Date</td><td colSpan={4}>
            <DateTimePickerComponent format='dd/MM/yy hh:mm' id="StartTime" data-name="StartTime" className="e-field"></DateTimePickerComponent>
                    {/* value={new Date(props.startTime || props.StartTime)} */}
          </td></tr>

          <tr><td className="e-textlabel">End Date</td><td colSpan={4}>
            <DateTimePickerComponent format='dd/MM/yy hh:mm' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
         {/* value={new Date(props.endTime || props.EndTime)} */}
          </td></tr>

          <tr><td className="e-textlabel">Dock</td><td colSpan={4}>
            <MultiSelectComponent className="e-field dock" placeholder='Choose owner' data-name="OwnerId" dataSource={docks} fields={fieldsDocks} onChange={e => console.log(e)}/>
          </td></tr>

          <tr><td className="e-textlabel">Customer</td><td colSpan={4}>
            <MultiSelectComponent className="e-field" placeholder='Choose Customer' data-name="CustomerId" dataSource={customer} fields={fieldsCustomer}  />
          </td></tr>

          <tr><td className="e-textlabel">Status</td><td colSpan={4}>
            <MultiSelectComponent className="e-field" placeholder='Choose Status' data-name="StatusId" dataSource={statuses} fields={fieldsStatuses}/>
          </td></tr>

          <tr><td className="e-textlabel">Load Type</td><td colSpan={4}>
            <input id="LoadType" className="e-field e-input ltype" type="text" name="LoadType" style={{ width: '100%' }}/>
          </td></tr>

          <tr><td className="e-textlabel">Load No.</td><td colSpan={4}>
            <input id="LoadNo" className="e-field e-input" type="text" name="LoadNo" style={{ width: '100%' }}/>
          </td></tr>
       
          <tr><td className="e-textlabel">Number of Pallets</td><td colSpan={4}>
            <input id="NoPallets" className="e-field e-input" type="number" name="NoPallets" style={{ width: '100%' }}/>
          </td></tr>
      
          </tbody></table> : <div></div>);
          
        }



  return(
    <ScheduleComponent width='100%' height='550px' currentView='Week' selectedDate={new Date(2022, 11, 1)} group={{ resources: ['Owners'] }} showQuickInfo={false} editorTemplate={editorTemplate.bind(this)} actionBegin={onActionBegin.bind(this)}>
      <ViewsDirective>
          <ViewDirective option='Day'/>
          <ViewDirective option='Week'/>
      </ViewsDirective>
      <ResourcesDirective>
          <ResourceDirective field='OwnerId' title='Owner' name='Owners' allowMultiple={true} dataSource={docks} textField='DockName' idField='Id'> </ResourceDirective>
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