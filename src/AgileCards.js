import React from 'react'
import { Card, CardContent, Grid, Typography, Divider, Paper } from '@material-ui/core';

const AgileCards = () => {

  const manifesto = [
    {
      title: 'Individuals and Interactions Over Processes and Tools',
      content: 'Valuing people more highly than processes or tools because people respond to business needs and drive the development process. Communication is an example of the difference between valuing individuals versus process'
    },
    {
      title: 'Working Software Over Comprehensive Documentation',
      content: 'Agile does not eliminate documentation, it streamlines for developer what is needed to do the work without getting bogged down in minutiae. The Agile Manifesto values documentation, but it values working software more.'
    },
    {
      title: 'Customer Collaboration Over Contract Negotiation',
      content: 'The Agile Manifesto describes a customer who is engaged and collaborates throughout the development process, making. This makes it far easier for development to meet their needs of the customer.'
    },
    {
      title: 'Responding to change over following a plan',
      content: 'With Agile, the shortness of an iteration means priorities can be shifted from iterations and new features can be added into the next iteration. Agile’s view is that changes always improve a project; changes provide additional value.'
    },
  ]

  const principles = [
    { title: 'Customer satisfaction through early and continuous software delivery', content: 'Customer satisfaction is obtained through early delivery of products to customer for testing and feedback, through continuous delivery to let customer know the progress and through delivery of values to the customers by fulfilling the top priority requirements first.' },
    { title: 'Welcome changing requirements, even late in development', content: 'This places emphasis on responsiveness to change as opposed to tight alignment to approved plans. The change control process is simplified and no formal documentation and approval required. Adapting to change without getting discouraged is a necessary quality' },
    { title: 'Frequent delivery of working software', content: 'This provides immediate values to the customers by delivering working features. Each iteration or Sprint should lead to a release of a product. Teams should make shippable product. The teams make sure that each feature is fully developed, tested, styled, and accepted by the product owner before counting it as delivered. ' },
    { title: 'Close, daily cooperation between business people and developers', content: 'Agile principles keep requirements and documentation lightweight, change is an acceptable reality in software development. This makes close collaboration important to clarify requirements just-in-time and to keep all team members aligned throughout the development.' },
    { title: 'Support, trust, and motivate the people involved', content: 'Projects are built around motivated individuals who are given the environment and support they need, and trusted to get the job done. Team members choose the jobs they are most interested in through self-organization and not through external management influence.' },
    { title: 'Enable face-to-face interactions', content: 'Obtain direct feedback by going to the source of problem or confusion and use oral communication at the workplace for the benefit of osmotic communication. Virtual team conversations, meetings and interactions are facilitated via audio and video conferencing.' },
    { title: 'Collocation and pair programming', content: 'Collocation involves collocating a number of teams in the same open area and pair programming, which entails two programmers sharing a single workstation. Benefits include better transfer of skills, large reduction in coordination efforts, and improved resiliency of a pair to interruptions.' },
    { title: 'Sustainable development and constant pace', content: 'Agile methodologies seek work-life balance among the team members. Through close collaboration these methodologies avoid long working hours, during which people try to undo the errors of unresponsive planning. Developers and stakeholders maintain a constant pace indefinitely.' },
    { title: 'Excellence through Reflection', content: 'The best architectures, requirements, and designs emerge from self-organizing teams. At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly. These retrospective meetings ensure that the lessons learned during the project are put back into the next iteration.' },
    { title: 'Simplicity', content: 'The idea is to focus on the important 20% of effort that gets the majority of the results. If you have control over the scope, and if speed-to-market is of primary importance, why not seek to deliver the important 80% of your product in just 20% of the time? Focus on what are essential to create value to the project and customer not on distractors that do not add values like components, process, etc.' },
    { title: 'Self-organizing teams', content: 'The team is utterly self-managing under the Scrum methodology. It has autonomy and responsibility to meet the goals of the sprint and is responsible for determining how it will accomplish the work to be completed. The basic principle is that the team knows best how to carry out the work, not the project manager or human resources department.' },
    { title: 'Regular adaptation to changing circumstance', content: ' Agile Development holds that that requirements emerge and evolve, and that however much analysis and design you do, this will always be the case because you cannot really know for sure what you want until you see and use the software. ' }
  ]

  return (
    <div>
      <Grid container spacing={24} style={{ padding: 12 }}>
        <Grid item xs={12}>
          <Paper style={{ padding: 10, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Agile Manifesto</Paper>
        </Grid>
        {
          manifesto.map(data => (
            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <h6 style={{ margin: 0 }}>{data.title}</h6>
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    <span style={{ fontSize: 12 }}>
                      {data.content}
                    </span>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        }

        <Grid item xs={12}>
          <Paper style={{ padding: 10, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Agile Principles</Paper>
        </Grid>
        {
          principles.map(data => (
            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography gutterBottom>
                    <span style={{ margin: 0, fontSize: 12, fontWeight: 'bold' }}>{data.title}</span>
                  </Typography>
                  <Divider />
                  <Typography>
                    <span style={{ fontSize: 12 }}>
                      {data.content}
                    </span>
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

export default AgileCards;