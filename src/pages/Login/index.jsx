import "../../App.css";
import AnchorDefault from "../../components/Anchor/index";
import ButtonDefault from "../../components/Button/index";
import InputLogin from "../../components/Input/index";
import Title from "../../components/Title/index";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import SubTitle from "../../components/Subtitle";

const Login = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
  };
  const [user, setUser] = useState("");
  const [state, setState] = useState("Login");
  const handleChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className="App">
      <section className="App-section">
        <div className="div-login">
          <Title id="title-login" title={state} styleTitle="title" />
          <SubTitle
            style={{
              width: "100%",
              wordBreak: "break-all",
              textAlign: "right",
            }}
            user={user}
          />
          <InputLogin type="text" label="Usuário" handleChange={handleChange} />
          <InputLogin type="password" label="Senha" />
          <ButtonDefault name="Entrar" redirection={goHome} />
          <ButtonDefault
            name="Alterar título"
            redirection={() => setState("Bem vindo!")}
          />
          <AnchorDefault
            href="https://www.google.com/"
            name="Esqueceu sua senha?"
          />
        </div>
      </section>
    </div>
  );
};

export default Login;
