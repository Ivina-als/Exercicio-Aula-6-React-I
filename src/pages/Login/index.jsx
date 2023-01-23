import "../../App.css";
import AnchorDefault from "../../components/Anchor/index";
import ButtonDefault from "../../components/Button/index";
import InputLogin from "../../components/Input/index";
import Title from "../../components/Title/index";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SubTitle from "../../components/Subtitle";

//state lifting, a elevação do estado é quando você move o state do
//componente atual para um componente acima, ou seja, um componente pai.

//Enunciado
/*
Validação de usuário e senha, se tão corretos. Usando estado. Se tiver incorreto, 
colocar um aviso vermelho no subtitle.
Quando tiver autenticado, colocar a lista de usuários na home



especificações do professor

1. Ao digitar um usuário e senha inválidos troque a cor da label do input para vermelho. 
useState() // inputColor, setInputColor // setInputColor("red")
2. Exiba uma mensagem utilizando o nosso <Subtitle /> para informar 
ao usuário que ele digitou suas credenciais inválidas. Renderização Condicional
*/

//1:20h

const Login = () => {
  const navigate = useNavigate();

  const goHome = () => {
    const find = user.find((u) => u.email === email && u.password === pass);
    if (find) {
      navigate("/home");
    } else {
      // setSubtitle("*credenciais inválidas");
      setError(true);
      setInputColor("rgb(190, 41, 41)");
    }
  };

  const [user, setUser] = useState([
    {
      email: "ivina@gmail.com",
      password: "123456",
    },
    {
      email: "joao@gmail.com",
      password: "654321",
    },
    {
      email: "maria@gmail.com",
      password: "111111",
    },
  ]);
  //armazena o valor do email
  const [email, setEmail] = useState("");
  //armazena o valor da senha
  const [pass, setPass] = useState("");

  //const [subtitle, setSubtitle] = useState("");
  const [state, setState] = useState("Login");
  const [error, setError] = useState(false);
  const [inputColor, setInputColor] = useState("rgba(255, 255, 255, 0.795)");

  return (
    <div className="App">
      <section className="App-section">
        <div className="div-login">
          <Title id="title-login" title={state} styleTitle="title" />
          {error ? (
            <SubTitle
              style={{
                color: "rgb(190, 41, 41)",
                width: "100%",
                wordBreak: "break-all",
                textAlign: "right",
              }}
              text={"*credenciais inválidas"}
            />
          ) : null}

          <InputLogin
            style={inputColor}
            type="text"
            label="Usuário"
            dataLogin={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputLogin
            style={inputColor}
            type="password"
            label="Senha"
            dataLogin={(e) => {
              setPass(e.target.value);
            }}
          />
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
