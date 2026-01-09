---
id: dedicated-windows-fs-22-epic
title: "Servidor Dedicado: Farming Simulator 2022 (Epic Games) Configuração no Windows"
description: "Descubra como configurar um servidor dedicado para Farming Simulator 22 versão Epic Games com desempenho otimizado e requisitos únicos → Saiba mais agora"
sidebar_label: Farming Simulator 2022 (Epic Games)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Configurar um servidor para a versão Epic Games do Farming Simulator 22 é um pouco diferente do processo para um servidor padrão. Este guia vai te mostrar o passo a passo, focando nos aspectos únicos da versão Epic Games.

## Preparação

Antes de começar, certifique-se de que seu setup atende aos seguintes requisitos:
- **Sistema Operacional:** Windows Server 2016/2019 (64-bit)
- **CPU:** Pelo menos 4x 2.4 GHz (AMD/Intel)
- **RAM:** Pelo menos 4GB (DDR3/4)
- **Espaço em Disco:** Pelo menos 50GB livres (SSD ou melhor recomendado)
- **Conta Epic Games:** Uma conta Epic Games com Farming Simulator 22.

:::info
Ao rodar o servidor, você não pode hospedar o servidor e jogar na mesma conta Epic Games. Isso significa que você vai precisar de uma segunda cópia do jogo em outra conta se quiser jogar no servidor.
:::

## Passo 1: Preparando para a instalação do servidor
Comece conectando ao seu servidor via Remote Desktop (RDP). Se precisar de ajuda com isso, confira nosso [Acesso Inicial (RDP)](vserver-windows-userdp.md).

Uma vez conectado, você precisará instalar um pré-requisito necessário, o Microsoft Visual C++ Redistribute, que pode ser baixado no [site da Microsoft](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170). Após o download, siga as instruções na tela para completar a instalação.

:::tip
É possível que você já tenha as ferramentas C++ Redistribute instaladas; se for o caso, o instalador pode mostrar um erro. Pode ignorar isso e seguir em frente sem problemas.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9kjW9QdoWtwRAbW/preview.png)

Agora você precisa instalar o launcher da Epic Games, que pode ser baixado no [site da Epic Games](https://store.epicgames.com/en-US/download). Novamente, siga as instruções na tela para completar a instalação.

![](https://screensaver01.zap-hosting.com/index.php/s/msGyRYr5cxoSti5/preview.png)

Depois da instalação, é bem provável que o launcher precise baixar alguns arquivos adicionais e atualizações antes de abrir.

![](https://screensaver01.zap-hosting.com/index.php/s/Bzya5Tzj8sY7RY2/preview)

Quando o launcher abrir, faça login com sua conta Epic Games, que deve ter o Farming Simulator 2022 na biblioteca.

## Passo 2: Baixando o Farming Simulator 2022

No Epic Games Launcher, clique na aba **Library** e localize o Farming Simulator 22. Use o botão **Install** e selecione o local onde deseja baixar o jogo.

![](https://screensaver01.zap-hosting.com/index.php/s/s9SxMgLtQHtwTPQ/preview)

Agora é só esperar o download e a instalação terminarem. A velocidade do download depende da largura de banda do seu servidor.

## Passo 3: Configurando as opções de inicialização

Depois que o jogo estiver instalado, volte para a aba **Library** no Epic Games Launcher. Encontre o Farming Simulator 22, clique nos três pontos ao lado e selecione **Manage**.

![](https://screensaver01.zap-hosting.com/index.php/s/t63G5XzxwpaLje9/preview)

Role até a seção **Launch Options** e ative-a. Na caixa de texto que aparecer, digite `-server` e feche o menu.

![](https://screensaver01.zap-hosting.com/index.php/s/HLAXkbdpanAFfbS/preview)

## Passo 4: Rodando o Servidor

Agora você pode iniciar o Farming Simulator 2022 pelo launcher da Epic Games ou pelo atalho na área de trabalho. O jogo deve abrir via prompt de comando (CMD) no modo servidor dedicado. Se não acontecer, confira se a opção de inicialização foi configurada corretamente.

![](https://screensaver01.zap-hosting.com/index.php/s/Bf5LX72LWNwSFib/preview)

## Passo 5: Ativando a Interface Web (opcional)

Os servidores dedicados de Farming Simulator 22 vêm com uma interface web que você pode ativar para seu servidor. É opcional, mas pode ser bem útil para ajustar configurações e acessar várias informações, então recomendamos ativar.

Antes de continuar, feche o servidor saindo do prompt de comando. Isso garante que as alterações feitas neste passo não sejam sobrescritas.

Navegue até o caminho de instalação do jogo, normalmente `C:\Program Files\Epic Games\FarmingSimulator22` se você instalou no diretório padrão.

![](https://screensaver01.zap-hosting.com/index.php/s/yoqHoDAFZFkP2Ps/preview)

Encontre e abra o arquivo `dedicatedServer.xml` na pasta raiz usando um editor de texto como o Notepad.

Defina o nome de usuário e senha do admin modificando os campos apropriados. 
```xml
  <initial_admin>
    <username>admin</username> //nome de usuário
    <passphrase>your_password</passphrase> //senha
  </initial_admin>
```

![](https://screensaver01.zap-hosting.com/index.php/s/gks4Pswpyc3Wcix/preview)

Salve o arquivo antes de fechar e execute o `dedicatedServer.exe` que está na mesma pasta raiz.

![](https://screensaver01.zap-hosting.com/index.php/s/KjNeS5E8BLEgnnH/preview)

Agora você deve conseguir acessar a interface web indo para `http://[seu_ip_do_servidor]:8080` no navegador, substituindo `[seu_ip_do_servidor]` pelo endereço IP do seu servidor. Se quiser acessar o painel direto no mesmo servidor, pode usar `http://127.0.0.1:8080` também.

![](https://screensaver01.zap-hosting.com/index.php/s/n96fcAxyxBnfjyL/preview)

:::info
Por causa da configuração única da versão Epic Games, você pode ter dificuldades para usar a interface web em toda sua extensão. Embora seja possível fazer alterações e parar o servidor pela interface, não é possível iniciar o servidor por ela, por exemplo.

Se tiver problemas, primeiro pare o dedicatedServer.exe, depois rode o Farming Simulator 22 diretamente para garantir que o servidor está funcionando. Depois, rode o dedicatedServer.exe para ativar a interface web.

É importante que você rode o servidor **primeiro** e a interface web **depois**, senão a Epic Games pode detectar ambos como o mesmo arquivo e impedir que o servidor principal seja iniciado.
:::

## Passo 6: Configurando o Redirecionamento de Portas

Para garantir que seu servidor seja acessível ao público, você precisa alterar as regras de redirecionamento de portas para as portas usadas pelo processo do servidor dedicado. Você pode fazer isso via comandos PowerShell, que é mais fácil, ou pelo painel do Windows Defender Firewall.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via Powershell" default>

Abra a busca do Windows e procure por **PowerShell**. Clique com o botão direito e escolha **Executar como Administrador** para garantir que as permissões estejam corretas.

:::info
Certifique-se de rodar o PowerShell em modo Administrador, senão as configurações podem não ser aplicadas corretamente.
:::

Depois, copie e cole os seguintes comandos no prompt do PowerShell:
```
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
```

Esses comandos vão criar automaticamente as regras de firewall necessárias para que seu servidor Farming Simulator 22 fique acessível ao público.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use a busca do Windows para abrir as **Configurações do Firewall do Windows com Segurança Avançada**. Pode ser que você precise clicar em **Configurações Avançadas** para abrir a janela correta, caso abra a página básica do Firewall.

![](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Você precisa criar novas regras para seu servidor Farming Simulator 22. Para isso, clique nas regras de entrada e saída conforme descrito abaixo e adicione para os seguintes protocolos e portas:
- TCP entrada e saída: 3724, 27015
- UDP entrada e saída: 3724, 27015

Use nosso [Guia de Redirecionamento de Portas (Firewall)](vserver-windows-port.md) se precisar de ajuda extra para fazer isso.

</TabItem>
</Tabs>

## Passo 7: Conectando ao Servidor
Inicie o jogo e vá para o menu multiplayer. Procure pelo nome do servidor, que pode ser encontrado na interface web e é personalizável.

Quando encontrar o servidor, clique para conectar. Se pedir, digite a senha, que também estará visível na interface web.

Você instalou com sucesso o Farming Simulator 22 (versão Epic Games) no seu servidor dedicado Windows.