function noData() {
  alert("Não há pessoas neste mês/data.");
}

// Botão VOLTAR AO TOPO

//const backToTopButton = document.getElementById("buttonTop");
//window.addEventListener("scroll", () => {
  //backToTopButton.style.display = window.scrollY > 1500 ? "block" : "none";
//});

// Botão IR PARA O FIM
//const backToEndButton = document.getElementById("buttonBottom");
//window.addEventListener("scroll", () => {
  //backToEndButton.style.display = window.scrollY > 1500 ? "none" : "block";
//});


// Notificação automática
document.addEventListener("DOMContentLoaded", () => {
  if ("Notification" in window) {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        verificarAniversariantesHoje();
      }
    });
  }
});

// Verifica se há aniversariante hoje
function verificarAniversariantesHoje() {
  const hoje = new Date();
  const dia = hoje.getDate();
  const mes = hoje.getMonth() + 1;

  // Lista de aniversariantes
  const aniversariantes = {
    "1-9": "Lorrany",
    "1-24": "Murilo",
    "1-31": "Halysson",
    "2-2": "Letícia",
    "2-8": "Da Luz",
    "2-17": "Rosimeire",
    "2-28": "Thalya",
    "3-12": "Rosilda",
    "3-20": "Rosenilda",
    //"4-x": "-",
    "5-11": "Adailza",
    "5-31-": "Nalvinha",
    //"6-x": "-",
    "7-19": "Cris",
    "7-28": "Sheila",
    "7-28": "Ninha",
    "8-8": "Severina Jorge",
    "8-10": "Adriana",
    "8-28": "Piedade Nascimento",
    "9-29": "Lucenildo",
    "10-2": "Misael",
    "11-12": "Marinalva",
    "11-20": "Yama",
    "11-21": "Da Paz",
    "12-3": "Josinete",
    "12-30": "Aparecida",

    "5-9": "Aparecida"
  };

  const chaveHoje = `${mes}-${dia}`;
  if (aniversariantes[chaveHoje]) {
    exibirNotificacao(`🎉 Hoje é aniversário de ${aniversariantes[chaveHoje]}!`);
  } else {
    exibirNotificacao("📅 Hoje não há aniversariantes do grupo.");
  }
}

// Exibe notificação
function exibirNotificacao(mensagem) {
  if (Notification.permission === "granted") {
    const notification = new Notification("Aniversariantes - Fortalecidos na Fé", {
      body: mensagem,
      icon: "/img/icons/nssap-icon.jpg"
    });

    // Abre a página ao clicar
    notification.onclick = () => {
      window.open("../../index.html");
    };

    setTimeout(() => {
      notification.close();
    }, 5000); 
  }
}

/* API para copiar texto */
let copyP = document.getElementById("name");
let ministerio = document.getElementById("minister");

copyP.addEventListener('click', () => {
    
    navigator.clipboard.writeText(copyP.textContent)
        .then(() => {
            console.log('Mensagem copiada: ' + copyP.textContent);
            alert('Mensagem copiada: ' + copyP.textContent);
        })
        .catch(err => {
            console.error('Erro ao copiar: ', err);
        });

  ministerio.addEventListener('click', () => {
      let textoParaCopiar = "Ministério " + ministerio.textContent;
          
        navigator.clipboard.writeText(textoParaCopiar)
            .then(() => {
                console.log('Mensagem copiada: ' + textoParaCopiar);
                alert('Mensagem copiada: ' + textoParaCopiar);
            })
            .catch(err => {
                console.error('Erro ao copiar: ', err);
            });
      });
      
});

function clickMenu() {
  const navItems = document.getElementById("itensNav");
  const open = document.getElementById("burgerIcon");
  const close = document.getElementById("closeIcon");
  const backNav = document.getElementById("backNav");

  navItems.style.display = 'none';
  backNav.style.display = 'none';
  
  open.addEventListener('click', () => {
    open.style.display = 'none';
    close.style.display = 'block';
    navItems.style.display = 'block';
    backNav.style.display = 'block';
  });

  close.addEventListener('click', () => {
    open.style.display = 'block';
    close.style.display = 'none';
    navItems.style.display = 'none';
    backNav.style.display = 'none';
  });
}