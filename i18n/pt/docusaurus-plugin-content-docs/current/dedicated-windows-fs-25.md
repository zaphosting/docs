---
id: dedicated-windows-fs-25
title: "Servidor Dedicado: Configuração do Servidor Dedicado Farming Simulator 2025 no Windows"
description: "Descubra como configurar um servidor dedicado de Farming Simulator 2025 no Windows para hospedar jogos multiplayer sem travar → Saiba mais agora"
sidebar_label: Farming Simulator 2025
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você tem um servidor dedicado Windows e quer instalar o serviço de servidor dedicado do Farming Simulator 2025 nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor.

## Preparação

Para hospedar um servidor dedicado de Farming Simulator 2025, você precisa ter um servidor Windows pronto junto com uma licença válida do jogo para rodar o servidor dedicado.

Antes de continuar com a instalação, conecte-se ao seu servidor Windows via Remote Desktop (RDP). Use nosso [Guia de Acesso Inicial (RDP)](vserver-windows-userdp.md) se precisar de ajuda para isso.

### Licença do Jogo

Para hospedar o servidor dedicado no seu servidor Windows, você deve possuir uma cópia digital do Farming Simulator 2025 diretamente no site oficial do [Farming Simulator](https://www.farming-simulator.com/buy-now.php).

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

Você não pode usar a mesma chave de licença que usa para jogar, então será necessário comprar uma **segunda** cópia do jogo só para o seu servidor dedicado.

:::info Licença Steam
É possível usar uma licença Steam para hospedar seu servidor dedicado, mas isso pode ser bem chato, pois você terá que manter o cliente Steam rodando em segundo plano o tempo todo. Além disso, você não poderá jogar outros jogos em outro sistema usando a mesma conta Steam por causa das limitações da Steam. Por isso, recomendamos fortemente comprar uma chave independente direto no site para evitar esse perrengue.

Se você pretende usar uma licença **Steam**, instale os arquivos pelo Steam normalmente e pule para a seção **Configuração do Servidor Dedicado** deste guia.
:::

Depois de comprar a versão digital no site, você receberá um código do produto no e-mail que forneceu na compra. Você vai precisar dessa chave na próxima etapa para baixar o jogo e validar seu servidor dedicado durante a configuração.

## Instalação

### Instalando os Arquivos

Com sua chave de licença e servidor Windows prontos, acesse a página [Giants Software Downloads](https://eshop.giants-software.com/downloads.php) no seu servidor Windows e insira a chave que recebeu por e-mail.

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

Se tudo der certo, você terá acesso a uma página com várias opções de download do jogo. Encontre a opção principal para Windows **Farming Simulator 25 (Windows 10/11)** e clique para baixar.

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

O download vai começar e pode demorar um pouco, pois o jogo completo está sendo baixado. Tenha paciência.

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

Quando terminar, vá até a pasta de downloads e localize o arquivo **.img** que você baixou. Dê um duplo clique para montar a unidade no Explorador de Arquivos.

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

Agora execute o arquivo **Setup.exe** e aceite o prompt do UAC. Siga o menu de instalação, aceite os termos e condições e ajuste o caminho da instalação se quiser.

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

Mais uma vez, tenha paciência e espere o processo de instalação terminar. Quando estiver pronto, saia do instalador. Recomendamos clicar com o botão direito na unidade **DVD Drive** montada no Explorador de Arquivos e selecionar **Ejetar** para removê-la, pois não será mais necessária. Neste ponto, a instalação base do jogo está completa.

### Ativando o Jogo

Com o jogo instalado, você precisa rodá-lo pelo menos uma vez para ativar a licença. Execute o jogo pelo atalho na área de trabalho ou pela busca do Windows.

Ao abrir, você verá um prompt para inserir a chave de licença pela primeira vez. Digite a chave que recebeu no e-mail e confirme. Se tudo der certo, o jogo será ativado e começará a carregar.

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

Agora você pode fechar o jogo, pois ele não será mais necessário. Siga para a próxima seção para configurar o servidor dedicado e a interface web que vem junto. Se aparecer um erro de **Driver de Vídeo**, selecione **não** para cancelar o processo de inicialização imediatamente.

## Configuração do Servidor Dedicado

Com o jogo pronto, você precisa ajustar algumas configurações para o servidor dedicado. Comece acessando a pasta de instalação do jogo. Por padrão, fica em `C:\Program Files (x86)\Farming Simulator 2025`, mas pode ser diferente se você mudou o caminho na instalação.

Dentro da pasta, encontre e abra o arquivo **dedicatedServer.xml** com um editor de texto.

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

Recomendamos alterar os campos `username` e `passphrase` no topo do arquivo para os seus próprios dados. Essas serão as credenciais para acessar o painel web do seu servidor. Salve o arquivo e feche quando terminar.

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### Acessando a Interface Web

Com as credenciais configuradas, inicie o servidor executando o arquivo **dedicatedServer.exe** na mesma pasta raiz do jogo.

:::info Privilégios Administrativos
Garanta que você execute o arquivo do servidor dedicado com privilégios administrativos, senão provavelmente terá problemas para iniciar o servidor de jogos. Para isso, clique com o botão direito no arquivo e escolha **Executar como administrador**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

Isso vai abrir uma janela CMD que vai gerar certificados necessários, instalar atualizações e ferramentas. Na primeira vez, pode demorar um pouco, então tenha paciência.

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

Quando estiver pronto, você poderá acessar o painel web pelo navegador em `http://[seu_endereço_ip]:8080`. Use as credenciais que configurou para fazer login.

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

Nesse painel, você pode fazer várias configurações no servidor, como alterar ajustes, gerenciar saves, mods e muito mais.

### Redirecionando as portas do seu servidor

Para garantir que seu servidor seja acessível publicamente, você precisa configurar as regras de redirecionamento de portas usadas pelo processo do servidor dedicado. Você pode fazer isso via comandos PowerShell, que é mais fácil, ou pelo painel do Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Abra a busca do Windows e procure por **PowerShell**. Clique com o botão direito e escolha **Executar como Administrador** para garantir as permissões corretas.

:::info
Sempre execute o PowerShell em modo Administrador, senão as configurações podem não funcionar direito.
:::

Depois, copie e cole os seguintes comandos no prompt do PowerShell:
```
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
```

Esses comandos vão criar automaticamente as regras de firewall necessárias para seu servidor de Farming Simulator 2025 ficar acessível publicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use a busca do Windows para abrir as **Configurações do Firewall do Windows com Segurança Avançada**. Talvez precise clicar em **Configurações Avançadas** para abrir a janela correta se abrir a página básica do firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Você deve criar novas regras para seu servidor FS2025. Para isso, clique nas regras de entrada e saída e adicione as seguintes portas e protocolos:
- TCP entrada e saída: 8080, 10823
- UDP entrada e saída: 8080, 10823

Se precisar de ajuda, use nosso [Guia de Redirecionamento de Portas (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Depois de adicionar essas regras, seu servidor estará acessível, ou seja, você poderá acessar o painel web pela internet e conectar ao servidor no jogo.

### Iniciando o Servidor

Depois de ajustar as configurações e configurar o firewall, vá para a página inicial do painel web e clique no botão **Start** para iniciar o servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

Se tudo der certo, o servidor começará a inicializar e você verá isso na interface atualizada e em uma nova janela CMD que vai rodar o servidor de jogos. Se tiver erros ao iniciar, verifique se está rodando o painel como Administrador.

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor dedicado de Farming Simulator 2025 no seu servidor dedicado! Se tiver dúvidas ou problemas, fale com nosso time de suporte, que está disponível para te ajudar todos os dias!