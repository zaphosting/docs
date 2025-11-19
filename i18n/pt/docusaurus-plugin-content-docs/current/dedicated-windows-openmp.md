---
id: dedicated-windows-openmp
title: "Servidor Dedicado: Configuração do Servidor Dedicado Open.mp no Windows"
description: "Descubra como configurar e rodar um servidor dedicado open.mp no Windows para uma jogatina multiplayer sem travas → Saiba mais agora"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você tem um servidor dedicado Windows e quer instalar o serviço de servidor dedicado open.mp nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor.

## Preparação

Para começar, conecte-se ao seu servidor dedicado via Remote Desktop (RDP). Use nosso [Acesso Inicial (RDP)](vserver-windows-userdp.md) se precisar de ajuda para fazer isso.

Depois de acessar seu servidor, baixe a versão mais recente do [Repositório open.mp no GitHub](https://github.com/openmultiplayer/open.mp/releases). Certifique-se de selecionar a versão **win-x86**.

![image](https://screensaver01.zap-hosting.com/index.php/s/sCGpA3dwHngbNCy/preview)

## Instalação

Depois de baixar a release, descompacte o conteúdo usando uma ferramenta como 7zip ou WinRAR. Isso vai gerar uma pasta **Server** que conterá todos os arquivos necessários do servidor.

Para iniciar o servidor, basta rodar o **omp-server.exe** e o servidor começará a inicializar. Porém, recomendamos que você faça o redirecionamento de portas e configure seu servidor antes.

![image](https://screensaver01.zap-hosting.com/index.php/s/xeqZjg8RMCnRcZf/preview)

### Redirecionamento de portas no seu servidor

Para garantir que seu servidor seja acessível ao público, você precisa alterar as regras de redirecionamento de portas para as portas usadas pelo processo do servidor dedicado. Você pode fazer isso via comandos PowerShell, que é mais fácil, ou pelo painel do Windows Defender Firewall.

:::tip
Ao iniciar o servidor pela primeira vez, deve aparecer um prompt UAC. Se você aceitar, as regras do firewall serão configuradas automaticamente, e aí pode seguir para a próxima seção. Caso contrário, siga um dos métodos abaixo.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Abra a busca do Windows e procure por **PowerShell**. Clique com o botão direito e selecione **Executar como Administrador** para garantir que as permissões estejam corretas e tudo funcione direito.

:::info
Garanta que o PowerShell esteja rodando em modo Administrador, senão as configurações podem não ser aplicadas corretamente.
:::

Depois, copie e cole os seguintes comandos no prompt do PowerShell:
```
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Inbound -LocalPort 7777 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "open.mp Server" -Direction Outbound -LocalPort 7777 -Protocol UDP -Action Allow
```

Esses comandos vão criar automaticamente as regras de firewall necessárias para que seu servidor open.mp fique acessível ao público.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use a busca do Windows para abrir as **Configurações do Firewall do Windows com Segurança Avançada**. Talvez você precise clicar em **Configurações Avançadas** para abrir a janela correta, caso abra a página básica do Firewall.

![image](https://github.com/zaphosting/docs/assets/42719082/5fb9f943-7e51-4d8f-9df4-2f5ff60857d3)

Você precisa criar novas regras para seu servidor open.mp. Para isso, clique nas regras de entrada e saída conforme descrito abaixo e adicione para os seguintes protocolos e portas:
- TCP entrada e saída: 7777
- UDP entrada e saída: 7777

Se precisar de mais ajuda, confira nosso [Redirecionamento de Portas (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Depois de adicionar essas regras, seu servidor estará acessível, ou seja, você poderá se conectar a ele pelo endereço IP do seu servidor.

Recomendamos que você configure as opções do servidor antes de acessá-lo, seguindo a próxima seção.

## Configuração

Neste ponto, você já terminou a configuração básica do seu servidor open.mp. Pode fazer configurações adicionais via arquivo de configuração.

Volte para a pasta raiz. Encontre e abra o arquivo **config.json**. Nele, você pode ajustar vários parâmetros do servidor, desde a porta, senha e muito mais.

Como exemplo, aqui estão algumas opções configuradas:
```
"name": "ZAP-Hosting Docs Test",
"password": "iLoveZAP!2024",
"website": "zap-hosting.com"
```

Veja nosso [Configuração do Servidor](openmp-configuration.md) para conferir todas as opções disponíveis e o que cada uma faz.

## Iniciando e conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá até o diretório raiz e execute o **omp-server.exe** para começar o processo de inicialização. Isso abrirá o console do servidor em um prompt de comando e iniciará o servidor.

Você poderá se conectar diretamente ao seu servidor pelo launcher open.mp no jogo. Se quiser que as informações do servidor apareçam na lista de servidores, confira nosso guia [Configuração do Servidor](openmp-configuration.md) e certifique-se que o parâmetro `enable_query` esteja como true (deve ser o padrão). Salve o arquivo e rode o executável do servidor novamente.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor open.mp no seu servidor dedicado! Se tiver dúvidas ou problemas, fale com nosso time de suporte, que está disponível para te ajudar todos os dias!