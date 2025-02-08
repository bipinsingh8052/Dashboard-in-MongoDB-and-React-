import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Css/Card.css'
export default function CardData() {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=" />
      <Card.Body>
       
        <Card.Text>
          <div className="name">
            <h5>Name </h5>
            <h6>Bipin singh</h6>
          </div>
          <div className="employeeid">
            <h5>Employee ID </h5>
            <h6>Em0099</h6>
          </div>
          <div className="Role">
            <h5>Employee Work </h5>
            <h6>Worker</h6>
          </div>

          <div className="Salary">
            <h5>Employee Salary</h5>
            <p>12000</p>
          </div>
          <div className="joing">
            <h5>Joining Date </h5>
            <h6>80/43/2005</h6>
          </div>
        </Card.Text>
        <div className="btnAll">
        <button className='btn'>Edit</button>
        <button className='btn'>Remove</button>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}
