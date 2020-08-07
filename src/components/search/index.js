import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from "react-bootstrap/Card";
import ReactLoading from "react-loading";
import './index.css';
const year = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
const URL = "https://api.spacexdata.com/v3/launches?limit=100"
const THEME_SECONDARY = "#f77f00";



class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
       
            loaded: false,
            games:''
        }
     
    }

    componentDidMount() {
        fetch("https://api.spacexdata.com/v3/launches?limit=100")
            .then(res => res.json())
            .then((games) => {
                this.setState({ games, loaded: true, active: 1 });
            }).catch(e => console.log(e))
    }
    selectYear=(id,e)=>{
        if(this.state.yearSelected)
                 document.getElementById(this.state.yearSelected).style.backgroundColor = "lightgreen";
        document.getElementById(id).style.backgroundColor = "lightblue";
        this.setState({
            yearSelected:id
        })
        this.changeURL()
    } 
    selectLaunch=(id,e)=>{
        if(this.state.launchSelected)
                 document.getElementById(this.state.launchSelected).style.backgroundColor = "lightgreen";
        document.getElementById(id).style.backgroundColor = "lightblue";
        this.setState({
            launchSelected:id,
            launchSucess:e
        })
        this.changeURL()
    }
    selectLanding=(id,e)=>{
        if(this.state.landingSelected)
                 document.getElementById(this.state.landingSelected).style.backgroundColor = "lightgreen";
        document.getElementById(id).style.backgroundColor = "lightblue";
        this.setState({
            landingSelected:id,
            landSuccess:e
        })
          this.changeURL()
    }

    changeURL=()=>{
        if(this.state.yearSelected && this.state.landingSelected && this.state.launchSelected){
            // this.setState({loaded:false})
            // console.log("url","https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success="+this.state.launchSucess+"&amp;land_success="+this.state.landSuccess+"&amp;launch_year="+this.state.yearSelected)
            // fetch("https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success="+this.state.launchSucess+"&amp;land_success="+this.state.landSuccess+"&amp;launch_year="+this.state.yearSelected)
            // .then(res => res.json())
            // .then((games) => {
            //     console.log("res1",games)
            //     this.setState({ games, loaded: true, active: 1 });
            // }).catch(e => console.log(e))
        }else if(this.state.yearSelected && this.state.landingSelected ){

        }else if(this.state.landingSelected && this.state.launchSelected){

        }else if(this.state.yearSelected && this.state.launchSelected){

        }else if(this.state.yearSelected){

        }else if(this.state.launchSelected){

        }else if(this.state.landingSelected){

        }

    }


    render() {
        return (
            <div>
               {this.state.loaded?     <Row style={{backgroundColor:"aliceblue"}} >
            <Col style={{padding: "2%" , backgroundColor:"white"}} md={3} sm={6}>
               <div><strong>
                   Filters
                   </strong>
                   <br/>
                   <span style={{marginLeft: "35%"}} >Launch Year</span> 
                   <hr></hr>
                   <Row>
                       { year.map((y)=>
                          <Col md={6} sm={6} >
                              <div id={y} className="year" onClick={(e) => this.selectYear(y, e)}>
                              {y} 
                              </div>
                            
                          </Col>
                       )

                       }
                   </Row>
                   <span style={{marginLeft: "35%"}} >Sucessful Launch</span> 
                   <hr></hr>
                   <Row>
                         <Col md={6} sm={6}>
                              <div id="lT" className="year" onClick={(e) => this.selectLaunch("lT","true", e)}>
                              true
                              </div>
                            
                          </Col>
                          <Col md={6} sm={6} >
                              <div className="year" id="lF" onClick={(e) => this.selectLaunch("lF","false", e)} >
                              False
                              </div>
                            
                          </Col>
                   </Row>
                   <span style={{marginLeft: "35%"}} >Sucessful Landing</span> 
                   <hr></hr>
                   <Row>
                         <Col md={6} sm={6}>
                              <div id="landT" className="year" onClick={(e) => this.selectLanding("landT","true", e)}>
                              true
                              </div>
                            
                          </Col>
                          <Col md={6} sm={6}>
                              <div  id="landF" className="year" onClick={(e) => this.selectLanding("landF","false", e)}>
                              False
                              </div>
                            
                          </Col>
                   </Row>

               </div>
            </Col>

             <Col md={9}sm={12}>
                 <Row>  
                     {this.state.games.map((data)=>
                          <Col md={3} sm={12}>
                          <Card style={{ backgroundColor: "white", }}  >
                          <Card.Body>
                              <Row>
                              
                                      <img style={{ width: "100%" }} src={data.links.mission_patch_small} />
                               
                              
                              </Row>
                              <Row>
                                   <p>{data.mission_name + "#" + data.flight_number}</p>
                              </Row>
                              <Row>
                     <p><strong>Launch Year :</strong> {data.launch_year}</p>
                              </Row>
                              <Row>
                     <p><strong>Sucessful Launch :</strong>{data.launch_success?"launch Sucess":"false"}</p>
                              </Row>
                              <Row>
                     <p><strong>Sucessful Landing</strong>{data.launch_failure_details?"false":"landing successFul"}</p>
                              </Row>
                          </Card.Body>
                          
                      </Card>
                 </Col>
                     
                     )}
                      
                       
                 </Row>
            
          </Col>

         

          </Row>
          :    <ReactLoading type="spin" color={THEME_SECONDARY} height={'10%'} width={'10%'} />}  
          </div>
        );
    }
}


export default Search;
