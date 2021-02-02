import React from 'react';
import DataList from './DataList';
import EmptyData from './EmptyData';

export function DemoClass(props) {
     //for filter JSON data
  const dataJSON=props.data
  .filter((val)=>{
     if(
       val.id.toLowerCase().includes(props.input.toLowerCase())
      || val.name.toLowerCase().includes(props.input.toLowerCase())
      || val.address.toLowerCase().includes(props.input.toLowerCase())
      || val.pincode.toLowerCase().includes(props.input.toLowerCase()))
      return val
    })
    
        return (
           <div>
           {
            dataJSON.length
          ? 
          <div className="DataListcustom">
          {
            dataJSON.map((x,index)=> <DataList data={x}  key={index} value={props.input} />)
          } 
          </div>
          : 
          <EmptyData value={'No recods found'} />
        }
                </div>
        )
    }


export default DemoClass
