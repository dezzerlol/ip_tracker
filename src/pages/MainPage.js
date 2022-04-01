import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ipApi from '../components/api/ipApi'
import iconArrow from '../components/assets/icon-arrow.svg'
import bgimage from '../components/assets/pattern-bg.png'
import IpInfo from '../components/common/IpInfo'
import Map from '../components/common/Map'


const Header = styled.header`
  width: 100%;
  background: url(${bgimage});
  background-size: cover;
  height: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`

const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: white;
  margin-top: 3rem;
  margin-bottom: 2rem;

  @media (min-width: 1200px) {
    font-size: 32px;
  }
`

const InputContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for any IP address or domain',
})`
  font-family: 'Rubik';
  font-size: 14px;
  padding-left: 1rem;
  border: none;
  outline: none;
  width: 300px;
  height: 50px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media (min-width: 1200px) {
    width: 500px;
    font-size: 18px;
  }
`

const Button = styled.button`
  height: 50px;
  border: 0;
  width: 50px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: black;
  color: white;
  cursor: pointer;

  :active {
    border: 1px solid grey;
  }
`



const MainPage = () => {
  const [center, setCenter] = useState([0, 0])
  const [info, setInfo] = useState(null)
  const [search, setSearch] = useState()

  useEffect(() => {
    if (info) {
      setCenter([info.location.lat, info.location.lng])
    }
  }, [info])

  const ClickHandle = async () => {
    let res = await ipApi.findIp(search)
    setInfo(res.data)
    setCenter([info.location.lat, info.location.lng])
  }

  return (
    <>
      <Header>
        <Title>IP Address Tracker</Title>
        <InputContainer>
          <Input onBlur={(e) => setSearch(e.currentTarget.value)} />
          <Button onClick={ClickHandle}>
            <img src={iconArrow} alt='arrow' />
          </Button>
        </InputContainer>
        <IpInfo info={info} setInfo={setInfo} />
      </Header>
      <Map center={center}/>
    </>
  )
}

export default MainPage
