import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
function SkillsCard ({id, title, description, repository, imgsrc, tech}) {
  console.log(tech)
  return (
    <div className="col-3">
    <Card key={id} style={{width: "100%", margin: "2rem auto", padding: "1rem 5px"}}>
      <Card.Title>{title}</Card.Title>
      <Card.Img src={imgsrc} alt={title}/>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <Card.Link href={repository}>Github Repository</Card.Link>
      </Card.Body>
      <ListGroup>
        {tech.map(onetech => (
          <ListGroup.Item>{onetech}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
    </div>
  )
}

export default SkillsCard