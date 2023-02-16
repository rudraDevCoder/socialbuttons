const Button = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return <button className={`${className}`}>{name}</button>;
};

const element = (
  //  Write your code here.
  <div className="btn-container-outer">
    <h1 className="social-buttons">Social Buttons</h1>

    <div className="btn-container-inner">
      <Button className="btn1" name="Like" />
      <Button className="btn2" name="Comment" />
      <Button className="btn3" name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
