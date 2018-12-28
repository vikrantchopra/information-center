import React from 'react'
import { Card, CardContent, Grid, Typography, Divider } from '@material-ui/core';

const BookmarkCards = () => {

  const bookcards = [
    {
      title: <h5 style={{ margin: 0 }}>Microservice Bookmarks</h5>,
      bookmark:[
        {name:<span style={{fontSize: 14}}>Springboot Microservice </span>, link:<span style={{fontSize: 14}}>Springboot Link</span>}, 
        {name:<span style={{fontSize: 14}}>Python Microservice</span>, link:<span style={{fontSize: 14}}>Python Link</span>}, 
        {name:<span style={{fontSize: 14}}>Nodejs Microservice</span>, link:<span style={{fontSize: 14}}>Nodejs Link</span>}
      ] 
    },
    
  ]

  return(
    <div>
      <Grid container spacing={24} style={{ padding: 12 }}>
        {
          bookcards.map(data => (
            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {data.title}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                  <ul>
                  {
                    data.bookmark.map((subitem) => {
                      return (
                        <li style={{listStyle: 'none'}}>
                          {subitem.name} <br /> {subitem.link}
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