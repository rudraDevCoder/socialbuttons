const Button = props => {
  //  Write your code here.
  {name} = props
  return <button>{name}</button>
}

const element = (
  //  Write your code here.
  <div className="btn-container">
  <div>
  <h1 className="social-buttons">Social Buttons</h1>
  <Button className="btn1" name="Like"/>
  <Button className="btn2" name="Comment"/>
  <Button className="btn3" name="Share"/>
  </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
