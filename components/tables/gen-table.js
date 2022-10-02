import { Pagination } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';




function GenTable(props){
    console.log(props);
    return (
        <Table striped responsive>
      <thead>
        <tr>
            {
                props.columns.map((item, index)=>(
                    <th key={index}> {item.name}</th>
                ))
            }
        </tr>
      </thead>
      <tbody>
        {
            props.rows.length<1?(
                <tr>
                <td colSpan={props.columns.length}>No item present yet</td> 
                </tr>
            ):
            (<>
                {
                props.rows.map((item,index)=>(
            
                <tr key="index">
                    {
                        Object.entries(item).map(([key,val],index)=>(
                             <td key={index}>
                                {val}
                             </td>
                        ))
                    }
                </tr>
            ))
            }
          
            </>
            )
        }
        
      </tbody>
    </Table>
    )
}

export default GenTable;