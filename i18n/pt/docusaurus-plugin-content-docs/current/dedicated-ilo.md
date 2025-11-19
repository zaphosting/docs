---
id: dedicated-ilo
title: "Servidor Dedicado: iLO"
description: "Descubra como gerenciar totalmente seu Servidor Dedicado Enterprise com iLO para controle e monitoramento sem complicações → Saiba mais agora"
sidebar_label: iLO
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Nos nossos Servidores Dedicados Enterprise usamos a interface de gerenciamento iLO, que permite controle total e sem restrições do seu servidor.  
Suas funcionalidades incluem ligar/desligar/reiniciar o servidor, console de gerenciamento via Java ou HTML5, montagem de mídia de boot (ISOs).  
Modifique as configurações com cuidado, pois alterações erradas podem causar grandes problemas.

## Acesso ao iLO
Abra o dashboard do seu Servidor Dedicado ZAP com o navegador de sua preferência. Lá você já encontrará as informações mais importantes sobre seu iLO.  
Para ativar o iLO, basta clicar em "Ativar iLO".  
![](https://screensaver01.zap-hosting.com/index.php/s/grj9PxttLKiZg6m/preview)

Lembre-se que pode levar alguns segundos até o iLO estar totalmente disponível.  
Quando o sistema iniciar a interface de gerenciamento e ela estiver acessível, você verá as informações de login.  
Para abrir o iLO, clique no endereço IP exibido e use as credenciais para entrar.

![](https://screensaver01.zap-hosting.com/index.php/s/MJeEW2LLrjxsAGN/preview)

Após um momento, você estará logado na interface de administração do seu servidor dedicado.  
Aqui você encontrará várias informações importantes:

![](https://screensaver01.zap-hosting.com/index.php/s/BGWGXDRgS9A74dB/preview)

### Visão Geral
* **Saúde do Sistema**  
Geralmente deve estar verde. A cada inicialização, o hardware do seu servidor faz uma checagem automática; se houver problemas, o sistema os reporta imediatamente.  
As variações possíveis são: verde (OK), amarelo (Degradado) e vermelho (Crítico). Pode acontecer do servidor mostrar seu SSD como degradado, normalmente isso não é um problema.  
Claro que você pode informar o suporte, que vai verificar se é necessário alguma ação. Se o status estiver vermelho ("Crítico"), informe o suporte imediatamente.  
O primeiro passo para resolver o problema deve ser sempre um reboot completo do servidor.

* **Saúde do iLO**  
Mostra mais informações sobre os parâmetros do iLO, não deve haver mudanças significativas.  
Não é necessário modificar nada nessa aba.

* **Energia do Servidor**  
Mostra o status do seu servidor, por exemplo "ON" significa que ele está ligado.

* **Console Remoto Integrado**  
Aqui você pode visualizar seu servidor e executar comandos diretamente.  
As consoles remotas diferem em dois aspectos:  
HTML5 é iniciada direto no navegador, sem precisar de software externo.  
Java Web Start, como o nome diz, usa Java para abrir a console de gerenciamento.  
Qualquer aviso de segurança pode ser ignorado com segurança.  
Como conectar passo a passo ao seu servidor via console remota você encontra nas instruções detalhadas.

* **Sessões Ativas**  
Aqui você vê todos os usuários conectados ao iLO no momento.

### Log de Eventos do iLO
Registra todas as alterações feitas via iLO, como logins, liga/desliga do servidor e mudanças nas configurações.

### Log de Gerenciamento Integrado
Armazena todas as informações relevantes do hardware, por exemplo os resultados do POST (Power on Self Test) que é executado a cada inicialização.  
Se houver problemas no hardware do seu servidor dedicado, eles aparecerão aqui.

### Mídia Virtual
A integração de mídias de boot próprias (ISOs) é feita pelo submenu "Conectar CD/DVD-ROM".  
A ordem de boot do servidor está configurada para sempre iniciar por um ISO registrado primeiro, por padrão.  
A ordem pode ser alterada no menu "Ordem de Boot".

![](https://screensaver01.zap-hosting.com/index.php/s/6ezDgt2dsCMwEam/preview)

Em "URL da Mídia Scriptada" você deve inserir o link completo do ISO que quer montar, por exemplo: http://meudominio.com/bootimage.iso  
O link deve apontar diretamente para o ISO, terminando com .iso.  
Depois clique em "Inserir Mídia" e reinicie seu servidor em "Gerenciamento de Energia".  
O servidor vai carregar o ISO inserido.

### Gerenciamento de Energia
Neste menu você pode fazer tudo relacionado a ligar e desligar seu Servidor Dedicado ZAP.

![](https://screensaver01.zap-hosting.com/index.php/s/NHW8iafC3zjcsJG/preview)

* **Desligamento Suave**  
Desliga seu servidor de forma segura, igual apertar o botão de energia do seu notebook/computador uma vez.  
Todos os aplicativos são fechados corretamente e o servidor desliga de forma programada.  
Claro que isso pode levar algum tempo dependendo dos apps.

* **Desligamento Forçado**  
Se precisar desligar o servidor imediatamente, sem esperar, essa é a opção certa. É equivalente a puxar o cabo de energia.  
O sistema desliga na hora, sem demora.

* **Reinício Forçado**  
Faz um reboot imediato do sistema.

### Medidor de Energia
Mostra o consumo médio de energia do seu sistema, basicamente quanto maior o consumo, maior a carga no sistema.

### Rede
Mostra a configuração de rede do seu iLO, lembre que essas configurações não têm relação com a rede do seu servidor em si.

:::info
Para configurar seu servidor ou se o acesso via rede não funcionar, você sempre pode acessar diretamente o servidor.
:::

## Consoles Remotas (Display)
O iLO oferece dois tipos diferentes de consoles remotas por padrão:

![](https://screensaver01.zap-hosting.com/index.php/s/cozRqRt9KLTMCkd/preview)

### Console HTML5
Com um clique você já está no seu servidor, não precisa de software externo e é aberto direto no navegador.  
Oferece várias ferramentas úteis:

![](https://screensaver01.zap-hosting.com/index.php/s/G8DjtHYnJosiQBy/preview)

* 1 - configurações de gerenciamento de energia (ligar, desligar, reiniciar) do servidor  
* 2 - envio de atalhos de teclado (exemplo CTRL + ALT + DEL)  
* 3 - inclusão de ISOs > CD/DVD > URL da Mídia Scriptada  
* 4 - Saúde do Sistema  
* 5 - Status de Energia do Servidor (ON / OFF)

Se seu servidor tiver interface gráfica (GUI), você pode usar o mouse normalmente e o teclado também será transmitido.

### Console Java
Para usar a Console Java você precisa ter o Java instalado. (Pode ser baixado em java.com)  
:::info
Qualquer mensagem de segurança pode ser ignorada.
:::

Ao abrir o arquivo, aparece a mensagem abaixo, confirme com "Continuar".  
![](https://screensaver01.zap-hosting.com/index.php/s/nByYm3X8DXNHXmP/preview)

Reconheça o risco e confirme com "Executar".

![](https://screensaver01.zap-hosting.com/index.php/s/eWzpyXgQPWWz4J4/preview)

Agora a console Java abre.  
:::info
O aplicativo costuma mudar o layout do teclado para "EN".
:::

![](https://screensaver01.zap-hosting.com/index.php/s/kAp5rddEDjdLNwi/preview)

* 1 - configurações de gerenciamento de energia (ligar, desligar, reiniciar) do servidor  
* 2 - inclusão de ISOs > URL CD/DVD-ROM  
* 3 - envio de combinações de teclas (ex: CTRL + ALT + DEL)  
* 4 - Saúde do Sistema  
* 5 - Status de Energia do Servidor (ON / OFF)

Se seu servidor tiver interface gráfica (GUI), você pode usar o mouse normalmente e o teclado também será transmitido.

## Problemas Comuns, Dicas & Truques

* O servidor trava no POST (Power on Self Test) e não inicia mais.  
Conecte-se a uma console remota e veja exatamente onde o servidor trava. Aparecem erros?  
Desligue o servidor em Gerenciamento de Energia por alguns segundos (Desligamento Forçado) e ligue novamente (Pressionar Momentaneamente).  
Se ainda não iniciar, contate o suporte.

* ISO não está carregando.  
Verifique se o link do ISO está correto, o teste mais fácil é colar o link no navegador; se iniciar download, está certo.  
Confirme que o link está correto em Mídia Virtual e que o servidor foi reiniciado. Veja também a ordem de boot e se o drive CD/DVD está no topo.

* Meu servidor demora muito para iniciar.  
O hardware Enterprise usado demora para bootar, isso é normal. Pode levar até 10-15 minutos.

* Não consigo abrir o iLO mais.  
Verifique se o iLO está ativado no dashboard do servidor, por segurança a interface de gerenciamento desliga automaticamente após um tempo.  
Você pode desativar e ativar o iLO novamente. (Espere pelo menos 5 minutos após ativar)

## Conclusão

Isso deve facilitar muito sua administração depois de ler tudo com calma. Para dúvidas ou ajuda, não hesite em contatar nosso suporte, disponível diariamente para te ajudar! 🙂