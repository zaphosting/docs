---
id: vserver-windows-ftpserver
title: "VPS: Instalação do FTP"
description: "Descubra como configurar e gerenciar um servidor FTP FileZilla no Windows para transferências seguras de arquivos e controle de acesso de usuários → Saiba mais agora"
sidebar_label: Instalar FTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O **FTP (File Transfer Protocol)** é um protocolo de rede usado para transferir arquivos através de uma rede TCP/IP. O protocolo foi desenvolvido para permitir a troca fácil de arquivos entre sistemas.

Com o **FileZilla Server** é possível configurar um servidor FTP assim em um sistema operacional Windows. O FileZilla Server é fácil de instalar e configurar, e oferece vários recursos como a possibilidade de criar contas de usuário, gerenciar direitos de acesso e transferir arquivos.
<InlineVoucher />


## Preparação

### Download

Configurar um servidor FTP requer o software correspondente. O software FileZilla Server pode ser usado como uma solução para o sistema operacional Windows Server. A opção de download pode ser encontrada aqui: [FileZilla server](https://filezilla-project.org/download.php?type=server).



### Instalação

Depois de baixar o arquivo de instalação, você deve executá-lo. Para isso, clique no arquivo baixado. A janela a seguir deve abrir: ![](https://screensaver01.zap-hosting.com/index.php/s/Qi97fYbyoKDdsi3/preview)



Lá você pode selecionar os pacotes a serem instalados. Porém, é suficiente instalar os pacotes pré-selecionados, então basta clicar em **Next** e depois escolher o caminho de instalação:

![](https://screensaver01.zap-hosting.com/index.php/s/fsMiKt9Zjas4Rme/preview)

Neste exemplo, o FileZilla Server será instalado em **C:\Program Files (x86)\FileZilla Server**. Mas você também pode escolher seu próprio caminho. Após escolher o caminho, você deve especificar como o servidor FTP será instalado e iniciado. Além disso, a porta pode ser definida e uma senha de administrador deve ser configurada.



![](https://screensaver01.zap-hosting.com/index.php/s/gCoGAcGnTtLQ2P6/preview)

Depois, clique em **Next** novamente e na etapa seguinte. No final, clique em **Install** para iniciar a instalação. A interface de administração do servidor FTP FileZilla será aberta. Clique no botão **Connect to FileZilla FTP Server**.

Uma janela deve aparecer com os campos Host, Port e Password. Você pode deixar os dois primeiros campos como estão e inserir a senha de administrador que definiu para o servidor FTP. Depois, estabeleça a conexão clicando no botão **Ok**.



## Configuração

### Criação de usuário

Para conseguir se conectar ao seu servidor via FTP, você precisa criar um usuário.  
Clique em **Server** no menu superior e depois em **Configure**.

![](https://screensaver01.zap-hosting.com/index.php/s/D7KHSrkGZEErEcH/preview)

Você pode então adicionar um novo usuário na opção de menu Users clicando em **Add**:

![](https://screensaver01.zap-hosting.com/index.php/s/mtdi4oRmR4ZDzyq/preview)

Neste exemplo, o nome do usuário é **YourUserName**. Claro que você pode escolher o seu próprio nome de usuário.



### Senha e permissões

Agora que o usuário foi criado, o acesso e as permissões precisam ser configurados. Para isso, ative o usuário e configure as opções de senha na categoria **General** em **Credentials**. Recomendamos fortemente usar uma senha por questões de segurança. Escolha **Require a password to log in** e defina a senha desejada.

![](https://screensaver01.zap-hosting.com/index.php/s/gwkkexqXgmfXc2q/preview)

Para garantir que o usuário tenha as permissões corretas, você deve especificar quais diretórios ele pode acessar clicando em **Add** em mount points. Deve ser especificado um caminho virtual e um caminho nativo. No nosso exemplo, definimos que o disco C está listado em \.

![](https://screensaver01.zap-hosting.com/index.php/s/LE46PteX7eAftjQ/preview)

À direita, você encontra a opção **Permissions**, que permite definir os direitos de acesso ao caminho especificado. Se quiser que o usuário possa ler e editar os dados, recomendamos definir como **Read+Write**.

::: danger
Por questões de segurança, você deve fornecer acesso do usuário apenas a pastas específicas.
:::

Agora você pode aplicar e confirmar as alterações clicando no botão **Apply**.



## Exceções no Firewall do Windows

Para permitir a conexão ao seu servidor FTP, o uso do servidor FTP no firewall do Windows deve ser liberado. Para isso, abra as configurações do firewall em **Painel de Controle\Sistema e Segurança\Firewall do Windows Defender** e clique em **Permitir um aplicativo ou recurso pelo Firewall do Windows Defender**.  
Na janela seguinte, selecione o aplicativo que será liberado:

![](https://screensaver01.zap-hosting.com/index.php/s/aorQ7Y8gQJPSE8e/preview)

Neste exemplo, o caminho é **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![](https://screensaver01.zap-hosting.com/index.php/s/wx7p5GykbQfx8B6/preview)

Depois disso, você pode fechar o processo clicando em **OK**. Agora a conexão ao seu servidor FTP está liberada.


## Conclusão

Parabéns, você instalou e configurou com sucesso o servidor FTP no seu VPS! Se tiver mais dúvidas ou problemas, entre em contato com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />