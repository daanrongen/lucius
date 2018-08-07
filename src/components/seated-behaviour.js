import '../stylesheets/ui.scss'

const percentToDecimal = decimal => {
  return (decimal * 100).toFixed(2) + '%'
}

const calcSeatedRatio = (total, seated) => {
  return percentToDecimal(total / seated)
}

export const SeatedBehaviour = props => (
  <div className="seated-behaviour">
    <div className="total-present">
      <span>{props.total}</span>
      <span>minutes</span>
    </div>
    <div className="total-seated">
      <span>{props.seated}</span>
      <span>minutes</span>
    </div>
    <div className="seated-movement">
      <span>{props.movement}</span>
    </div>
    <div className="ledstrip-status">
      <span>{props.ledStrip}</span>
    </div>
    <div>
      <span>{calcSeatedRatio(props.seated, props.total)}</span>
      <span>seated</span>
    </div>
  </div>
)
