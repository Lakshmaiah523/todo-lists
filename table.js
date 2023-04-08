import React,{useState} from 'react'
import "./table.css"
export default function Table(){
    let [array,setArray]=useState([])
    let [inputdata,setInputdata]=useState({time:"",title:"",description:"",tag:"",status:""})
    let [index,setIndex]=useState()
    let [bolin,setBolin]=useState(false)

    function data(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }
    let {time,title,description,tag,status}=inputdata;
    function addinputdata(){
        if(time===""&&title===""&&description===""&&tag===""&&status==="")
        {
            alert("enter name and roll no")
        }
        else{
        setArray([...array,{time,title,description,tag,status}])
        setInputdata({time:"",title:"",description:"",tag:"",status:""})
        setBolin(true)
        //console.log(inputdata)
        }
    }
    //console.log(array,"total array")
    //deleting row
    function deletedata(i){
        console.log(i,"this index row want to be delete")
        let total=[...array]
        total.splice(i,1)
        setArray(total)
    }
    //updatedata
    function updatedata(i){
            let {time,title,description,tag,status}=array[i]
            setInputdata({time,title,description,tag,status})
            setBolin(true)
            setIndex(i)

    }
    //update info
    function updateinfo(){
        let total=[...array]
        total.splice(index,1,{time,title,description,tag,status})
        setArray(total)
        setBolin(false)
        setInputdata({time:"",title:"",description:"",tag:"",status:""})
        
    }
    return (
        <div>
            <input type="time" value={inputdata.time||""} name="time" autocomplete='off' placeholder="enter time" onChange={data}/>
            <input type="text" value={inputdata.title||""} name="title" placeholder='enter title' onChange={data}/>
            <input type="text" value={inputdata.description||""} name="description" placeholder='enter Description' onChange={data}/>
            <input type="tag" value={inputdata.tag||""} name="tag" placeholder='enter Tag' onChange={data}/>
            <select name="status" value={inputdata.status||""}>
                <option value="">OPEN</option>
                <option value="">WORKING</option>
                <option value="">DONE</option>
                <option value="">OVERDUE</option>
            </select>
            <button onclick={!bolin?addinputdata:updateinfo}>{!bolin? 'Add data':'Update data'}</button>
            <br/>
            <table border="1" width="100%">
                <tbody>
                    <tr>
                        <th>time</th>
                        <th>title</th>
                        <th>description</th>
                        <th>tag</th>
                        <th>status</th>
                        <th>update</th>
                        <th>delete</th>
                    </tr>
                    {
                        array && array.map(
                            (item,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{item.time}</td>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>{item.tag}</td>
                                        <td>{item.status}</td>
                                        <td><button onClick={()=>updatedata(i)}>update</button></td>
                                        <td><button onClick={()=>deletedata(i)}>delete</button></td>
                                    </tr>
                                )
                            }
                        )
                    }

                </tbody>
            </table>

        </div>

    )
}