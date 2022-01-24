import React from 'react';
import _ from 'lodash';

function TableBody({columns, data}) {
    // const { data, columns } = this.props

    const renderCell = ( item, column ) => {
        if(column.content) return column.content(item);

        return _.get(item, column.path);
    };

    const createKey = (item, column) => {
        return item._id + (column.path || column.key);
    }

    return (
        <tbody>
            {data.map(item => (
                <tr key={item._id}>
                    {columns.map(column => (
                        <td key={createKey(item, column)}>
                            {renderCell(item, column)}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
}



// class TableBody extends Component {
//     renderCell = ( item, column ) => {
//         if(column.content) return column.content(item);

//         return _.get(item, column.path);
//     };

//     createKey = (item, column) => {
//         return item._id + (column.path || column.key);
//     }

//     render() { 
//         const { data, columns } = this.props

//         return (
//             <tbody>
//                 {data.map(item => (
//                     <tr key={item._id}>
//                         {columns.map(column => (
//                             <td key={this.createKey(item, column)}>
//                                 {this.renderCell(item, column)}
//                             </td>
//                         ))}
//                     </tr>
//                 ))}
//             </tbody>
//         );
//     }
// }
 
export default TableBody ;