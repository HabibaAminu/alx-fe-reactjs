function Footer() {
  return (
    <footer style={{
      background: '#282A54', color:'#fff', padding:'10px', textAlign:'center', marginTop: '20px' }}>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;