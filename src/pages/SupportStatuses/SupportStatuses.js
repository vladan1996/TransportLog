import React from 'react';
import "./SupportStatuses.css"
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

class SupportStatuses  extends React.Component {

  render() {
    return (
      <>
      <h2 className='text-center mt-5'>Support Statuses List</h2>
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
            <Popup title="Create New Support Status" showTitle={true} width={700} height={525} />
            <Form>
              <Item itemType="group" colCount={1} colSpan={1}>
                <Item dataField="Name" />
                <Item dataField="Description" />    
              </Item>
            </Form>
          </Editing>
          
          <Column dataField="No." caption="No." width={50} />
          <Column dataField="Name"width={300} />
          <Column dataField="Description" />
        </DataGrid>
      </div>
      </>
    );
  }
}

export default SupportStatuses;