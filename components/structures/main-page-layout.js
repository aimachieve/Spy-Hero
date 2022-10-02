import SubHead from './subHead'
import Container from 'react-bootstrap/Container'



function InternalMainLayout(props){
    
    return(<Container className={"main py-4"} style={{ backgroundColor:"#ffffff", alignItems:"center"}}>
            
                <SubHead color={props.headColor} 
                icon1={props.icon1} 
                icon2={props.icon2}
                icon3 ={props.icon3}
                title={props.title}
                titleColor={props.titleColor}
                subtitle1= {props.subtitle1}
                subtitle2= {props.subtitle2}
                />
                <hr />
                {props.children}
        </Container>
        );
}

export default InternalMainLayout;