
const Home = () => {
  return (
    <>
      <section className="dark-section">
        <section className="dark-card">
          <h2>Login</h2>
          <p>Login to use House Rent</p>
          <form className="dark-form" action="">
            <label htmlFor="user">Username :</label>
            <input type="text" className="dark-input" />
            <label htmlFor="pass">Password :</label>
            <input type="password" className="dark-input" />
            <a href="/"><input type="submit" value="Submit" className="dark-submit" /></a>
            <p>Don't have an account? <a href="/register" className="dark-link">Register</a>.</p>
          </form>
        </section>
      </section>
    </>
  );
};

export default Home;
