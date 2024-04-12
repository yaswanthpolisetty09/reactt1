// Write your code here
const DenominationItem = () => {
  const {updatefun, detailss} = props
  const {value} = detailss
  const onclicc = value => {
    updatefun(value)
  }
  return (
    <div>
      <ul>
        <button onClick={onclicc}> {value}</button>
      </ul>
    </div>
  )
}

export default DenominationItem
