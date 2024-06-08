import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleRememberMeChange = (e) => {
      setRememberMe(e.target.checked);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Verificando as credenciais
      if (email === 'admin' && password === '1234') {
        // Lógica de submissão do formulário aqui
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Remember me:", rememberMe);
        setError('');
      } else {
        setError('Credenciais inválidas. Por favor, tente novamente.');
      }
    };
  
    return (
      <div className="all-login">
        <div className="login-box">
          <div className="login-text">
            <div id='hd'>Login</div>
          </div>
          {error && <div className="error">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                placeholder="Email"
                autoComplete="off"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                autoComplete="off"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="forgot">
              <section>
                <input
                  type="checkbox"
                  className="check"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label htmlFor="check">Remember me</label>
              </section>
              <section className="password">
                <a href="#" className="password">Forgot password</a>
              </section>
            </div>
            <div className="input-submit">
              <button type="submit" className="input-field">
              Sign In
              </button>
            </div>
          </form>
          <div className="text">
            <p>Dont have a account? <a href="#" className="password">Sign Up</a></p>
          </div>
        </div>
      </div>
    );
  }