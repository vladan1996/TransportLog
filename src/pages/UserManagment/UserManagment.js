import React from 'react';
import "./UserManagment.css"
import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Lookup,
  Form,
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';
import { Item } from 'devextreme-react/form';
import { employees, states } from '../data';

const notesEditorOptions = { height: 100 };

class UserManagment  extends React.Component {
  render() {
    return (
      <>
      <h2 className='text-center mt-5'>User Managment List</h2>
      <div id="data-grid-demo" className='data-grid-demo'>
        <DataGrid
          dataSource={employees}
          keyExpr="ID"
          showBorders={true}
        >
          <Paging enabled={false} />
        
          <Editing
            mode="popup"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true}>
            <Popup title="Employee Info" showTitle={true} width={700} height={525} />
            <Form>
              <Item itemType="group" colCount={2} colSpan={2}>
                <Item dataField="FirstName" />
                <Item dataField="LastName" />
                <Item dataField="Phone" />
                <Item dataField="UserRole" />
              </Item>

              <Item itemType="group" caption="Home Address" colCount={2} colSpan={2}>
                <Item dataField="StateID" />
                <Item dataField="Country" />
                <Item dataField="Address" />

              </Item>
            </Form>
          </Editing>
          
          <Column dataField="No." caption="No." width={70} />
          <Column dataField="FirstName" />
          <Column dataField="LastName" />
          <Column dataField="Address" />
          <Column dataField="City" />
          <Column dataField="Country" />
          <Column dataField="Phone" />
          <Column dataField="UserRole" />
          <Column dataField="StateID" caption="State" width={125}>
            <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
          </Column>
        </DataGrid>
      </div>
      </>
    );
  }
}

export default UserManagment ;