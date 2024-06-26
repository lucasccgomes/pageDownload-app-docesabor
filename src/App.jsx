/* eslint-disable no-unused-vars */
import React from "react"
import Logo from "./assets/logo.jpeg"
import DownloadIcon from "./assets/baixar.png"

export default function App() {
  return (
    <div className="w-full h-screen bg-[#ffe0e8]">
      <div className="flex flex-col justify-center items-center mx-8 ">
        <h1 className="text-2xl font-bold text-center text-amber-950 mt-8">
          Bem-vindo à Página de Download do App Doce Sabor
        </h1>
        <img src={Logo} alt="Logo" />
        <div className="-mt-24">
          <h2 className="font-semibold text-center mb-3  text-amber-950">Pronto para experiência?</h2>
          <h3 className="font-medium mb-2  text-amber-950">Siga estes passos para começar:</h3>
          <ol className="list-decimal text-xs  text-amber-950">
            <li className="mb-1">Clique no botão abaixo para baixar o aplicativo.</li>
            <li className="mb-1">Permita a instalação de aplicativos de fontes desconhecidas nas configurações do seu dispositivo Android.</li>
            <li className="mb-1">Abra o arquivo baixado e instale o aplicativo Doce Sabor.</li>
            <li className="mb-1">Abra o app, faça seu pedido e prepare-se para uma delícia!</li>
          </ol>
        </div>
        <a href="https://drive.google.com/file/d/1u3cuWKVc0Z_3kTRhz37-Em6f263uhhMK/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <div className="flex bg-green-700 p-3 rounded-3xl text-white font-semibold mt-3">
            <img className="w-6 mr-2" src={DownloadIcon} alt="Download icon" />
            Download
          </div>
        </a>

        <div className="my-4">
          <p className="font-bold ">Nota</p><p className="text-xs  text-amber-950">Este é um lançamento exclusivo e antecipado. Seu feedback é importante para nós — por favor, envie suas impressões e sugestões para
           <a 
           className="bg-yellow-400 rounded-xl p-1 ml-1"
           href="https://api.whatsapp.com/send?phone=+5547991399367&text=Ol%C3%A1+eu+gostaria+de+fazer+algumas+sugest%C3%B5es+para+o+app+DoceSabor." target="_blank" rel="noopener noreferrer">Desenvolvedor</a></p>
        </div>
      </div>
    </div>
  )
}