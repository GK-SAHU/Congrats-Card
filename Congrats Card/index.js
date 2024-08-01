const element = (
  <div className="card-container">
    <h1 className="heading">Congratulation</h1>
    <div className="emp-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        alt=""
      />
      <h1 className="titel">G-K SAHU</h1>
      <marquee behavior="" direction="">
        <p className="discription">
          You can also publish your code using the publish command and open the
          URL link
        </p>
      </marquee>

      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-image "
        alt=""
      />
    </div>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
