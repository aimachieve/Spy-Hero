

import { Stack } from 'react-bootstrap';



function SubHead(props){
    return(
        <Stack  className="p-2" direction="horizontal" style={{ color:"#AAAAAA" }} gap={3}>
            <div style={{textTransform:"uppercase", fontWeight:"bolder", color:`${props.titleColor}`}}>
                <span style={{ fontSize: "0.65em", position: "relative", top: "-0.1vw" }}>{props.icon1 }</span> {props.title}
            </div>
            <div style={{ fontSize:"0.9em" }} className=" border rounded-pill px-2 ms-auto">
               <span>{props.icon2}</span> <a>{props.subtitle1}</a>
            </div>
            <div style={{ fontSize:"0.9em" }} className="border px-2 rounded-pill">
            <span>{props.icon3}</span> <a>{props.subtitle2}</a>
            </div>
        </Stack>
    )
}

export default SubHead;