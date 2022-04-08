import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Malaïka</h1>
        <p>Commandez maintenant en ligne</p>
      </ItemText>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/home.jpg');
`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`
