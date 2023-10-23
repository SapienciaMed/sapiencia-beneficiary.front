import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../common/contexts/app.context";
const { setMessage } = useContext(AppContext);
const navigate = useNavigate();

export const MainHook  =() => {
  const handleCancel = () => {
    setMessage({
      title: "Regresar",
      description: "¿Está segur@ de regresar?",
      show: true,
      okTitle: "Aceptar",
      cancelTitle: "Cancelar",
      background: true,
      onOk: () => {
        setMessage({ show: false });
        navigate("#");
      },
      onCancel: () => {
        setMessage({ show: false });
      },
      onClose: () => setMessage({ show: false }),
    });
  };

  return {
    handleCancel
  }
}
