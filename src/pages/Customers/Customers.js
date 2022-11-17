import React from 'react';
import "./Customers.css"
import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Lookup,
  Form,
} from 'devextreme-react/data-grid';
import CheckBox from 'devextreme-react/check-box';
import 'devextreme-react/text-area';
import { Item } from 'devextreme-react/form';
import { employees, states } from '../data';

const notesEditorOptions = { height: 100 };

class Customers  extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        checkBoxValue: false
    };
    this.handleValueChange = this.handleValueChange.bind(this);
}

handleValueChange(e) {
    this.setState({
        checkBoxValue: e.value
    });
}



  render() {
    return (
      <>
      <h2 className='text-center mt-5'>Customer List</h2>
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
            <Popup title="Create New Customer" showTitle={true} width={700} height={525} />
            <Form>
              <Item itemType="group" colCount={2} colSpan={2}>
                <Item dataField="FirstName" />
                <Item dataField="LastName" />
                <Item dataField="Phone" />  
                <Item itemType="group" colCount={2} colSpan={2}>
              <CheckBox
                text="IsActive"
                value={this.state.checkBoxValue}
                onValueChanged={this.handleValueChange}
            />
            </Item>
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
          <Column dataField="StateID" caption="Country" width={125}>
            <Lookup dataSource={states} valueExpr="ID" displayExpr="Name" />
          </Column>
          <Column dataField="City" />
          <Column dataField="Phone" />
          <Column dataField="IsActive" />
         
        </DataGrid>
      </div>
      </>
    );
  }
}

export default Customers;