---
id: vserver-windows-fs-19
title: "VPS: Configuração do Servidor Dedicado Farming Simulator 2019 no Windows"
description: "Aprenda a configurar um Servidor Dedicado Farming Simulator 2019 em VPS Windows para uma jogatina multiplayer suave → Saiba mais agora"
sidebar_label: Farming Simulator 2019
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você tem um VPS Windows e quer instalar o serviço de Servidor Dedicado Farming Simulator 2019 nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor.
<InlineVoucher />

## Preparação

É necessário um servidor baseado em Windows Server 2016/2019 com pelo menos 4x CPU de 2,4 GHz (AMD/Intel) e no mínimo 2GB de RAM (DDR3/4) e 6GB de disco livre (SSD ou melhor, preferencialmente). O servidor deve rodar em arquitetura 64 bits.  
Além disso, é necessária uma GameLicense própria (não pode ser versão Steam), assim como um endereço IPv4 público. GPU ou placa de som não são necessários para o Servidor Dedicado.  
Dependendo do quanto o servidor dedicado for modificado, estendido com mods ou DLCs, pode ser que mais recursos sejam necessários.

## Passo 1 Comprar licença digital

É necessária uma versão digital do Farming Simulator 2019, não pode ser a versão Steam.  
A versão digital pode ser comprada no [site oficial do Farming Simulator](https://www.farming-simulator.com/buy-now.php?lang=de&country=de&platform=pcdigital).  
Após a compra da versão digital, o Farming Simulator pode ser baixado online seguindo o link abaixo [Link](https://eshop.giants-software.com/downloads.php) que você receberá no e-mail da Giants.  
:::info
Importante: No e-mail você encontrará a GameKey necessária para o download e também para a ativação da instalação posteriormente.  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bR9YqJ5xXFwaWky/preview)

## Passo 2 Baixar Farming Simulator direto no seu servidor Windows

Conecte-se via [Acesso Inicial (RDP)](vserver-windows-userdp.md) ao seu servidor Windows. Depois de conectado, abra o navegador e acesse novamente o [link](https://eshop.giants-software.com/downloads.php) do e-mail. Insira sua GameKey e selecione o download para Windows 8/10.

![](https://screensaver01.zap-hosting.com/index.php/s/YaSo85pefHf5r5n/preview)

O arquivo será baixado e deve estar na pasta de downloads. (O diretório de downloads pode variar)

![](https://screensaver01.zap-hosting.com/index.php/s/2nPDeWB97FXoFer/preview)

Dê um duplo clique no arquivo para abrir e executar o Setup.exe.  
Depois, leia os Termos de Serviço e confirme. A instalação pode ser feita como Padrão ou Personalizada, geralmente Padrão já é suficiente.  
Por fim, clique em instalar e o Farming Simulator 2019 será instalado, isso pode levar alguns minutos.

![](https://screensaver01.zap-hosting.com/index.php/s/agaffABodEkxrse/preview)

Quando o processo de instalação terminar, aparecerá a mensagem abaixo, que pode ser confirmada com "Finalizar".

![](https://screensaver01.zap-hosting.com/index.php/s/48n27oNSxe2srRN/preview)

A instalação básica está concluída.

## Passo 3 Ativação do jogo e configuração do servidor dedicado

Agora o Farming Simulator deve ser iniciado. Deve haver um atalho na área de trabalho, se não, pode ser iniciado pelo menu do Windows.  
Erros sobre falta de GPU ou similares podem ser ignorados ou fechados com Não/Cancelar. O Farming Simulator só precisa ser iniciado para que a chave possa ser inserida.

![](https://screensaver01.zap-hosting.com/index.php/s/CK6izaPpk7JLi67/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/9Jc4oE3t43em4nf/preview)

Quando a chave for reconhecida, aparecerá uma confirmação.

![](https://screensaver01.zap-hosting.com/index.php/s/jPqAggmfjQjxgei/preview)

Agora um nome de usuário e senha devem ser configurados ou alterados/lidos no Config do Servidor Dedicado, para que seja possível fazer login na interface web do Servidor Dedicado.  
O Config fica na instalação padrão em  
`C:\Program Files (x86)\Farming Simulator 2019` com o nome `"dedicatedServer.xml"`.  
Os dados de login podem ser personalizados à vontade.

![](https://screensaver01.zap-hosting.com/index.php/s/wDcfAgymENcJ3Aa/preview)

## Passo 4 Iniciar o Servidor Dedicado Farming Simulator 2019

Para iniciar o servidor dedicado, execute o `"dedicatedServer.exe"` no mesmo diretório onde está o `"dedicatedServer.xml"`.

![](https://screensaver01.zap-hosting.com/index.php/s/5YGepFzoR9bHAcF/preview)

Depois, a interface web pode ser acessada via `https://ENDEREÇO-IP-DO-SERVIDOR:8080`.

![](https://screensaver01.zap-hosting.com/index.php/s/Dfz7c35dpzPS9NK/preview)

O login é feito com os dados configurados/lidos anteriormente no `"dedicatedServer.xml"`.  
A configuração adicional é bem intuitiva na interface web e pode ser feita com poucos cliques, conforme suas preferências.

## Passo 5 Liberar portas no firewall

O servidor deve estar acessível publicamente para jogar com os amigos. Para isso, as portas do servidor precisam ser liberadas no firewall do Windows. As portas 10823 e 8080 devem ser liberadas para o protocolo TCP.  
10823 é a porta do servidor de jogos e 8080 é a porta web para a interface web, essa última só precisa ser liberada se for usar a administração via web; a administração ainda pode ser feita localmente no servidor Windows via RDP.  
Como liberar portas no Windows: [Redirecionamento de Portas (Firewall)](vserver-windows-port.md).

Após liberar as portas, o servidor estará acessível publicamente, desde que esteja iniciado.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor Farming Simulator 2019 no seu VPS! Se tiver mais dúvidas ou problemas, fale com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />