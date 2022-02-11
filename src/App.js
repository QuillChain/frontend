import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x8f2812b6638D4a296991fd1722d77EfCA469616C&order_direction=asc'
      )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])

  return (
    <div className="app">
      <Header />
      {
        punkListData.length > 0 && (
          <>
            <Row style={{ marginTop: "5vh" }} >

              <Col sm className='jutify-content-center d-flex' style={{ marginTop: "5vh" }}>

              <Main punkListData={punkListData} selectedPunk={selectedPunk} />

              <PunkList
                punkListData={punkListData}
                setSelectedPunk={setSelectedPunk}
              />
              </Col>

              <Col sm className="justify-content-center d-flex align-items-center" style={{ marginTop: "5vh" }}>
                
              </Col>

              <Col sm className='jutify-content-center d-flex' style={{ marginTop: "5vh" }}>

              <Main punkListData={punkListData} selectedPunk={selectedPunk} />

              <PunkList
                punkListData={punkListData}
                setSelectedPunk={setSelectedPunk}
              />
              </Col>

            </Row>
          </>
        )}

    </div>
  )
}

export default App;
