import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container >
            <Section
                title='Model S'
                discription='Order online for Touchless Drivery'
                backgroundImg='model-s.jpg'
                leftbtnText='Custom Order'
                RightbtnText='Existing Inventory'
            />
            <Section
                title='Model Y'
                discription='Order online for Touchless Drivery'
                backgroundImg='model-y.jpg'
                leftbtnText='Custom Order'
                RightbtnText='Existing Inventory'
            />
            <Section
                title='Model 3'
                discription='Order online for Touchless Drivery'
                backgroundImg='model-3.jpg'
                leftbtnText='Custom Order'
                RightbtnText='Existing Inventory'
            />
            <Section
                title='Model X'
                discription='Order online for Touchless Drivery'
                backgroundImg='model-X.jpg'
                leftbtnText='Custom Order'
                RightbtnText='Existing Inventory'
            />
            <Section
                title='Lowest Cost Solar Panels in America'
                discription='Money-back guarantee'
                backgroundImg='solar-panel.jpg'
                leftbtnText='Order Now'
                RightbtnText='Learn more'
            />
            <Section
                title='Solar for New Roofs'
                discription='Solar Roof Cost less Than a New Roofs'
                backgroundImg='solar-roof.jpg'
                leftbtnText='Order Now'
                RightbtnText='Learn more'
            />
            <Section
                title='Accessories'
                discription=''
                backgroundImg='accessories.jpg'
                leftbtnText='Shop Now'
                
            />


        </Container>
    )
}
export default Home

const Container = styled.div`
    height:100vh
`