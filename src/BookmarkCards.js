import React from 'react'
import { Card, CardContent, Grid, Typography, Divider } from '@material-ui/core';

const BookmarkCards = () => {

   
  const bookcards = [
    {
      title: <h5 style={{ margin: 0 }}>Microservice Bookmarks</h5>,
      msbookmark:[
        {name:<span style={{fontSize: 14}}>Springboot Microservice </span>, link:'http://www.springboottutorial.com/creating-microservices-with-spring-boot-part-1-getting-started'}, 
        {name:<span style={{fontSize: 14}}>Springboot example code</span>, link:'https://github.com/in28minutes/spring-boot-examples/tree/master/spring-boot-basic-microservice'}, 
        {name:<span style={{fontSize: 14}}>Nodejs Microservice</span>, link:'Nodejs Link'}
      ] 
    },
    
    
  ]

  return(
    <div>
      <Grid container spacing={24} style={{ padding: 12 }}>
        {
          bookcards.map(data => (
            <Grid item xs={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {data.title}
                  </Typography>
                  <Typography variant="h5" component="h2">
                  <ul style={{marginLeft: 'none'}}>
                  {
                    data.msbookmark.map((subitem) => { 
                      return (
                        <li style={{listStyle: 'none'}}>
                         
                          {subitem.name} <br /> 
                          
                          <span style={{fontSize: 10}}><a href={subitem.link} target={"_blank"}>{subitem.link}</a></span>
                          <Divider />
                        </li>
                      )
                    }
                  )}
                  
                </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default BookmarkCards;