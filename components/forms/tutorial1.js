import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Ratio, Card } from 'react-bootstrap'

function Tutorial1(props){
    return (<Card>
            <Card.Header style={{ backgroundColor:"#ffffff" }}>
               <p style={{ textTransform:"uppercase" }}>Tutorial-{props.title}</p>
            </Card.Header>
               <hr />
               <Card.Body>    
               <div style={{ width: '100%', height: 'auto' }}>
                <Ratio aspectRatio="16x9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/e10fkoHswiM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Ratio>
                </div>   
                </Card.Body>  
                <Card.Footer style={{ height:"100px" }}>

                </Card.Footer>   
        </Card>
  );
}
export default Tutorial1