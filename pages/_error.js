function Error({ statusCode }) {
    return (
      <p className="text-center text-white mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-60">
        {statusCode
          ? `     An error '${statusCode}' occurred on server`
          : '     An error occurred on client'}
      </p>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error
  