import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {Week, TimelineViews, TimelineMonth, Day, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject } from '@syncfusion/ej2-react-schedule';
import useData from './useData';
import './Home.css'


const Home = () => {

  const {data} = useData();

  return(
    <ScheduleComponent width='100%' height='550px' currentView='Week' selectedDate={new Date(2018, 3, 1)}  group={{ resources: ['Owners'] }}>
      <ViewsDirective>
          <ViewDirective option='Day'/>
          <ViewDirective option='Week'/>
      </ViewsDirective>
      <ResourcesDirective>
          <ResourceDirective field='OwnerId' title='Owner' name='Owners' allowMultiple={true} dataSource={data} textField='DockName' idField='Id'>
          </ResourceDirective>
      </ResourcesDirective>
      <Inject services={[Day, Week, TimelineViews, TimelineMonth]}/>
    </ScheduleComponent>
  );  
}
export default Home;
