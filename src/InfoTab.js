import React, {useState} from 'react'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import InfoCard from './InfoCard';
import BookmarkCards from './BookmarkCards'


const InfoTab = () => {

  const [tabValue, setTabValue] = useState(0)

  const handleInputChange = (event,value) => {
    //const { name, value } = event.target
  console.log("Value: " + value)
    setTabValue(value)
    
  }

    return(
        <div>

        <AppBar position="static">
          <Tabs value={tabValue} onChange={handleInputChange}>
            <Tab label="Github" />
            <Tab label="Bookmarks" />
            <Tab label="Miscellaneous" />
          </Tabs>
        </AppBar>
        {tabValue === 0 && <InfoCard />}
        {tabValue === 1 && <BookmarkCards />}
        {tabValue === 2 && <div>Item Three</div>}

        </div>
        
    )
  
}



export default InfoTab;