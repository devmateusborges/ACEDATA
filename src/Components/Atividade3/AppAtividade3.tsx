import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Atividade3ShowOrHide } from "../../store/utilStore";

const AppAtividade3 = () => {
  const [Atvi1, setAtivi1] = useState<any>();
  const [number, setNumber] = useState("");
  const [resAtv, setResAtv] = useState("");
  const [sequencia, setsequancia] = useState<number[]>([]);
  //============================================================

  const ShowAtv3 = useSelector(
    (state: RootState) => state.util.Atividade3ShowOrHide
  );

  const dispatch = useDispatch();
  //============================================================

  const handleAtv3 = () => {
    let NumeroDigitado = Number(number);
    let Number_ant = 0;
    let Number_atual = 1;
    let contador = 1;
    let Number_prox;
    let estaNaSquencia = false;

    while (contador < NumeroDigitado) {
      Number_prox = Number_atual + Number_ant;
      Number_ant = Number_atual;
      Number_atual = Number_prox;

      sequencia[0] = 1;
      sequencia[contador] = Number_atual;

      if (NumeroDigitado == Number_prox) {
        estaNaSquencia = true;
      }

      contador++;
    }

    if (NumeroDigitado == 1 || NumeroDigitado == 2 || NumeroDigitado == 3) {
      estaNaSquencia = true;
    }

    if (estaNaSquencia) {
      setResAtv(
        "O número " + NumeroDigitado + " faz parte da sequencia Fibonacci"
      );
    } else {
      setResAtv(
        "O número Não " + NumeroDigitado + " faz parte da sequencia Fibonacci"
      );
    }
  };
  //============================================================

  return (
    <>
      {ShowAtv3 ? (
        <div className="Card-Ativ">
          <div className="Card-Top relative">
            <h1>Atividade 3</h1>
            <button
              className="absolute right-1"
              onClick={() => dispatch(Atividade3ShowOrHide(false))}
            >
              Close
            </button>
          </div>
          <p className="text-[15pt] font-semibold">
            Os números de Fibonacci formam uma sequência em que cada número é
            igual à soma dos dois anteriores. Os dois primeiros números são, por
            definição, iguais a 1. Veja o exemplo a seguir: 1 1 2 3 5 8 13 ...
            Escreva um programa que carregue um valor N pelo teclado e:
            <br />
            <br />
            a) iImprima os N primeiros números da sequência de Fibona;
            <br />
            <div className="grid grid-flow-row">
              {resAtv &&
                sequencia.map((numbers: any) => (
                  <span className="flex ml-2">{numbers}</span>
                ))}
            </div>
            <br />
            b) Indique se N faz parte da sequência de Fibonacci
            <br />
            <p className="text-left font-semibold text-2xl  text-slate-500">
              {resAtv}
            </p>
            <br />
          </p>

          <div className="flex w-[100%]">
            <div className="flex flex-col w-[50%]">
              <input
                className=" shadow-slate-500 shadow-sm rounded-lg outline-none m-5 p-5"
                value={number}
                type="text"
                placeholder="Digite um Numero"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          </div>
          <button className="Button-Card" onClick={() => handleAtv3()}>
            Executar
          </button>
        </div>
      ) : null}
    </>
  );
};

export default AppAtividade3;
