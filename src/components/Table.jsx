import './styling.css'

const Table = ({ sat }) => {
  function status(data){
    const oper = data.operational;
    if (oper){
      return <td>Active</td>;
    }
    return <td>Inactive</td>;
  }
  //console.log(displaySats.map((sat, id))
  return (
    <table>
    <thead>
     <tr>
       <th></th>
     </tr>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
      
      {sat.map((data) => <tr key = {data.index}>
        <td>{data.name}</td>
        <td>{data.type}</td>
        <td>{data.launchDate}</td>
        <td> {data.operational?'Active' : 'Inactive'}</td>
     </tr>)}
     </tbody>
   </table>
  );
};

export default Table;
//<td>{data.operational}</td>