import { useDispatch } from "react-redux";
import "./style.css";
import {
  Atividade1ShowOrHide,
  Atividade2ShowOrHide,
  Atividade3ShowOrHide,
} from "../../store/utilStore";

const AppHeader = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="Header">
        <div className="Header-Buttons">
          <button
            onClick={() => {
              dispatch(Atividade1ShowOrHide(true)),
                dispatch(Atividade3ShowOrHide(false));
              dispatch(Atividade2ShowOrHide(false));
            }}
          >
            Atividade 1
          </button>
          <button
            onClick={() => {
              dispatch(Atividade2ShowOrHide(true)),
                dispatch(Atividade3ShowOrHide(false));
              dispatch(Atividade1ShowOrHide(false));
            }}
          >
            Atividade 2
          </button>
          <button
            onClick={() => {
              dispatch(Atividade3ShowOrHide(true)),
                dispatch(Atividade1ShowOrHide(false));
              dispatch(Atividade2ShowOrHide(false));
            }}
          >
            Atividade 3
          </button>
        </div>
      </div>
    </>
  );
};

export default AppHeader;
