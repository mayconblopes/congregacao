import React, { useEffect, useState } from 'react'
import Citacoes from '../utils/citacoes.json'

function FeaturesBlocks() {
  const citacoes = Citacoes
  const [citacao, setCitacao] = useState({})

  useEffect(() => {
    setCitacao(citacoes[0])
  }, [])

  function handleNewQuote() {
    let randomIndex = Math.floor(Math.random() * citacoes.length)
    setCitacao(citacoes[randomIndex])
  }

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h3 mb-4">{citacao.versiculo}</h2>
            <p className="text-xl text-gray-400">{citacao.localizacao}</p>
            <button
              className="btn-sm text-white bg-gray-600"
              onClick={handleNewQuote}
            >
              Nova citação
            </button>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
              >
                <path d="M352.817 746Q312 746 284 717.817q-28-28.183-28-69T284.183 580q28.183-28 69-28T422 580.183q28 28.183 28 69T421.817 718q-28.183 28-69 28ZM180 976q-24 0-42-18t-18-42V296q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600V486H180v430Zm0-490h600V296H180v130Zm0 0V296v130Z" />
              </svg>
              <h4 className="h4 mb-2">Cultos</h4>
              <p className="text-lg text-gray-400 text-center">
                Quarta-feira: 19h30min
              </p>
              <p className="text-lg text-gray-400 text-center">
                Domingo: 19h00min
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
              >
                <path d="M480 758q103.95-83.86 156.975-161.43Q690 519 690 452q0-59-21.5-100t-53.009-66.88q-31.51-25.881-68.271-37.5Q510.459 236 480 236q-30.459 0-67.22 11.62-36.761 11.619-68.271 37.5Q313 311 291.5 352T270 452q0 67 53.025 144.57T480 758Zm0 76Q343 731 276.5 636.801q-66.5-94.2-66.5-184.554Q210 384 234.5 332.5T298 246q39-35 86.98-52.5 47.98-17.5 95-17.5T575 193.5q48 17.5 87 52.5t63.5 86.533Q750 384.066 750 452.456 750 543 683.5 637 617 731 480 834Zm.089-318Q509 516 529.5 495.411q20.5-20.588 20.5-49.5Q550 417 529.411 396.5q-20.588-20.5-49.5-20.5Q451 376 430.5 396.589q-20.5 20.588-20.5 49.5Q410 475 430.589 495.5q20.588 20.5 49.5 20.5ZM210 976v-60h540v60H210Zm270-524Z" />
              </svg>
              <h4 className="h4 mb-2">Endereço</h4>
              <p className="text-lg text-gray-400 text-center">
                Estrada da Lagoa de Cima, nº 290
              </p>
              <p className="text-lg text-gray-400 text-center">
                Bairro:Pernambuca (Ibitioca)
              </p>
              <p className="text-lg text-gray-400 text-center">
                Campos dos Goytacazes/RJ
              </p>
            </div>

            {/* 3nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
              >
                <path d="M341 989q-48 0-85-28.5T204 887q-16 26-39 40.5T110 942q-47 0-78-33T1 831q0-49 30.5-77.5T109 724q-18-20-28-46.5T71 624q0-38 19.5-71t55.5-53q5 13 12.5 28t15.5 26q-20 13-31.5 32T131 626q0 60 48.5 75.5T273 726l11 19q-12 35-19.5 57.5T257 844q0 34 25.5 59.5T342 929q41 0 67.5-34.5t43-82q16.5-47.5 25.5-96t15-75.5l58 16q-9 43-21 100t-34.5 108.5Q473 917 436.5 953T341 989ZM111 882q21 0 35.5-14.5T161 832q0-21-14.5-35.5T111 782q-21 0-35.5 14.5T61 832q0 21 14.5 35.5T111 882Zm300-190q-45-40-82-74.5T265.5 550q-26.5-33-41-65T210 417q0-60 42-102t102-42q9 0 17 .5t16 2.5q-9-17-13-29t-4-24q0-46 32-78t78-32q46 0 78 32t32 78q0 11-3.5 23.5T573 276q8-2 16-2.5t17-.5q57 0 96.5 36.5T748 400q-14-1-30-.5t-30 2.5q-5-30-27-49.5T606 333q-37 0-58.5 20.5T490 416h-21q-37-44-58.5-63.5T354 333q-36 0-60 24t-24 60q0 24 13 49t37 53.5q24 28.5 58 60t76 69.5l-43 43Zm69-419q21 0 35.5-14.5T530 223q0-21-14.5-35.5T480 173q-21 0-35.5 14.5T430 223q0 21 14.5 35.5T480 273Zm138 717q-22 0-43.5-7T533 962q8-12 16-27t13-28q14 11 28.5 16.5T620 929q35 0 59.5-25.5T704 844q0-20-8-42.5T677 745l11-19q46-8 94-23.5t48-75.5q0-44-32-65.5T727 540q-42 0-99.5 16T494 597l-15-58q76-25 137-42t111-17q64 0 113.5 38.5T890 626q0 27-10 53t-28 46q46 1 77 30t31 77q0 45-31 78t-78 33q-31 0-55-14.5T757 888q-16 45-53 73.5T618 990Zm233-107q20 0 34.5-14.5T900 833q0-20-15-35.5T850 782q-20 0-35 15t-15 35q0 20 15.5 35.5T851 883Zm-740-51Zm369-609Zm370 609Z" />
              </svg>
              <h4 className="h4 mb-2">Liderança</h4>
              {/* <p className="text-lg text-gray-400 text-center">Ancião: ???</p> */}
              <p className="text-lg text-gray-400 text-center">
                Cooperador: João Batista dos Santos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesBlocks
