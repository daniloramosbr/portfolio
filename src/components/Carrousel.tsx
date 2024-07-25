import React, { Component } from "react";
import Slider from "react-slick";
import { Tooltip } from "@nextui-org/react";
import Image from "next/image";

function Carrousel() {

  const settings = {
    
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    className: "center",
    infinite: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };
  
  return (
    <div className="slider-container">
      <Slider {...settings}>

     
      <div className="flex cont-chat">
       <Tooltip  content='Projeto Full-Stack onde é possivel fazer login e enviar valores a usúarios cadastrados.'>
       <Image src="bank.png" alt="bank" className="border border-gray-500 w-full"/>
       </Tooltip>
          <Tooltip placement="bottom" content='Ver Projeto'>
          <button className="header-one h-60 w-full mt-3">
      <span className="header-two"></span>
        <a href="https://simula-bank.vercel.app/" target="blank" className="header-three w-full flex-col h-60 text-md">
          <h2>
          BANCO VIRTUAL
          </h2>
        </a>
      </button>
          </Tooltip>
        </div>

        <div className="flex cont-chat">
        <Tooltip  content='Chat para web que contém login e autenticação, criação e envio de mensagens e outras funções.'>
        <Image alt="chat" src="chat.png" className="border border-gray-500"/>
        </Tooltip>
         
          <Tooltip placement="bottom" content='Ver Projeto'>
        <button className="header-one w-full mt-3">
      <span className="header-two"></span>
        <a href="https://daniloramosbr.github.io/webchat/" target="blank" className="header-three w-full text-md">
          WEBCHAT
        </a>
      </button>
        </Tooltip>
        </div>

       

        <div className="flex cont-chat">
        <Tooltip  content='Projeto Front-End de uma galeria de fotos com aba de pesquisa etc...'>
        <Image alt="galeria" src="galeria.png" className="border border-gray-500"/>
        </Tooltip>
          <Tooltip placement="bottom" content='Ver Projeto'>
        <button className="header-one w-full mt-3">
      <span className="header-two"></span>
        <a href="https://daniloramosbr.github.io/galeria/" target="blank" className="header-three w-full text-md">
          GALERIA DE FOTOS
        </a>
      </button>
        </Tooltip>
        </div>

                
        <div className="flex cont-chat">
        <Tooltip  content='Sistema de reserva que contém login com o google e criação de reservas.'>
        <Image alt="reserva" src="reserva.png" className="border border-gray-500"/>
        </Tooltip>
          <Tooltip placement="bottom" content='Ver Projeto'>
        <button className="header-one w-full mt-3">
      <span className="header-two"></span>
        <a href="https://daniloramosbr.github.io/reserva/" target="blank" className="header-three w-full text-md">
          SISTEMA DE RESERVAS
        </a>
      </button>
          </Tooltip> 
        </div>



        <div className="flex cont-chat">
        <Tooltip  content='Projeto que mostra informações de filmes, e que contém uma aba de pesquisa.'>
        <Image alt="filmes" src="filmes.png" className="border border-gray-500"/>
        </Tooltip>
        
        <Tooltip placement="bottom" content='Ver Projeto'>

        <button className="header-one w-full mt-3">
      <span className="header-two"></span>
        <a href="https://daniloramosbr.github.io/filmes/" target="blank" className="header-three w-full text-md">
          INFO FILMES
        </a>
      </button>
        </Tooltip>
        </div>

      
      
        <div className="flex cont-chat">
        <Tooltip  content='Projeto Full Stack de uma Loja Virtual com carrinho de compras, modo noturno e etc...'>
        <Image alt="loja" src="loja.png" className="border border-gray-500"/>
        </Tooltip>
          <Tooltip placement="bottom" content='Ver Projeto'>
        <button className="header-one w-full mt-3">
      <span className="header-two"></span>
        <a href="https://daniloramosbr.github.io/store/" target="blank" className="header-three w-full text-md">
          LOJA VIRTUAL
        </a>
      </button>
        </Tooltip>
        </div>

    
      </Slider>
    </div>
  );
}

export default Carrousel;