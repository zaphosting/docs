---
id: dedicated-linux-openvpn
title: "Configure o OpenVPN em um Servidor Linux - Crie Sua Infraestrutura VPN Segura"
description: "Descubra como proteger sua conexão de internet e acessar conteúdos restritos usando OpenVPN em servidores Linux → Saiba mais agora"
sidebar_label: Instalar OpenVPN
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

OpenVPN é um software VPN poderoso e versátil que permite uma conexão segura pela Internet. É uma solução open source que oferece uma tecnologia VPN robusta e configurável para estabelecer uma conexão criptografada entre seu dispositivo e um servidor VPN. Usando o OpenVPN, você pode proteger sua conexão de internet, garantir sua privacidade online e acessar conteúdos com restrição geográfica, não importa onde esteja no mundo. Neste guia, vamos explorar o processo de instalação e configuração do serviço **OpenVPN** em um servidor Linux.

## Preparação

Primeiro, o driver de rede **TUN** precisa estar ativado. Essa etapa não é necessária para servidores root.
Para isso, você deve criar um novo arquivo chamado **tunscript.sh** na pasta **/usr/sbin**.

```
nano /usr/sbin/tunscript.sh 
```

Insira as seguintes linhas em seguida:
```
#!/bin/bash
mkdir /dev/net
mknod /dev/net/tun c 10 200
chmod 0666 /dev/net/tun
```

Salve o arquivo pressionando `CTRL+O`, depois `Y` e por fim `Enter`. Para sair do arquivo, pressione `CTRL+X`. Depois disso, execute o comando:

```
chmod +x /usr/sbin/tunscript.sh
```

Feito isso, rode ``crontab -e`` e selecione o **editor nano** [1]. Adicione esta linha ao final do arquivo:
``` @reboot /usr/sbin/tunscript.sh || exit 1 ```

Salve o arquivo pressionando `CTRL+O`, depois `Y` e por fim `Enter`. Para sair, pressione `CTRL+X`. Agora você poderá continuar após um reboot.

## Instalação

Para instalar o OpenVPN, execute o seguinte comando no console:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Então aparecerá um diálogo perguntando se você quer usar UDP ou TCP. Recomendamos UDP, então digite `1` e pressione `Enter`. Depois, será solicitado uma porta para o OpenVPN, recomendamos usar a porta padrão.

Em seguida, configure o servidor DNS. Recomendamos usar o Google Public DNS ou o Cloudflare DNS:
```
8.8.8.8 / 8.8.4.4 - Google Public DNS
1.1.1.1 / 1.0.0.1 - Cloudflare DNS
```

Depois disso, defina um nome para o cliente. Pode ser qualquer nome que desejar, por exemplo, o nome do seu dispositivo.

## Configuração

### Adicionar mais clientes

Se quiser criar várias conexões, é útil criar várias contas. Para criar outra conta, execute o comando:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Selecione `1` e confirme. Agora defina o nome do cliente.

### Remover clientes

Para remover um cliente, execute:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```

Selecione o número do cliente na sua lista que deseja remover e pressione `Enter`. Você será solicitado a confirmar a exclusão. Se tiver certeza, pressione `Y` e depois `Enter`.
O cliente será removido.

## Desinstalação

Se não precisar mais do OpenVPN, pode desinstalá-lo assim:
```
wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh
```
Pressione `3` e confirme. Confirme novamente e o OpenVPN será desinstalado.

## Conectar à VPN

Para se conectar à sua VPN, recomendamos usar o **[cliente OpenVPN](https://openvpn.net/community-downloads/)**. Basta baixar no dispositivo que deseja conectar.

Conecte via SFTP ao seu servidor para baixar o arquivo .ovpn criado e depois apague o arquivo do servidor. Após instalar o cliente, abra o programa. Clique com o botão direito no ícone do OpenVPN na barra de tarefas. Clique em 'Importar arquivo', selecione o arquivo baixado e clique em 'Abrir'. Para conectar, clique novamente no ícone e selecione "Conectar".

:::info
Se você importou vários arquivos, selecione o cliente que deseja usar e então clique em Conectar
:::