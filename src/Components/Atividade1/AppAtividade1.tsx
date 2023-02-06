import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

import { Atividade1ShowOrHide } from "../../store/utilStore";
const AppAtividade1 = () => {
  const [nome, setNome] = useState("");
  const [valHora, setValHora] = useState("");
  const [horaMes, setHoraMes] = useState("");
  const [qtdFilho, setQtdFilho] = useState("");
  const [Atvi1, setAtivi1] = useState<any>();
  //============================================================
  const ShowAtv1 = useSelector(
    (state: RootState) => state.util.Atividade1ShowOrHide
  );
  //============================================================
  const dispatch = useDispatch();
  //============================================================
  const handleAtv1 = () => {
    if (!nome || !valHora || !horaMes || !qtdFilho) {
      console.log("Vazio");
    } else {
      let horames = Number(horaMes);
      let valhora = Number(valHora);
      let qtdfilho = Number(qtdFilho);
      let Salario_Bruto = horames * valhora;

      //============================================================
      if (Salario_Bruto <= 788) {
        let sum = 0;
        for (let i = 0; i < qtdfilho; i++) {
          Salario_Bruto += 30.5;
          sum += 30.5;
        }
        setAtivi1({
          nome: nome,
          qtd_filho: qtdfilho,
          salario_familha: sum,
          salario_bruto: Math.round(Salario_Bruto),
        });
      }
      //============================================================
      if (Salario_Bruto > 788 && Salario_Bruto <= 1100) {
        let sum1 = 0;
        for (let i = 0; i < qtdfilho; i++) {
          Salario_Bruto += 18.5;
          sum1 += 18.5;
        }
        setAtivi1({
          nome: nome,
          qtd_filho: qtdfilho,
          salario_familha: sum1,
          salario_bruto: Math.round(Salario_Bruto),
        });
      }
      //============================================================
      if (Salario_Bruto > 1100) {
        let sum2 = 0;
        for (let i = 0; i < qtdfilho; i++) {
          Salario_Bruto += 11.9;
          sum2 += 11.9;
        }
        setAtivi1({
          nome: nome,
          qtd_filho: qtdfilho,
          salario_familha: sum2,
          salario_bruto: Math.round(Salario_Bruto),
        });
      }
      //============================================================
    }
  };

  return (
    <>
      {ShowAtv1 ? (
        <div className="Card-Ativ">
          <div className="Card-Top relative">
            <h1>Atividade 1</h1>
            <button
              className="absolute right-1"
              onClick={() => dispatch(Atividade1ShowOrHide(false))}
            >
              Close
            </button>
          </div>
          <p className="text-[15pt] font-semibold">
            O Desenvolver um sistema para calcular o valor que será pago a um
            empregado horista usuário deverá informar o valor do salário hora, a
            quantidade de horas trabalhadas no mês e a quantidade de filhos
            menores de 14 anos. A partir daí o sistema deve calcular o salário
            bruto, salário família e o salário líquido do empregado (salário
            bruto + salário família). Para o cálculo do salário família, levar
            em consideração:
            <br />
            <br />
            a) Se o salário bruto for até R$ 788,00 o salário família será de R$
            30,50 para cada filho.
            <br />
            <br />
            b) Se o salário bruto for acima de R$ 788,00 até R$ 1.100,00 o
            salário família será de R$ 18,50 por filho.
            <br />
            <br />
            c) Se o salário bruto for acima de R$ 1.100,00 o salário família
            será de R$ 11,90 por filho.
            <br />
            <br />
          </p>

          <div className="flex w-[100%]">
            <div className="flex flex-col w-[50%]">
              <input
                className=" shadow-slate-500 shadow-sm rounded-lg outline-none m-5 p-5"
                value={nome}
                type="text"
                placeholder="Nome"
                onChange={(e) => setNome(e.target.value)}
              />
              <input
                className=" shadow-slate-500 shadow-sm rounded-lg outline-none m-5 p-5"
                value={valHora}
                type="text"
                placeholder="Valor Hora"
                onChange={(e) => setValHora(e.target.value)}
              />
              <input
                className=" shadow-slate-500 shadow-sm rounded-lg outline-none m-5 p-5"
                value={horaMes}
                type="text"
                placeholder="Horas trabalhadas no mês"
                onChange={(e) => setHoraMes(e.target.value)}
              />
              <input
                className=" shadow-slate-500 shadow-sm rounded-lg outline-none m-5 p-5"
                value={qtdFilho}
                type="text"
                placeholder="Quantidade de filhos"
                onChange={(e) => setQtdFilho(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-[50%] justify-center">
              <h1 className="text-center font-bold text-4xl">Resultado</h1>
              {Atvi1 && (
                <>
                  <p className="text-left font-semibold text-2xl  text-slate-500">
                    Nome : {Atvi1.nome}
                  </p>
                  <p className="text-left font-semibold text-2xl  text-slate-500">
                    Quantidade de filhos : {Atvi1.qtd_filho}
                  </p>
                  <p className="text-left font-semibold text-2xl text-slate-500">
                    Salario Familha : R${Atvi1.salario_familha}
                  </p>
                  <p className="text-left font-semibold text-2xl  text-slate-500">
                    Salario Bruto : R${Atvi1.salario_bruto}
                  </p>
                </>
              )}
            </div>
          </div>
          <button className="Button-Card" onClick={() => handleAtv1()}>
            Executar
          </button>
        </div>
      ) : null}
    </>
  );
};

export default AppAtividade1;
