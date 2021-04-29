  window.addEventListener('resize', () => { //mudar tamanho da tela de acordo com resize
    var tam = innerWidth; //recebendo valor de width interno da pagina
    r.style.setProperty('--tela-width', tam + 'px') // convertando o valor para px e setando no root
  });

  function mudarBg(){ //Criação da animação de slides

    //const slide = document.querySelector('#slidePart')
    const images = [
      'url(../imagens/01.jpg)', //caminho das imagens
      'url(../imagens/02.jpg)',
      'url(../imagens/03.jpg)',
      'url(../imagens/04.jpg)',
      /**
       * Créditos
       * 01 = https://pixabay.com/pt/photos/reino-unido-nuvens-escuro-690293/
       * 02 = https://pixabay.com/pt/photos/mar-pôr-do-sol-barco-vela-164989/
       * 03 = https://pixabay.com/pt/photos/árvore-pôr-do-sol-nuvens-736885/
       * 04 = https://pixabay.com/pt/photos/pôr-do-sol-rio-árvores-panorama-5903426/
       */
    ]
    const bg = images[Math.floor(Math.random() * images.length)];//randomizando a imagem do slide
    r.style.setProperty('--tela-bg',bg); //alterando o background-image da section
    }

  setInterval(mudarBg, 15000) //alteração de slide no tempo 15000 = 15s
  window.onload = () =>{
  
    r = document.querySelector(':root'); //recebendo o root para alteração de variaveis
    /*
     * criação das particulas 
        forma padrão = particlesJS.load('elemento Que Recebera Partciulas', 'Local do config do json');
        porem arquivos locais n permitem a leitura de json então foi colocado inline o arquivo
        nesse caso se tira o .load da função
        Ex: 
        particlesJS.load('slidePart', 'particlesjs-config'); 
    */ 
    particlesJS('slidePart',{
      "particles": {
        "number": {
          "value": 202,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
  });
}