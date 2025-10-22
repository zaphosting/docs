---
id: dedicated-windows-fs-22
title: "Servidor Dedicado: Configuração do Servidor Dedicado Farming Simulator 2022 no Windows"
description: "Descubra como configurar o Servidor Dedicado Farming Simulator 2022 no seu VPS Windows ou servidor dedicado → Saiba mais agora"
sidebar_label: Farming Simulator 2022
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você tem um VPS Windows ou servidor dedicado e quer instalar o serviço do Servidor Dedicado Farming Simulator 2022 nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor.

<InlineVoucher />

## Preparação
É necessário um servidor baseado em Windows Server 2016/2019 com pelo menos 4x CPU de 2,4 GHz (AMD/Intel) e no mínimo 2GB de RAM (DDR3/4) e 6GB de disco livre (SSD ou melhor, preferencialmente). O servidor deve rodar em arquitetura 64 bits.  
Além disso, é necessária uma licença própria do jogo (não pode ser a versão Steam), assim como um endereço IPv4 público. GPU ou placa de som não são necessários para o Servidor Dedicado.  
Dependendo do quanto o servidor dedicado for modificado, estendido com mods ou DLCs, pode ser que sejam necessários mais recursos. 


## Passo 1 Comprar licença digital

É necessária uma versão digital do Farming Simulator 2022, não pode ser a versão Steam.  
A versão digital pode ser adquirida no [site oficial do Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Após a compra da versão digital, o Farming Simulator pode ser baixado online seguindo o link abaixo [Link](https://eshop.giants-software.com/downloads.php) enviado no e-mail que você recebeu da Giants.  
:::info
Importante: No e-mail você encontrará a GameKey necessária para o download e também para a ativação posterior da instalação. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/MXkbf8pNSYJAmGt/preview)

## Passo 2 Baixar Farming Simulator direto no seu servidor Windows

Conecte-se via [Acesso Inicial (RDP)](vserver-windows-userdp.md) ao seu servidor Windows. Depois de conectado, abra o navegador e acesse novamente o [link](https://eshop.giants-software.com/downloads.php) do e-mail. Insira sua GameKey e selecione o download para Windows 8/10. 

![](https://screensaver01.zap-hosting.com/index.php/s/wDa758WS8aKDBwE/preview)

O arquivo será baixado e deve estar na pasta de downloads. (A pasta de downloads pode variar)

![](https://screensaver01.zap-hosting.com/index.php/s/3KZ9wstGSz6JTke/preview)

Dê um duplo clique no arquivo para abri-lo e execute o Setup.exe.  
Depois, leia os Termos de Serviço e confirme. A instalação pode ser feita no modo Padrão ou Personalizado, geralmente o Padrão já é suficiente.  
Por fim, clique em instalar e o Farming Simulator 2022 será instalado, isso pode levar alguns minutos. 

![](https://screensaver01.zap-hosting.com/index.php/s/A4daMGF35a6aCj4/preview)

Quando o processo de instalação terminar, aparecerá a mensagem abaixo, que pode ser confirmada com "Finalizar". 

![](https://screensaver01.zap-hosting.com/index.php/s/EWcaeSD8HacP8je/preview)

A instalação básica está concluída. 

## Passo 3 Ativação do jogo e configuração do servidor dedicado

Agora o Farming Simulator deve ser iniciado. Deve haver um atalho na área de trabalho, se não, pode ser iniciado pelo menu do Windows.  
Erros sobre GPU ausente ou similares podem ser ignorados ou fechados com Não/Cancelar. O Farming Simulator só precisa ser iniciado para que a chave possa ser inserida. 

![](https://screensaver01.zap-hosting.com/index.php/s/5FcRkkxajWFN6D5/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/FXzNNeaBzAP794w/preview)

Agora um nome de usuário e senha devem ser definidos ou alterados/lidos na Config do Servidor Dedicado, para que seja possível fazer login na interface web do Servidor Dedicado.  
A Config fica na instalação padrão em  
`C:\Program Files (x86)\Farming Simulator 2022` com o nome `"dedicatedServer.xml"`.  
Os dados de login podem ser personalizados à vontade. 

![](https://screensaver01.zap-hosting.com/index.php/s/LHkeCNSnEtE5Rd8/preview)

## Passo 4 Iniciar o Servidor Dedicado Farming Simulator 2022

Para iniciar o servidor dedicado, execute o `"dedicatedServer.exe"` no mesmo diretório onde está o `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/43ZYGoNiE7npxDz/preview)

Depois, a interface web pode ser acessada via `https://ENDEREÇO-IP-DO-SERVIDOR:8080`. 

![](https://screensaver01.zap-hosting.com/index.php/s/RbfZFQZkRSX4okr/preview)

O login é feito com os dados definidos/lidos anteriormente no `"dedicatedServer.xml"`.  
A configuração adicional é intuitiva na interface web e pode ser feita com poucos cliques, conforme suas preferências. 

## Passo 5 Liberar portas no firewall

O servidor deve estar acessível publicamente para jogar com os amigos. Para isso, as portas do servidor precisam ser liberadas no firewall do Windows. As portas 10823 e 8080 devem ser liberadas para o protocolo TCP. 10823 é a porta do servidor de jogos e 8080 é a porta web para a interface web, essa última só precisa ser liberada se for usar a administração via web; a administração ainda pode ser feita localmente no servidor Windows via RDP.  
Como liberar portas no Windows: [Redirecionamento de Portas (Firewall)](vserver-windows-port.md). 

Após liberar as portas, o servidor estará acessível publicamente, desde que tenha sido iniciado. 

<InlineVoucher />