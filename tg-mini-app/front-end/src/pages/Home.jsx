import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
    const { user } = useDynamicContext();
    const { isAuthenticated, isLoading, ...auth0} = useAuth0();
    console.log(auth0.user)
  
    return (
      <>
      <div>
        {isLoading ? <div>Loading ...</div>:isAuthenticated && (
      <div>
        {/* <img src={auth.picture} alt={auth.name} /> */}
        <h2>{auth0.user.sub}</h2>
        {/* <p>{auth0.user.email}</p> */}
      </div>
    )}
      </div>
      <div style={styles.pageContainer}>
        
        <main style={styles.mainContent}>
          <h2 style={styles.heading}>Slot Machine</h2>
          <p style={styles.description}>
            Bet on Projects and Win Money!!
          </p>
          {user ? (
            <button style={styles.button}>
            </button>
          ) : (
            <p style={styles.connectMessage}>Please connect your wallet to continue.</p>
          )}
        </main>
      </div>
      </>
    );
};

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f4f8',
    padding: '20px',
    boxSizing: 'border-box',
  },
  mainContent: {
    textAlign: 'center',
    maxWidth: '600px',
    width: '100%',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '30px',
  },
  button: {
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
  connectMessage: {
    fontSize: '1rem',
    color: '#666',
    padding: '12px 24px',
    backgroundColor: '#f8d7da',
    borderRadius: '4px',
  },
};

export default Home;
