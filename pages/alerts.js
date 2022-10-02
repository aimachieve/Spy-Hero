import {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBContainer } from "mdbreact";
import { Pie } from "react-chartjs-2";
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import DataTable from 'react-data-table-component';

import styled from 'styled-components';
// import { Button, Form } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// const TextField = styled.input`
// height: 32px;
// 	width: 200px;
// 	border-radius: 3px;
// 	border-top-left-radius: 5px;
// 	border-bottom-left-radius: 5px;
// 	border-top-right-radius: 0;
// 	border-bottom-right-radius: 0;
// 	border: 1px solid #e5e5e5;
// 	padding: 0 32px 0 16px;

// 	&:hover {
// 		cursor: pointer;
// 	}
// `;

// const ClearButton = styled(Button)`
// 	border-top-left-radius: 0;
// 	border-bottom-left-radius: 0;
// 	border-top-right-radius: 5px;
// 	border-bottom-right-radius: 5px;
// 	height: 34px;
// 	width: 32px;
// 	text-align: center;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// `;

const FilterComponent = ({ filterText='', onFilter, onClear }) => (
    <>
      <Form.Control
            id="search"
            className="w-25"
            type="text"
            placeholder="Filter "
        aria-label="Search Input"
            defaultValue={filterText}
            onChange={onFilter}
        />
    </>
);


const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
        class: 'Beetlejuice',
        dept: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
        class: 'Beetlejuice',
        dept: '1988'
    },
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
        class: 'Beetlejuice',
        dept: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
        class: 'Beetlejuice',
        dept: '1988'
    },
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
        class: 'Beetlejuice',
        dept: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
        class: 'Beetlejuice',
        dept: '1988'
    },
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
        class: 'Beetlejuice',
        dept: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
        class: 'Beetlejuice',
        dept: '1988'
    },
]


export default class Alerts extends Component {

    constructor(props){
        super(props);
        this.state = {
            filterText:"",
            filterText2:"",
            resetPaginationToggle:false,
            filteredData1:[],
            filteredData2:[],
            columns:[
                {
                    name: 'ID',
                    selector: row => row.id,
                    sortable: true,
                },
                {
                    name: 'Title',
                    selector: row => row.title,
                    sortable: true,
                },
                {
                    name: 'Year',
                    selector: row => row.year,
                    sortable: true,
                },
                {
                    name: 'Class',
                    selector: row => row.class,
                    sortable: true,
                },
                {
                    name: 'Dept',
                    selector: row => row.dept,
                    sortable: true,
                },
            ]
        }
        
    }

   

    componentDidMount(){
        // console.log()
        this.filterAllitem();
        this.filterAllitem2();
        // this.subHeaderComponentMemo();
    }

    filterAllitem(e) {
        let mydata = [];
        const {filterText} = this.state;
        if(e){
        console.log(e.target.value)
        this.setState({
            filterText:e.target.value
        },()=>{
            if(e.target.value.length>0){
                console.log("not empty");
            mydata = data.filter(
                item => item.title && item.title.toLowerCase().includes(filterText.toLowerCase()),
             );
             this.setState({
                filteredData1:mydata
            });
            }else{
                console.log("empty")
                mydata = data;
                this.setState({
                    filteredData1:mydata
                });
            }
        });
    }else{
        console.log("empty no event");
        mydata = data;
    }
        console.log(this.state.filterText);
        this.setState({
            filteredData1:mydata
        });
    }
    


   filterAllitem2(e) {
        let mydata = [];
        const {filterText2} = this.state;
        if(e){
        console.log(e.target.value)
        this.setState({
            filterText2:e.target.value
        },()=>{
            if(e.target.value.length>0){
                console.log("not empty");
            mydata = data.filter(
                item => item.title && item.title.toLowerCase().includes(filterText2.toLowerCase()),
             );
             this.setState({
                filteredData2:mydata
            });
            }else{
                console.log("empty")
                mydata = data;
                this.setState({
                    filteredData2:mydata
                });
            }
        });
    }else{
        console.log("empty no event");
        mydata = data;
    }
        console.log(this.state.filterText2);
        this.setState({
            filteredData2:mydata
        });
    }
    handleClear(){
        if (this.state.filterText) {
                this.setState({filterText:"", resetPaginationToggle:!resetPaginationToggle});
            }
        };
        subHeaderComponentMemo1(){

            return (
                <FilterComponent filterText={(e) => this.setState({filterText:e.target.value})} onClear={this.handleClear} onFilter={(e) => this.filterAllitem(e)} />
            );
    }
    subHeaderComponentMemo2(){

        return (
            <FilterComponent filterText={(e) => this.setState({filterText2:e.target.value})} onClear={this.handleClear} onFilter={(e) => this.filterAllitem2(e)} />
        );
}
    
    render(){
        return (
            <Container style={{backgroundColor:"#ffffff", paddingTop:"20px"}} className="main">
         
            <DataTable
            title="Latest Alerts"
            columns={this.state.columns}
            data={this.state.filteredData1}
            paginationResetDefaultPage={this.resetPaginationToggle}
            subHeader
            pagination
            subHeaderComponent={this.subHeaderComponentMemo1()}
			selectableRows		
            persistTableHead
        />
        <br /><br/>
        <DataTable
            title="Your Alerts"
            columns={this.state.columns}
            data={this.state.filteredData2}
            paginationResetDefaultPage={this.resetPaginationToggle}
            subHeader
            pagination
            subHeaderComponent={this.subHeaderComponentMemo2()}
			selectableRows		
            persistTableHead
        />   
          </Container>
        )
    }
}