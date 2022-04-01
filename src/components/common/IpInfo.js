import React, { useEffect } from 'react'
import styled from 'styled-components'
import ipApi from '../api/ipApi'

const Wrapper = styled.div`
  position: 'absolute';
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  z-index: 3;
  box-shadow: rgba(245, 245, 245, 0.2) 0px 0px 8px;
  width: 300px;
  padding: 1rem;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row;
    width: 800px;
    padding: 2rem;
  }
`

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;

  @media (min-width: 1200px) {
    margin-bottom: 0;
  }
`

const InfoName = styled.div`
  text-align: center;
  font-family: 'Rubik';
  font-size: 10px;
  text-transform: uppercase;
  color: hsl(0, 0%, 59%);
  margin: 0.1rem;
  @media (min-width: 1200px) {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 12px;
  }
`

const InfoData = styled.div`
  font-family: 'Rubik';
  font-weight: 500;
  color: hsl(0, 0%, 17%);
`

const IpInfo = ({ info, setInfo }) => {
  useEffect(() => {
    if (info === null) {
      ipApi.getMyIp().then((res) => setInfo(res.data))
    }
  }, [])

  

  return (
    <Wrapper>
      <InfoItem>
        <InfoName>Ip Address</InfoName>
        <InfoData>{info ? info.ip : ''}</InfoData>
      </InfoItem>
      <InfoItem>
        <InfoName>Location</InfoName>
        <InfoData>{info ? info.location.country + ', ' + info.location.region + ', ' + info.location.city : ''}</InfoData>
      </InfoItem>
      <InfoItem>
        <InfoName>Timezone</InfoName>
        <InfoData>{info ? info.location.timezone : ''} </InfoData>
      </InfoItem>
      <InfoItem>
        <InfoName>ISP</InfoName>
        <InfoData>{info ? info.isp : '' }</InfoData>
      </InfoItem>
    </Wrapper>
  )
}

export default IpInfo
