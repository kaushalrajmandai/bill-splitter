import billData from "../data/billData.json";

function ResultCard({ bill, tipPercent, friends }) {
  const billAmount = parseFloat(bill) || 0;
  const tipAmount = (billAmount * tipPercent) / 100;
  const totalAmount = billAmount + tipAmount;

  const perPersonBill = friends > 0 ? billAmount / friends : 0;
  const perPersonTip = friends > 0 ? tipAmount / friends : 0;
  const totalPerPerson = perPersonBill + perPersonTip;

  const fmt = (val) =>
    val.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const c = billData.currency;

  return (
    <div className="result-card">
      <h2>Summary</h2>

      <div className="highlight-row">
        <span>{billData.labels.totalPerPerson}</span>
        <span className="big-amount">{c}{fmt(totalPerPerson)}</span>
      </div>

      <div className="divider" />

      <div className="result-row">
        <span>{billData.labels.perPersonBill}</span>
        <span>{c}{fmt(perPersonBill)}</span>
      </div>
      <div className="result-row">
        <span>{billData.labels.perPersonTip} ({tipPercent}%)</span>
        <span className="tip-value">{c}{fmt(perPersonTip)}</span>
      </div>

      <div className="divider" />

      <div className="result-row muted">
        <span>Total Bill</span>
        <span>{c}{fmt(billAmount)}</span>
      </div>
      <div className="result-row muted">
        <span>{billData.labels.totalTip}</span>
        <span>{c}{fmt(tipAmount)}</span>
      </div>
      <div className="result-row muted">
        <span>Grand Total</span>
        <span>{c}{fmt(totalAmount)}</span>
      </div>

      <div className="friends-note">
        Split among <strong>{friends}</strong> {friends === 1 ? "person" : "people"}
      </div>
    </div>
  );
}

export default ResultCard;
