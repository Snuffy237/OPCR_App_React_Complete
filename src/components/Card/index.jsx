import Proptypes from 'prop-types'

function Card({ label, title, picture }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{label}</span>
            <img src={picture} alt="freelance" height={80} width={80} />
            <span>{title}</span>
        </div>
    )
}

Card.propTypes = {
    label : Proptypes.string,
    title : Proptypes.string.isRequired,
    picture : Proptypes.string
}

Card.defaultProps = {
    label : 'Je suis un chat mignon!'
}
 
export default Card