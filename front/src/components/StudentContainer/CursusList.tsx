import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'

const CursusList = ({cursus}: any) => {
  return (
    <Container sx={{ display: 'flex', flexWrap: 'wrap', gap: 2}}>
      { 
        cursus.map((elem: any) => (
          <Card sx={{ maxWidth: 'auto' }} key={elem.id}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                { elem.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Start Date: { elem.startDate }
              </Typography>
              <Typography variant="body2" color="text.secondary">
                End Date: { elem.endDate }
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))
      }
    </Container>
  )
}

export default CursusList