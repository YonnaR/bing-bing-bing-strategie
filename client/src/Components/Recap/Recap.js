import React, { Component } from 'react'
import CircleChart from '../Charts/Circle-Chart/CircleChart';
import {Tab,  Tabs, Row , Col } from 'react-bootstrap'
import ActiveMissionsList from '../Active-Missions-List/ActiveMissionsList';
import TitleJumbotron from '../Jumbotron/title-Jumbotron/TitleJumbotron';
import NewMissionModal from '../Modals/New-Mission-Modal/NewMissionModal';
import SuccessButton from '../Buttons/Success-Button/SuccessButton';

export default class Recap extends Component {
  constructor(props){
    super(props);
    this.state={
      formModal:false,
      isLoading:true,
      data:[],
      colors:{

      },

    }
  }

  handleShowForm=()=>{
    this.setState(state=>{
      return {formModal : !state.formModal}
    })
  }
  render() {
    const {formModal,isLoading,data,colors} = this.state;

    return (
        <div >
          {formModal?<NewMissionModal
          title={`Nouvelle Commande`}
          show={true} 
          handleClose={this.handleShowForm}
        />:null}
          <br/>
          <TitleJumbotron text="Les Commandes"/>
          <Tabs id="uncontrolled-tab-example">
            <Tab eventKey="Tout" title="Tout">
              <Row>
                <Col sm={12} md={6}>
                  
                  <CircleChart 
                    data={[
                      { title: 'Encours', value: 10, color: '#E38627' },
                      { title: 'Fais', value: 15, color: '#C13C37' },
                      { title: 'Archivé', value: 20, color: '#6A2135' }
                    ]}
                  />
                </Col>
                <Col sm={12} md={6}>
                    <div className="center" style={{height:"100%"}} >
                      <SuccessButton 
                        text="Créer" 
                        handleClick={this.handleShowForm}
                      />
                    </div>
                </Col>
              </Row>
  
            </Tab>
            <Tab eventKey="Actif" title="Actif" disabled>
              <ActiveMissionsList/>
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              <h1>Heey</h1>
            </Tab>
          </Tabs>
            
        </div>
    )
  }
}
