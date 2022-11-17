function Link({ uri, text }) {
  return <a href={uri} target="_blank" rel="noreferrer">{text}</a>;
}

function Footer() {
  return (
    <footer>
      <h2>Code Resources</h2>
      <Link uri={"https://github.com/villalonjeremie/alyra-project-3"} text={"Projet Alyra - Github"} />
    </footer >
  );
}

export default Footer;
