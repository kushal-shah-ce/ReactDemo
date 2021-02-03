import React from 'react';
import DataRow from './DataRow';

export default function DataList(props) {
 return (
     <div id="pointer" className={custom} >
                        <DataRow value={props.data.id} data={props.value !== '' && props.data.id.toLowerCase().includes(props.value.toLowerCase()) ? 'bold search' : 'bold'} />
                        <DataRow value={props.data.name} data={props.value !== '' && props.data.name.toLowerCase().indexOf(props.value.toLowerCase())>-1 ? 'italic search' : 'italic' } />
                        <DataRow value={props.data.address} data={props.value !== '' && props.data.address.toLowerCase().indexOf(props.value.toLowerCase())>-1 ? 'search' :null} />
                        <DataRow value={props.data.pincode} data={props.value !== '' && props.data.pincode.toLowerCase().indexOf(props.value.toLowerCase())>-1 ? 'search' :null} />
                        {props.data.items.map((x, index)=> <DataRow value={x} key={index} data={props.value !== '' && x.toLowerCase().indexOf(props.value.toLowerCase())>-1 ? 'search' :null} />)} 
</div>
        )
    }
