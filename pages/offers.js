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
import InternalMainLayout from '../components/structures/main-page-layout';
import GenTable from '../components/tables/gen-table';
import FilterComponent from '../components/tables/filter-comp';
import { Stack } from 'react-bootstrap';
import CustomPagination from '../components/mini/custom-pagination';




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
        id: 3,
        title: 'Beetlejuice',
        year: '1988',
        class: 'Beetlejuice',
        dept: '1988',
    },
    {
        id: 4,
        title: 'Ghostbusters',
        year: '1984',
        class: 'Beetlejuice',
        dept: '1988'
    },
    {
        id: 5,
        title: 'Beetlejuice',
        year: '1988',
        class: 'Beetlejuice',
        dept: '1988',
    },
    {
        id: 6,
        title: 'Ghostbusters',
        year: '1984',
        class: 'Beetlejuice',
        dept: '1988'
    },
    {
        id: 7,
        title: 'Beetlejuice',
        year: '1988',
        class: 'Beetlejuice',
        dept: '1988',
    },
    {
        id: 8,
        title: 'Ghostbusters',
        year: '1984',
        class: 'Beetlejuice',
        dept: '1988'
    },
]


export default class Offers extends Component {

    constructor(props){
        super(props);
        this.state = {
            filterText:"",
            resetPaginationToggle:false,
            filteredData:[],
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
                filteredData:mydata
            });
            }else{
                console.log("empty")
                mydata = data;
                this.setState({
                    filteredData:mydata
                });
            }
        });
    }else{
        console.log("empty no event");
        mydata = data;
    }
        console.log(this.state.filterText);
        this.setState({
            filteredData:mydata
        });
    }
handleClear(){
        if (this.state.filterText) {
                this.setState({filterText:"", resetPaginationToggle:!resetPaginationToggle});
            }
        };
    subHeaderComponentMemo(){

        		return (
        			<FilterComponent filterText={(e) => this.setState({filterText:e.target.value})} onClear={this.handleClear} onFilter={(e) => this.filterAllitem(e)} />
        		);
        }
    
    render(){
        return (
        <InternalMainLayout
        title="Offers"
        titleColor="#44B6AE"
        >
            <Stack direction="horizontal" gap={3}>
                    <div style={{ display:"flex", flexDirection:"row" }}>
                       <p className="m-1"> Show </p>
                        <Form.Select aria-label="Default select example"  className="m-1 px-5">
                            
                            <option selected value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </Form.Select>
                        <p style={{ position:"relative",top:"0.3em" }}>entries</p>
                    </div>
                    {/* <div className="ms-auto" md={{ span:5}}> */}
                    <FilterComponent sclass="w-25 ms-auto" filterText={(e) => this.setState({filterText:e.target.value})} onClear={this.handleClear} onFilter={(e) => this.filterAllitem(e)} />
                  
                    
            </Stack>
            
            <GenTable
            columns={this.state.columns}
             rows={this.state.filteredData}
            />
            <div class="me-auto">
            <CustomPagination />
            </div>
        </InternalMainLayout>
        )
    }
}