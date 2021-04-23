
import './App.css';
import React ,{useState}from 'react'
// function App() {

const App = (props) => {
    const [isEdit, setIsEdit] = useState(false);
    const [display, setDisplay] = useState('');
    const [datas, setdatas] = useState([])
    const [data, setdata] = useState('')
    const [editValue, setEditValue] = useState('');
    const Add = (event) => {
        event.preventDefault()
        let id = (Math.floor(Math.random() * 1000) + 1)
        let newdata = { id: id, name: data }
        data ? setdatas([...datas, newdata]) : alert('Enter Something')
        setdata('');
    }
    const handleEdit = () => {
      setEditValue(isEdit ? '' : display);
      setIsEdit(!isEdit);
    };
    const handleOnChange = (event) => {
      setEditValue(event.target.value);
    };
    const handleSumbit = () => {
      setDisplay(editValue);
      setIsEdit(false);
    };

  return (
//     <>
//     {isEdit && (
//       <div>
//           <input type="text" placeholder="Enter Something" value={editValue} onChange={handleOnChange} />
//           <button onClick={handleSumbit}>Submit</button>
//           <button onClick={handleEdit}>Cancel</button>
        
    
   
//         {display}&nbsp;&nbsp;
//         <table cellPadding="20%" border='1.5px'>
//         <tr>
//             <th>S.No</th>
//             <th>Name</th>
//             <th>Action
//             <tr>
//             <span>
//           <button onClick={handleSumbit}>edit </button>
//           <button onClick={handleSumbit} > Remove </button>
//           </span>
//           </tr>
//           </th>
//         </tr>
//         </table>
//         </div>
//         </>
//     )
//     );
// };
<>
{isEdit && (
  <div>
      <form>
    <input value={editValue} onChange={handleOnChange}/>
    <button onClick={handleSumbit}>Submit</button>
    <button onClick={handleEdit}>Cancel</button>
    </form>
  </div>
)}
<div>
          <input type="text" placeholder="Enter Something" value={editValue} onChange={handleOnChange} />
          <button onClick={handleSumbit}>Submit</button>
         <button onClick={handleEdit}>Cancel</button>
         <table cellPadding="20%" border='1.5px'>
         <tr>
            <th>S.No</th>
             <th>Name</th>
            <th>Action
             <tr>
             <span
    onClick={handleEdit}style={{ cursor: 'pointer' }}>
        <b>{isEdit ? 'Cancel' : 'Edit'}</b>
  </span>
           </tr>
          </th>
         </tr>
         </table>
         </div>
        
<div>
  {display}&nbsp;&nbsp;
{/* <span
    onClick={handleEdit}style={{ cursor: 'pointer' }}>
        <b>{isEdit ? 'Cancel' : 'Edit'}</b>
  </span> */}
</div>
</>
);
};

    
 
export default App;

