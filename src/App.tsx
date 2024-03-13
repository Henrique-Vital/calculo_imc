import { useState } from 'react'
import imcLogo from './assets/imc.png'
import './App.css'

function App() {
  
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [imc, setImc] = useState(null);

  const calculateIMC = () => {
    const heightInMeters = parseFloat(height) / 100; // Converter para número
    const imc = parseFloat(weight) / (heightInMeters * heightInMeters); // Converter para número
    setImc(imc.toFixed(2));
  };
  const abaixoPeso = "“Abaixo do peso”: “Seu IMC está abaixo do normal. Embora estar abaixo do peso nem sempre seja um problema de saúde, é importante conversar com um profissional de saúde para garantir que você está recebendo os nutrientes necessários para manter seu corpo saudável.”"; 
  const pesoNormal = " “Peso normal”: “Seu IMC está dentro da faixa normal, o que geralmente indica um equilíbrio saudável entre altura e peso. Continue mantendo um estilo de vida saudável, incluindo uma dieta equilibrada e atividade física regular.” ";
  const sobrePeso = "“Sobrepeso”: “Seu IMC indica que você está acima do peso. Isso pode aumentar o risco de certas condições de saúde, como doenças cardíacas e diabetes tipo 2. É recomendável conversar com um profissional de saúde sobre possíveis etapas para alcançar e manter um peso saudável.”";
  const obesiDade = "“Obesidade”: “Seu IMC indica obesidade. Isso pode aumentar significativamente o risco de várias condições de saúde, incluindo doenças cardíacas, diabetes tipo 2 e certos tipos de câncer. É altamente recomendável procurar aconselhamento médico para discutir um plano de gerenciamento de peso.”";

  const interpretIMC = () => {
    if (imc) {
      if (parseFloat(imc) < 18.5) {
        return abaixoPeso;
      } else if (parseFloat(imc) < 24.9) {
        return pesoNormal;
      } else if (parseFloat(imc) < 29.9) {
        return sobrePeso;
      } else {
        return obesiDade;
      }
    }
    return "";
  };

  return (
    <>
      <div>
        <a>         
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={imcLogo} className="logo" alt="Imc logo" />
        </a>
      </div>
      <h1>Calculadora de IMC</h1>
      <div>
      <label>
        Altura (cm):
        <input type="number" className='inputaltura' value={height} onChange={e => setHeight(e.target.value)} />
      </label>
      <label>
        Peso (kg):
        <input type="number" className='inputaltura' value={weight} onChange={e => setWeight(e.target.value)} />
      </label>
      <button onClick={calculateIMC}>Calcular</button>
      {imc && <p>Seu IMC é: {imc} ({interpretIMC()})</p>}
    </div>
      <p>
        Curiosidades!
      </p>
      <p className="curiosidades">
      Você sabia que o IMC, ou Índice de Massa Corporal, foi desenvolvido pelo matemático belga Adolphe Quetelet no século XIX? Ele criou o IMC como parte de um campo de estudo que ele chamou de “antropometria social”, que buscava identificar padrões na constituição física do corpo humano. No entanto, é importante notar que o IMC foi originalmente destinado para uso em estudos populacionais e não para avaliar a saúde individual. É por isso que, embora o IMC seja uma ferramenta útil, ele tem suas limitações e não deve ser a única medida usada para avaliar a saúde de uma pessoa.
      </p>
    </>
  )
}

export default App
