import React, {useState} from 'react';
import axios from 'axios'
import "./Customers.css"
import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Lookup,
  Form,
  
} from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react/button';
import CheckBox from 'devextreme-react/check-box';
import 'devextreme-react/text-area';
import { Item } from 'devextreme-react/form';
import useCustomerData from './useCustomerData';
import { states } from '../dataStates';

const notesEditorOptions = { height: 100 };

const Customers = () => {

  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const {customer} = useCustomerData();
  
const handleValueChange = () => setCheckBoxValue(prev => !prev); 

const handleAddCustomer = () => {
  console.log('Radi');
}
    return (
      <>
      <h2 className='text-center mt-5'>Customer List</h2>
      <div id="data-grid-demo" className='data-grid-demo'>
   

        <DataGrid
          dataSource={customer}
          keyExpr="ID"
          showBorders={true}
        >
          <Paging enabled={false} />

          <Editing
            mode="popup"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true}
            >
        
            <Popup title="Create New Customer" showTitle={true} width={700} height={525}  />
            
            <Form>
              <Item itemType="group" colCount={2} colSpan={2}>
                <Item dataField="FirstName" />
                <Item dataField="LastName" />
                <Item dataField="Phone" />  
                <Item itemType="group" colCount={2} colSpan={2}>
              <CheckBox
                text="IsActive"
                onChange={handleValueChange}
            />
            </Item>
              </Item>
              <Item itemType="group" caption="Home Address" colCount={2} colSpan={2}>
                <Item dataField="Country" />
                <Item dataField="Address" />
              </Item>
            </Form>
          </Editing>
          
          <Column dataField="Id" caption="ID" width={270} />
          <Column dataField="FirstName" />
          <Column dataField="LastName" />
          <Column dataField="Address" />
          <Column dataField="Country" width={125}/>
            {/* <Lookup
             dataSource={} 
             valueExpr="ID" displayExpr="Name" />
          </Column> */} 
          <Column dataField="City" />
          <Column dataField="Phone" />
          <Column dataField="IsActive" />
         
        </DataGrid>
      </div>
      </>
    );
  // }
}

export default Customers;