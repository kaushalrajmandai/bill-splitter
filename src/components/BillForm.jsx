import billData from "../data/billData.json";

function BillForm({ bill, setBill, tipPercent, setTipPercent, friends, setFriends }) {
  return (
    <div className="bill-form">
      <div className="form-group">
        <label htmlFor="bill">{billData.labels.totalBill}</label>
        <div className="input-wrapper">
          <span className="currency-symbol">{billData.currency}</span>
          <input
            id="bill"
            type="number"
            min="0"
            placeholder="0.00"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label>{billData.labels.tipPercent}</label>
        <div className="tip-buttons">
          {billData.tipOptions.map((tip) => (
            <button
              key={tip}
              className={`tip-btn ${tipPercent === tip ? "active" : ""}`}
              onClick={() => setTipPercent(tip)}
            >
              {tip}%
            </button>
          ))}
        </div>
        <div className="custom-tip-row">
          <label htmlFor="custom-tip">Custom %</label>
          <input
            id="custom-tip"
            type="number"
            min="0"
            max="100"
            placeholder="Custom"
            value={billData.tipOptions.includes(tipPercent) ? "" : tipPercent}
            onChange={(e) => setTipPercent(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="friends">{billData.labels.numFriends}</label>
        <div className="friends-counter">
          <button
            className="counter-btn"
            onClick={() => setFriends((f) => Math.max(1, f - 1))}
          >
            −
          </button>
          <input
            id="friends"
            type="number"
            min="1"
            value={friends}
            onChange={(e) => setFriends(Math.max(1, Number(e.target.value)))}
          />
          <button
            className="counter-btn"
            onClick={() => setFriends((f) => f + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default BillForm;
