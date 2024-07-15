import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {Container,Box,Text} from '@chakra-ui/react'
import Signup from '../../components/authentication/Signup'
import Login from '../../components/authentication/Login'
const Authpage = () => {
  return (
	<Container>
		<Box>
		<Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>SIGN UP</Tab>
    <Tab>SIGN IN</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
     <Signup/>
    </TabPanel>

    <TabPanel>
     <Login/>
    </TabPanel>
	
  </TabPanels>
</Tabs>

		</Box>
	</Container>
  )
}

export default Authpage