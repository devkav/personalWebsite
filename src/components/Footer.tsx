const Footer = () => {
  const currentTime = new Date()
  const year = currentTime.getFullYear()

  return (
    <div className="footer">
      <h5>Designed & Built by Devan Kavalchek</h5>
      <h5>
        Inspired by{' '}
        <a href="https://brittanychiang.com" target="_blank" rel="noreferrer">
          Brittany Chiang{' '}
        </a>
      </h5>
      <h5>&#169; {year} </h5>
    </div>
  );
};

export default Footer;
