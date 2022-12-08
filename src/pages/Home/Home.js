 import {useEffect, useState} from 'react';
 import {Week, TimelineViews, TimelineMonth, Day, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject } from '@syncfusion/ej2-react-schedule';
 import useData from './useData';
 import './Home.css'
 import { Editing } from 'devextreme-react/data-grid';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import {L10n} from '@syncfusion/ej2-base';
import {insertJob,deleteJob, updateJob} from './homeService';
import { parseDate } from 'devextreme/localization';





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

   function dateConverter(str){

    var date = new Date(str);
    const mnth = ("0" + (date.getMonth()+1)).slice(-2);
    const day  = ("0" + date.getDate()).slice(-2);
    const hours  = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds  = ("0" + date.getSeconds()).slice(-2);
    const year = date.getFullYear();
    return `${year}/${mnth}/${day} ${hours}:${minutes}:${seconds}`
 }





function onActionBegin(args){
  console.log(args);

  if(args.requestType === 'eventCreate') {

    const timeStart = dateConverter(args.addedRecords[0].StartTime.toString());

      console.log(typeof(timeStart));
    

    const job = {
      CustomerId: args.addedRecords[0].CustomerId[0],
      SupportStatusesId: args.addedRecords[0].StatusId[0],
      DockId: args.addedRecords[0].OwnerId,
      EndTime : args.addedRecords[0].EndTime,
      StartTime: timeStart,
      NoPallets: parseInt(args.addedRecords[0].NoPallets),
      LoadNo: args.addedRecords[0].LoadNo,
      LoadType: args.addedRecords[0].LoadType,
    }
    insertJob(job);
  }else if(args.requestType === 'eventRemove'){
    deleteJob(args.deletedRecords[0].Guid);
  }
}



 function editorTemplate(props) {
  console.log(props)

  
       return (props !== undefined && Object.keys(props).length > 0 ? 
       <table className="custom-event-editor" style={{ width: '100%', padding: '5' }}><tbody>
              <tr><td className="e-textlabel">Start Date</td><td colSpan={4}>
                
            <DateTimePickerComponent format='yyyy-MM-dd HH:mm' id="StartTime" data-name="StartTime" className="e-field" value={new Date(props.startTime || props.StartTime)}></DateTimePickerComponent>
          </td></tr>

          <tr><td className="e-textlabel">End Date</td><td colSpan={4}>
            <DateTimePickerComponent format='dd/MM/yyyy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
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
