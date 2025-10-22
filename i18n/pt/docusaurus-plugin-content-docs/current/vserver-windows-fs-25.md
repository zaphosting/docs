---
id: vserver-windows-fs-25
title: "VPS: Configuração do Servidor Dedicado Farming Simulator 2025 no Windows"
description: "Descubra como configurar um servidor dedicado de Farming Simulator 2025 no seu VPS Windows para uma jogabilidade multiplayer sem interrupções → Saiba mais agora"
sidebar_label: Farming Simulator 2025
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você tem um VPS Windows e quer instalar o serviço de servidor dedicado do Farming Simulator 2025 nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor.

<InlineVoucher />

## Preparação

Para hospedar um servidor dedicado de Farming Simulator 2025, você precisa ter um servidor Windows pronto junto com uma licença válida do jogo para rodar o servidor dedicado.

Antes de prosseguir com a instalação, conecte-se ao seu servidor Windows via Área de Trabalho Remota (RDP). Use nosso guia [Acesso Inicial (RDP)](vserver-windows-userdp.md) se precisar de ajuda para fazer isso.

### Licença do Jogo

Para hospedar o servidor dedicado no seu servidor Windows, você deve possuir uma cópia digital do Farming Simulator 2025 diretamente no site oficial do [Farming Simulator](https://www.farming-simulator.com/buy-now.php).

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

Você não pode usar a mesma chave de licença que usa para jogar o jogo, portanto será necessário comprar uma **segunda** cópia do jogo apenas para o seu servidor dedicado.

:::info Licença Steam
É possível usar uma licença Steam para hospedar seu servidor dedicado, mas isso pode ser bem inconveniente, pois você precisará manter o cliente Steam rodando em segundo plano o tempo todo. Além disso, isso impede que você jogue qualquer outro jogo em outro sistema usando a mesma conta Steam devido às limitações da plataforma. Por isso, recomendamos fortemente que você compre uma chave independente diretamente no site para evitar esse transtorno.

No entanto, se você planeja usar uma licença **Steam**, deve instalar os arquivos pelo Steam normalmente e pular para a seção [**Configuração do Servidor Dedicado**](#dedicated-server-setup) deste guia.
:::

Depois de comprar a versão digital no site, você receberá um código do produto no e-mail fornecido na finalização da compra. Você vai precisar dessa chave na próxima seção para acessar o download do jogo e validar seu servidor dedicado durante a configuração.

## Instalação

### Instalando os Arquivos

Agora que sua chave de licença e servidor Windows estão prontos, acesse a página [Giants Software Downloads](https://eshop.giants-software.com/downloads.php) no seu servidor Windows e insira a chave de licença que recebeu por e-mail.

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

Se tudo estiver correto, você terá acesso a uma página com várias opções de download do jogo. Encontre a opção principal para Windows **Farming Simulator 25 (Windows 10/11)** e selecione para baixar.

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

O download deve começar e pode levar um tempo, pois o jogo completo está sendo baixado, então tenha paciência.

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

Quando terminar, vá até a sua pasta de downloads e localize o arquivo **.img** que você baixou. Abra-o com um duplo clique, isso deve montar a unidade no Explorador de Arquivos.

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

Agora execute o arquivo **Setup.exe** e aceite o prompt do UAC. Siga o menu de instalação para configurar o jogo, incluindo aceitar os termos e condições e ajustar o caminho de instalação, se desejar.

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

Mais uma vez, seja paciente e aguarde o processo completo de instalação. Quando terminar, simplesmente feche o menu de instalação. Recomendamos clicar com o botão direito na unidade **DVD montada** no Explorador de Arquivos e selecionar **Ejetar** para removê-la, pois não será mais necessária. Nesta etapa, a instalação base do jogo está concluída.

### Ativando o Jogo

Com o jogo instalado, você precisará rodá-lo pelo menos uma vez para ativá-lo. Basta abrir o jogo pelo atalho na área de trabalho ou pela busca do Windows.

Ao iniciar, você verá um prompt para inserir a chave de licença pela primeira vez. Digite a chave que recebeu por e-mail e confirme. Se tudo estiver certo, seu jogo será ativado e o carregamento continuará.

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

Agora você pode fechar o jogo, pois ele não será mais necessário, e seguir para a próxima seção para configurar o servidor dedicado e a interface web que acompanha.

Se aparecer um erro de **Driver de Vídeo**, basta selecionar **não**, o que cancelará o processo de inicialização imediatamente.

## Configuração do Servidor Dedicado

Com o jogo pronto, você precisará ajustar algumas opções de configuração para o seu servidor dedicado. Comece acessando a pasta de instalação do jogo. Por padrão, ela fica em `C:\Program Files (x86)\Farming Simulator 2025`, mas pode ser diferente se você alterou o caminho durante a instalação.

Dentro da pasta, encontre e abra o arquivo **dedicatedServer.xml** com um editor de texto.

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

Recomendamos alterar os campos `username` e `passphrase` que ficam no topo do arquivo para os seus próprios dados. Essas serão as credenciais para acessar o painel da interface web do seu servidor. Salve o arquivo e feche-o quando terminar.

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### Acessando a Interface Web

Com as credenciais configuradas, você pode iniciar o servidor executando o arquivo **dedicatedServer.exe** que está na mesma pasta raiz do jogo.

:::info Privilégios Administrativos
Certifique-se de executar o arquivo do servidor dedicado com privilégios administrativos, caso contrário você provavelmente terá problemas ao tentar iniciar o servidor de jogos. Para isso, clique com o botão direito no arquivo e selecione **Executar como administrador**.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

Isso abrirá uma janela CMD que vai gerar automaticamente os certificados necessários, instalar atualizações e ferramentas essenciais. Na primeira execução, isso pode levar um tempo, então tenha paciência.

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

Quando estiver pronto, você poderá acessar o painel da interface web digitando `http://[seu_endereço_ip]:8080` no navegador. Use as credenciais que configurou para fazer login.

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

Nesse painel, você poderá fazer várias configurações no seu servidor, como alterar ajustes, gerenciar saves, mods e muito mais.

### Redirecionando as Portas do Servidor

Para garantir que seu servidor seja acessível publicamente, você precisa configurar as regras de redirecionamento de portas usadas pelo processo do servidor dedicado. Isso pode ser feito via comandos PowerShell, que é mais fácil, ou pelo painel do Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Abra a busca do Windows e procure por **PowerShell**. Clique com o botão direito e escolha **Executar como Administrador** para garantir que as permissões estejam corretas.

:::info
Garanta que o PowerShell esteja rodando em modo Administrador, caso contrário as configurações podem não ser aplicadas corretamente.
:::

Depois, copie e cole os seguintes comandos no prompt do PowerShell:
```
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
```

Esses comandos vão criar automaticamente as regras de firewall necessárias para que seu servidor de Farming Simulator 2025 fique acessível publicamente.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use a busca do Windows para abrir as **Configurações do Firewall do Windows com Segurança Avançada**. Pode ser que você precise clicar em **Configurações Avançadas** para abrir a janela correta, caso tenha aberto a página básica do Firewall.

![](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Você deve criar novas regras para o seu servidor FS2025. Para isso, clique nas regras de entrada e saída conforme descrito abaixo e adicione as seguintes portas e protocolos:
- TCP entrada e saída: 8080, 10823
- UDP entrada e saída: 8080, 10823

Se precisar de ajuda, confira nosso guia [Redirecionamento de Portas (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Depois de adicionar essas regras, seu servidor estará acessível, ou seja, você poderá acessar o painel da interface web pela internet e conectar ao servidor no jogo.

### Iniciando o Servidor

Após ajustar as configurações e configurar o firewall, vá para a página inicial da interface web e clique no botão **Start** para iniciar o processo de boot.

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

Se tudo der certo, o servidor começará a inicializar e você poderá confirmar isso pela interface atualizada e pela nova janela CMD que executará o servidor de jogos. Se tiver erros ao iniciar, verifique se está rodando a interface como Administrador.

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor dedicado de Farming Simulator 2025 no seu VPS! Se tiver mais dúvidas ou problemas, entre em contato com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />