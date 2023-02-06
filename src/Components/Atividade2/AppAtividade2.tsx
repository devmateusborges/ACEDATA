import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import "./style.css";

import { Atividade2ShowOrHide } from "../../store/utilStore";

const AppAtividade2 = () => {
  const [input1, setInput1] = useState(0);
  const [qtdinputs, setQtdInputs] = useState<any[]>([]);
  const [valueinputs, setValueInputs] = useState<any[]>([]);

  //============================================================

  const ShowAtv2 = useSelector(
    (state: RootState) => state.util.Atividade2ShowOrHide
  );

  const dispatch = useDispatch();
  //============================================================

  return (
    <>
      {ShowAtv2 && (
        <div className="Card-Ativ">
          <div className="Card-Top relative">
            <h1>Atividade 2</h1>
            <button
              className="absolute right-1"
              onClick={() => dispatch(Atividade2ShowOrHide(false))}
            >
              Close
            </button>
          </div>
          <p className="text-p">
            Desenvolver um sistema que receba uma sequência de números digitada
            pelo usuário. O primeiro valor informado será a quantidade de
            números a ser digitada, e em seguida, a sequência de números. No
            final o sistema deverá apresentar:
            <br />
            a) A própria sequência digitada pelo usuário.
            <br />
            b) O menor e o maior número da sequência. <br />
          </p>
          <div className="title-div">
            <h1>Não fiz interface</h1>
          </div>
          <div className="mt-5">
            <a
              target={"_blank"}
              className="button_atv2"
              href="https://replit.com/@MateusBorges6/ACEDATA#index.js"
            >
              TESTAR
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default AppAtividade2;
