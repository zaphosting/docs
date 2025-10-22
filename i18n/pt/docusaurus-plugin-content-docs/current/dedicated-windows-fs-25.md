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

Você tem um servidor dedicado Windows e quer instalar o serviço do servidor dedicado de Farming Simulator 2025 nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor.

<InlineVoucher />

## Preparação

Para hospedar um servidor dedicado de Farming Simulator 2025, você precisa ter um servidor Windows pronto junto com uma licença válida do jogo para rodar o servidor dedicado.

Antes de prosseguir com a instalação, conecte-se ao seu servidor Windows via Remote Desktop (RDP). Use nosso [Guia de Acesso Inicial (RDP)](vserver-windows-userdp.md) se precisar de ajuda para fazer isso.

### Licença do Jogo

Para hospedar o servidor dedicado no seu servidor Windows, você deve possuir uma cópia digital do Farming Simulator 2025 diretamente no site oficial do [Farming Simulator](https://www.farming-simulator.com/buy-now.php).

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

Você não pode usar a mesma chave de licença que usa para jogar o jogo, portanto será necessário comprar uma **segunda** cópia do jogo só para o seu servidor dedicado.

:::info Licença Steam
É possível usar uma licença Steam para hospedar seu servidor dedicado, mas isso pode ser bem chato, pois você terá que manter o cliente Steam rodando em segundo plano o tempo todo. Além disso, isso impede que você jogue outros jogos em outro sistema usando a mesma conta Steam por causa das limitações da Steam. Por isso, recomendamos fortemente que compre uma chave independente direto no site para evitar esse transtorno.

Se você pretende usar uma licença **Steam**, instale os arquivos pelo Steam normalmente e pule para a seção **Configuração do Servidor Dedicado** deste guia.
:::

Depois de comprar a versão digital no site, você receberá um código do produto no e-mail que forneceu na compra. Você vai precisar dessa chave na próxima etapa para baixar o jogo e validar seu servidor dedicado durante a configuração.

## Instalação

### Instalando os Arquivos

Com sua chave de licença e servidor Windows prontos, acesse a página [Giants Software Downloads](https://eshop.giants-software.com/downloads.php) no seu servidor Windows e insira a chave que recebeu por e-mail.

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

Se tudo estiver certo, você terá acesso a uma página com várias opções de download do jogo. Encontre a opção principal para Windows **Farming Simulator 25 (Windows 10/11)** e clique para baixar.

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

O download vai começar e pode demorar um pouco, pois o jogo completo está sendo baixado, então tenha paciência.

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

Quando terminar, vá até a pasta de downloads e localize o arquivo **.img** que você baixou. Dê um duplo clique para montar a unidade no Explorador de Arquivos.

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

Agora execute o arquivo **Setup.exe** e aceite o prompt do UAC. Siga o menu de instalação, aceitando os termos e condições e ajustando o caminho de instalação se quiser.

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

Mais uma vez, tenha paciência e espere o processo de instalação terminar. Quando estiver pronto, feche o menu de instalação. Recomendamos clicar com o botão direito na unidade **DVD Drive** montada no Explorador de Arquivos e selecionar **Ejetar** para removê-la, pois não será mais necessária. Neste ponto, a instalação base do jogo está completa.

### Ativando o Jogo

Com o jogo instalado, você precisa rodá-lo pelo menos uma vez para ativar. Basta abrir o jogo pelo atalho na área de trabalho ou pela busca do Windows.

Ao abrir, você verá um prompt para inserir a chave de licença pela primeira vez. Digite a chave que recebeu no e-mail e confirme. Se tudo der certo, seu jogo será ativado e começará a carregar.

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

Agora você pode fechar o jogo, pois ele não será mais necessário. Siga para a próxima seção para configurar o servidor dedicado e a interface web que vem com ele. Se aparecer um erro de **Driver de Vídeo**, selecione **não** para cancelar o processo de inicialização imediatamente.

## Configuração do Servidor Dedicado

Com o jogo pronto, você precisa ajustar algumas configurações do servidor dedicado. Comece acessando a pasta de instalação do jogo. Por padrão, fica em `C:\Program Files (x86)\Farming Simulator 2025`, mas pode ser diferente se você mudou o caminho na instalação.

Dentro da pasta, encontre e abra o arquivo **dedicatedServer.xml** com um editor de texto.

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

Recomendamos alterar os campos `username` e `passphrase` que ficam no topo do arquivo para os seus próprios. Essas serão as credenciais para acessar o painel da interface web do seu servidor. Salve o arquivo e feche quando terminar.

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### Acessando a Interface Web

Com as credenciais configuradas, inicie o servidor rodando o arquivo **dedicatedServer.exe** que está na mesma pasta raiz do jogo.

:::info Privilégios Administrativos
Garanta que você execute o executável do servidor dedicado com privilégios administrativos, senão provavelmente terá problemas para iniciar o servidor de jogos. Para isso, clique com o botão direito no arquivo e selecione **Executar como administrador**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

Isso vai abrir uma janela CMD que vai gerar certificados necessários, instalar atualizações e ferramentas. Na primeira vez, pode demorar um pouco, então tenha paciência.

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

Quando estiver pronto, você poderá acessar o painel da interface web digitando `http://[seu_endereço_ip]:8080` no navegador. Use as credenciais que configurou para fazer login.

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

Nesse painel, você pode fazer várias configurações no servidor, como alterar ajustes, gerenciar saves, mods e muito mais.

### Redirecionando as Portas do Servidor

Para garantir que seu servidor fique acessível ao público, você precisa configurar o redirecionamento das portas usadas pelo processo do servidor dedicado. Pode fazer isso via comandos PowerShell, que é mais fácil, ou pelo painel do Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Abra a busca do Windows e procure por **PowerShell**. Clique com o botão direito e escolha **Executar como Administrador** para garantir que as permissões estejam corretas.

:::info
Sempre execute o PowerShell em modo Administrador, senão as configurações podem não funcionar direito.
:::

Depois, copie e cole os comandos abaixo no prompt do PowerShell:
```
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
```

Esses comandos vão criar automaticamente as regras no firewall necessárias para que seu servidor de Farming Simulator 2025 fique acessível ao público.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use a busca do Windows para abrir as **Configurações Avançadas do Firewall do Windows**. Talvez precise clicar em **Configurações Avançadas** para abrir a janela correta se abrir a página básica do firewall.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Você precisa criar novas regras para seu servidor FS2025. Para isso, clique em regras de entrada e saída e adicione as seguintes portas e protocolos:
- TCP entrada e saída: 8080, 10823
- UDP entrada e saída: 8080, 10823

Se precisar de ajuda, use nosso [Guia de Redirecionamento de Portas (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Depois de adicionar essas regras, seu servidor estará acessível, ou seja, você poderá acessar o painel web pela internet e conectar ao servidor no jogo.

### Iniciando o Servidor

Depois de ajustar as configurações e configurar o firewall, vá para a página inicial da interface web e clique no botão **Start** para iniciar o servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

Se tudo der certo, o servidor começará a inicializar e você verá a interface atualizada e uma nova janela CMD rodando o servidor de jogos. Se der erro ao iniciar, verifique se está rodando a interface como Administrador.

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor dedicado de Farming Simulator 2025 no seu servidor dedicado! Se tiver dúvidas ou problemas, fale com nosso time de suporte, que está disponível todos os dias para te ajudar!

<InlineVoucher />