import React, { useState } from 'react'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const InfoCard = () => {
  const cardData = [
    
    { title: <h5 style={{ margin: 0 }}>Adding Project to Github</h5>, 
		  content: [
          <span style={{fontSize: 14}}>Create a new repo on github</span>, 
				  <span style={{fontSize: 14}}>Open Git Bash</span>,
				  <span style={{fontSize: 14}}>Change the current working directory to your local project.</span>,
				  <span style={{fontSize: 14}}>Initialize the local directory as a Git repository. <br/><i style={{padding: 10, fontSize: 12, color: 'DodgerBlue'}}><b>--> git init</b></i></span>,
				  <span style={{fontSize: 14}}>Copy remote url</span>, 
				  <span style={{fontSize: 14}}>git remote add origin remote-repository-URL.<br/><i style={{fontSize: 10, paddingLeft: 10, color: 'DodgerBlue'}}><b>git remote add origin https://github.com/vikrantchopra/react-hooks.git</b></i> </span>, 
          <span style={{fontSize: 14}}>Push the changes <br/><i style={{paddingLeft: 10, fontSize: 12, color: 'DodgerBlue'}}><b>--> git push origin master</b></i></span>] },
    { title: <h5 style={{ margin: 0 }}>Building and Deploying a React App</h5>, 
      content: [<span style={{fontSize:14}}>Make sure you are running git 2.19.x or higher</span>, 
          <span style={{fontSize:14}}>From command prompt inside project folder run: <br/><i style={{padding: 10, fontSize: 12, color: 'DodgerBlue'}}><b>npm run build</b></i></span>, 
          <span style={{fontSize:14}}>Inside package.json add: <br/><i style={{padding: 1, fontSize:12, color: 'DodgerBlue'}}><b>"homepage": "https://vikrantchopra.github.io/react-hooks/"</b></i></span>,
          <span style={{fontSize:14}}>Add these two lines to scripts: <br/>
              <i style={{padding: 1, fontSize:12, color: 'DodgerBlue'}}><b>"predeploy": "npm run build",</b></i><br/>
              <i style={{padding: 1, fontSize:12, color: 'DodgerBlue'}}><b>"deploy": "gh-pages -d build"</b></i>
          </span>,
          <span style={{fontSize:14}}>In your project, add <u><b style={{fontSize:14}}>gh-pages</b></u> to the devDependencies.
            <br/><i style={{paddingLeft: 10, fontSize: 12, color: 'DodgerBlue'}}><b>npm install --save-dev gh-pages</b></i>
          </span> 
      ] 
    },
  ]

  const testData = [
    { header: 'Header 1', content: 'content here' },
    { header: 'Header 2', content: 'content here again' }

  ]
  return (
    <div>
      

      <Grid container spacing={24} style={{ padding: 12 }}>
        {cardData.map(data => (

          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.title}
                </Typography>
                <ul>
                  {
                    data.content.map((subitem) => {
                      return (
                        <li>
                          {subitem}
                        </li>
                      )
                    }
                  )}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default InfoCard;
