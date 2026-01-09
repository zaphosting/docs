---
id: dedicated-windows-ragemp
title: "Servidor Dedicado: Configuração do Servidor Dedicado RageMP no Windows"
description: "Aprenda como configurar o Servidor Dedicado RageMP no seu servidor Windows para hospedar sessões multiplayer de GTA V → Saiba mais agora"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Você tem um Servidor Dedicado Windows e quer instalar o serviço de servidor dedicado RageMP nele? Você está no lugar certo. Neste guia, vamos explicar o passo a passo para instalar esse serviço no seu servidor.

## Preparação

Para começar, conecte-se ao seu Servidor Dedicado via Remote Desktop (RDP). Use nosso [Acesso Inicial (RDP)](vserver-windows-userdp.md) se precisar de ajuda para fazer isso.

Depois de acessar seu servidor, comece instalando o [Microsoft Visual C++ Redistributable 2017](https://aka.ms/vs/15/release/VC_redist.x64.exe), pois é um pré-requisito que o RageMP exige. Certifique-se de que está instalado antes de continuar. Se não tiver certeza se já está instalado, execute o instalador e ele informará durante a instalação.

Com a dependência instalada, baixe a última versão do servidor no [Site do RageMP](https://cdn.rage.mp/public/files/RAGEMultiplayer_Setup.exe).

:::tip
Se você já tem o RageMP instalado, pode pular para a subseção **Mudando para o Branch do Servidor**. Não é necessário reinstalar o RageMP.
:::

## Instalação

Depois de baixar o arquivo, execute o executável **RAGEMultiplayer_Setup.exe** e siga os passos da instalação. Você poderá ajustar o caminho de instalação durante o processo, o que recomendamos.

Com o RageMP instalado, execute o app **RAGE Multiplayer**, que agora deve estar acessível nos seus apps do Windows.

Na primeira execução, será necessário definir o caminho da pasta de instalação do GTA:V. O diretório depende do launcher que você usou para instalar o jogo e, por padrão, estará em `C:/Program Files` ou `C:/Program Files (x86)`.

Agora você precisará ajustar o branch para baixar os arquivos do servidor.

### Mudando para o Branch do Servidor

Navegue até o diretório onde o RageMP foi instalado. Localize o arquivo **config.xml** nessa pasta. Altere o parâmetro `channel` de `prerelease` para `prerelease_server` e salve o arquivo.

![](https://screensaver01.zap-hosting.com/index.php/s/zbZfQCdnjjqmdbs/preview)

Agora execute o arquivo **updater.exe**, que vai baixar os arquivos necessários do servidor com base na mudança de branch. Você verá uma nova pasta **server-files** aparecer no diretório do RageMP, que é o que você vai precisar.

![](https://screensaver01.zap-hosting.com/index.php/s/FpK5GdwnHMRRkfD/preview)

Você pode voltar o parâmetro `channel` para `prerelease` e executar novamente o arquivo **update.exe** para voltar para a versão cliente e poder jogar normalmente.

:::tip
Você pode mover os arquivos do servidor e renomear a pasta para o que quiser, por exemplo, para sua área de trabalho. Não é obrigatório rodar isso dentro da pasta `RAGEMP`.
:::

Para iniciar o servidor, basta executar o **ragemp-server.exe** que está dentro da pasta `server-files` ou na pasta do servidor, e o servidor começará a inicializar. Porém, recomendamos configurar o redirecionamento de portas e ajustar seu servidor antes.

![](https://screensaver01.zap-hosting.com/index.php/s/AiJWmSjsjw7bMYX/preview)

### Redirecionando portas do seu servidor

Para garantir que seu servidor seja acessível ao público, você precisa alterar as regras de redirecionamento de portas para as portas usadas pelo processo do servidor dedicado. Você pode fazer isso via comandos PowerShell, que é mais fácil, ou pelo painel do Windows Defender Firewall.

:::tip
Ao iniciar o servidor pela primeira vez, deve aparecer um prompt do UAC. Se você aceitar, as regras do firewall serão configuradas automaticamente, e poderá seguir para a próxima seção. Caso contrário, siga um dos métodos abaixo.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="Via PowerShell" default>

Abra a busca do Windows e procure por **PowerShell**. Clique com o botão direito e escolha **Executar como Administrador** para garantir que as permissões estejam corretas.

:::info
Certifique-se de rodar o PowerShell em modo Administrador, caso contrário as configurações podem não ser aplicadas corretamente.
:::

Depois, copie e cole os seguintes comandos no prompt do PowerShell:

```
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Inbound -LocalPort 22005 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "RageMP Server" -Direction Outbound -LocalPort 22005 -Protocol UDP -Action Allow
```

Esses comandos vão criar automaticamente as regras de firewall necessárias para que seu servidor RageMP fique acessível ao público.

</TabItem>

<TabItem value="windefender" label="Via Windows Defender">

Use a busca do Windows para abrir as **Configurações do Firewall do Windows com Segurança Avançada**. Talvez precise clicar em **Configurações Avançadas** para abrir a janela correta, caso abra a página básica do Firewall.

![image](https://screensaver01.zap-hosting.com/index.php/s/ZT2WzELZSBPrFsB/preview)

Você deve criar novas regras para o seu servidor RageMP. Para isso, clique nas regras de entrada e saída conforme descrito abaixo e adicione para os seguintes protocolos e portas:

- TCP entrada e saída: 22005
- UDP entrada e saída: 22005

Se precisar de ajuda, use nosso [Guia de Redirecionamento de Portas (Firewall)](vserver-windows-port.md).

</TabItem>
</Tabs>

Depois de adicionar essas regras, seu servidor estará acessível, ou seja, você poderá conectar-se a ele pelo endereço IP do seu servidor.

Recomendamos que você configure as opções do servidor antes de acessá-lo, conforme a próxima seção.

## Configuração

Neste ponto, você já terminou a configuração inicial do seu servidor RageMP. Pode fazer configurações adicionais via arquivo de configuração.

Volte para a pasta raiz. Encontre e abra o arquivo **conf.json**. Nele, você pode ajustar vários parâmetros do servidor, como porta, nome do servidor e mais.

Por exemplo, aqui estão algumas opções de configuração definidas:

```
"maxplayers" : 100,
"name" : "ZAP-Hosting Docs Test",
"gamemode" : "freeroam",
```

## Iniciando e conectando ao seu servidor

Agora é hora de iniciar seu servidor. Vá até a pasta `server-files` ou a pasta do servidor e execute **ragemp-server.exe** para começar o processo de inicialização. Isso abrirá o console do servidor em um prompt de comando e iniciará o servidor.

Você poderá se conectar diretamente ao seu servidor no jogo via launcher do RageMP.

## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor RageMP no seu Servidor Dedicado! Se tiver dúvidas ou problemas, entre em contato com nosso time de suporte, que está disponível para ajudar todos os dias!