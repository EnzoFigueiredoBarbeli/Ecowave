import {} from 'react';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa';

function Footer() {

    const [email, setEmail] = useState('');

    const [isValidEmail, setIsValidEmail] = useState(true);

    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        
        const isEmailValid = validateEmail(email);
        setIsValidEmail(isEmailValid);
    
        if (isEmailValid) {
        
          console.log('Email:', email);   
          
          setEmail('');
    
          alert('E-mail enviado com sucesso!');
        }
      };
    
      
      const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
      };
    
  return (
    <>
       <footer>

        <div className='footer-container'>

            <div className="Coluna1">
                <p className="txtFooter">
                    Para entrar em contato com os responsáveis do projeto 

                    <Link to="/contato" className="password">
                        clique aqui
                    </Link>
                </p>

                <div className="logos">
                    <ul className="social-midia">
                        <li>
                            <FaGithub className="icon"/>
                        </li>
                        <li>
                            <FaTwitter className="icon"/>
                        </li>
                        <li>
                            <FaInstagram className="icon"/>
                        </li>
                        <li>
                            <FaLinkedin className="icon"/>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="Coluna3">

                <form className= 'frmFooter'onSubmit={handleSubmit}>

                    <p className="frmFooterP">Deseja receber mais informações sobre o projeto?</p>

                    <div className="footerFrmEmailESubmit">
                        <div className="frmFooterEmail">
                            <input
                                type="email"
                                id='email'
                                placeholder='Insira seu e-mail'
                                ref={emailRef}
                                className={!isValidEmail ? 'invalid' : ''}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {!isValidEmail && <p className="error">Por favor, insira um email válido.</p>}
                            <button className='btnFrmEmail' type="submit"><FaYoutube /></button>
                        </div>

                </div>           
            </form>

            </div>

        </div>
    </footer>
    </>
  );
}
export default Footer;