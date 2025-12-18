---
id: vserver-windows-fs-22
title: "VPS: Configuração do Servidor Dedicado Farming Simulator 2022 no Windows"
description: "Descubra como configurar o Servidor Dedicado Farming Simulator 2022 no seu VPS Windows para um multiplayer suave → Saiba mais agora"
sidebar_label: Farming Simulator 2022
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você tem um VPS Windows e quer instalar o serviço do Servidor Dedicado Farming Simulator 2022 nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor.
<InlineVoucher />

## Preparação
É necessário um servidor baseado em Windows Server 2016/2019 com pelo menos 4x CPU de 2,4 GHz (AMD/Intel) e no mínimo 2GB de RAM (DDR3/4) e 6GB de disco livre (preferencialmente SSD ou melhor). O servidor deve rodar em arquitetura 64 bits.  
Além disso, é necessária uma licença própria do jogo (não pode ser a versão Steam), assim como um endereço IPv4 público. GPU ou placa de som não são necessários para o Servidor Dedicado.  
Dependendo do quanto o servidor dedicado for modificado, estendido com mods ou DLCs, mais recursos podem ser necessários. 


## Passo 1 Comprar licença digital

É necessária uma versão digital do Farming Simulator 2022, não pode ser a versão Steam.  
A versão digital pode ser comprada no [site oficial do Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Após a compra da versão digital, o Farming Simulator pode ser baixado online pelo link [Link](https://eshop.giants-software.com/downloads.php) que você receberá no e-mail da Giants.  
:::info
Importante: No e-mail você encontrará a GameKey necessária para o download e também para a ativação da instalação posteriormente. 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/EH9ysn2jHaQXrtf/preview)

## Passo 2 Baixar Farming Simulator direto no seu servidor Windows

Conecte-se via [Acesso Inicial (RDP)](vserver-windows-userdp.md) ao seu servidor Windows. Depois de conectado, abra o navegador e acesse novamente o [link](https://eshop.giants-software.com/downloads.php) do e-mail. Insira sua GameKey e selecione o download para Windows 8/10. 

![](https://screensaver01.zap-hosting.com/index.php/s/JwMzAXbMx64CybQ/preview)

O arquivo será baixado e deve estar na pasta de downloads (o diretório pode variar).

![](https://screensaver01.zap-hosting.com/index.php/s/74LiBCfn2w6BwLJ/preview)

Dê um duplo clique no arquivo para abrir e executar o Setup.exe.  
Depois, leia os Termos de Serviço e confirme. A instalação pode ser feita no modo Padrão ou Personalizado, geralmente o Padrão já é suficiente.  
Por fim, clique em instalar e o Farming Simulator 2022 será instalado, isso pode levar alguns minutos. 

![](https://screensaver01.zap-hosting.com/index.php/s/8SrHwEjgirmKTJJ/preview)

Quando a instalação terminar, aparecerá a mensagem abaixo, que pode ser confirmada com "Finalizar". 

![](https://screensaver01.zap-hosting.com/index.php/s/KYMX8SeMgxWmYdt/preview)

A instalação básica está concluída. 

## Passo 3 Ativação do jogo e configuração do servidor dedicado

Agora o Farming Simulator deve ser iniciado. Deve haver um atalho na área de trabalho, se não, pode ser iniciado pelo menu do Windows.  
Erros sobre falta de GPU ou similares podem ser ignorados ou fechados com Não/Cancelar. O Farming Simulator só precisa ser iniciado para que a chave possa ser inserida. 

![](https://screensaver01.zap-hosting.com/index.php/s/iMTyYAGknFwDA3H/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/spnct8XYniz3Nf5/preview)

Agora é necessário definir ou alterar o nome de usuário e senha no arquivo de Configuração do Servidor Dedicado para que seja possível fazer login na interface web do servidor dedicado.  
A configuração fica, na instalação padrão, em  
`C:\Program Files (x86)\Farming Simulator 2022` no arquivo chamado `"dedicatedServer.xml"`.  
Os dados de login podem ser personalizados à vontade. 

![](https://screensaver01.zap-hosting.com/index.php/s/kK7nxEtqxgxjLFG/preview)

## Passo 4 Iniciar o Servidor Dedicado Farming Simulator 2022

Para iniciar o servidor dedicado, execute o arquivo `"dedicatedServer.exe"` no mesmo diretório onde está o `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/qagHezKmK2tx2kj/preview)

Depois, a interface web pode ser acessada via `https://ENDEREÇO-IP-DO-SERVIDOR:8080`. 

![](https://screensaver01.zap-hosting.com/index.php/s/E8b34yHDPDbr9YP/preview)

O login é feito com os dados definidos/lidos anteriormente no `"dedicatedServer.xml"`.  
A configuração adicional é intuitiva na interface web e pode ser feita com poucos cliques, conforme suas preferências. 

## Passo 5 Liberar portas no firewall

O servidor deve estar acessível publicamente para jogar com os amigos. Para isso, as portas do servidor precisam ser liberadas no firewall do Windows. As portas 10823 e 8080 devem ser liberadas para o protocolo TCP.  
10823 é a porta do servidor de jogos e 8080 é a porta web para a interface web, essa última só precisa ser liberada se for usar a administração via web, pois a administração ainda pode ser feita localmente no servidor Windows via RDP.  
Como liberar portas no Windows: [Redirecionamento de Portas (Firewall)](vserver-windows-port.md).  

Após liberar as portas, o servidor estará acessível publicamente, se estiver iniciado. 


## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Farming Simulator 2022 no seu VPS! Se tiver mais dúvidas ou problemas, fale com nosso time de suporte, que está disponível todos os dias para te ajudar! 

<InlineVoucher />