const EdCard = ({id, school, degree, year, subject}) =>{
  return (
    <div className="col-6">
    <div key={id} className="degree card" style={{width: "500px", margin: "0 auto"}}>
    <h3>{school}</h3>
    <h4>{degree}, {year}</h4>
    <h4>{subject}</h4>
  </div>
  </div>

  )
}
export default EdCard;