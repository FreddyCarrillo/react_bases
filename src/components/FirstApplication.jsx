import PropTypes from 'prop-types';

export const FirstApplication = ({
  title
}) => {

  console.log('title',title);




  return (
    <>
      <h1>{ title }</h1>
    </>
  )
}


FirstApplication.propTypes = {
  title: PropTypes.string
}

FirstApplication.defaultProps = {
  title: '____________'
}