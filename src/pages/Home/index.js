import "../../App.css";
import ButtonDefault from "../../components/Button";
import Title from "../../components/Title/index";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const clickAction = () => {
    return navigate("/");
  };

  return (
    <div className="App">
      <section className="section-default">
        <Title title="Home" styleTitle="style-title" />
        <ButtonDefault
          redirection={clickAction}
          name="Voltar"
          divButton="button-home"
        />
      </section>
    </div>
  );
};

export default Home;
