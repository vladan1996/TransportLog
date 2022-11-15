import React from 'react'
import { ScheduleComponent, Day, Week, Month, Inject } from '@syncfusion/ej2-react-schedule';

const Home = () => {
  return (
   
    <div className="container">
      <h1 className="text-center" style={{ paddingTop: "3%" }}>
        <ScheduleComponent height={500}>
          <Inject services={[Day, Week, Month]}  />
        </ScheduleComponent>
      </h1>
    </div>
    
  )
}
export default Home;