import './index.css'

const BannerCardItem = props => {
  const {className, headerText, description} = props
  return (
    <li className={`card-container ${className}`}>
      <div className="card">
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
