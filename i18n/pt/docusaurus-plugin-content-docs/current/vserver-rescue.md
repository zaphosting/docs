---
id: vserver-rescue
title: "VPS: Recupere seus arquivos usando o System Rescue"
description: "Descubra como recuperar dados e criar backups de um servidor que não inicializa usando o SystemRescue ISO de forma segura → Saiba mais agora"
sidebar_label: System Rescue (Backup)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Seu servidor não está mais inicializando? Você está bloqueado fora do sistema ou quer criar um backup antes de fazer alterações?  
Ao iniciar seu servidor com o **SystemRescue ISO**, você ainda pode acessar seus discos, restaurar arquivos importantes e criar backups localmente. Isso funciona mesmo se o sistema operacional original não estiver mais acessível.

Para transferir os dados recuperados de forma segura, você pode usar **SFTP (Secure File Transfer Protocol)**. Esse método permite copiar arquivos do sistema de resgate para seu computador local ou para outro servidor através de uma conexão segura e criptografada.

<InlineVoucher />

## Preparação

Para realizar o backup dos dados, você vai usar a **SystemRescue ISO versão 12.01**.  
Comece acessando a interface da sua VPS e navegue até a seção **ISOs**.

Selecione o ISO entre as opções disponíveis. Depois de escolher o ISO correto, clique em **Ajustar ordem de boot** e então no botão **Reiniciar** para iniciar o processo de boot.

![img](https://screensaver01.zap-hosting.com/index.php/s/pGXka7wkrsBe9XY/preview)

Quando o servidor iniciar pelo ISO, conecte-se a ele via [console VNC](vserver-vnc.md) para continuar. Quando o console estiver ativo, você verá o menu de boot do **SystemRescue** ISO. A partir daqui, selecione a opção para iniciar usando os **parâmetros padrão**.

Isso garante que o SystemRescue inicie com a configuração padrão recomendada, oferecendo um ambiente estável e pronto para manutenção do sistema ou tarefas de backup.

![img](https://screensaver01.zap-hosting.com/index.php/s/sw4jLc5AxwtMT5P/preview)

## Montando o(s) disco(s)

Antes de montar um disco, é importante ter uma visão geral dos dispositivos de armazenamento disponíveis e suas partições. Você pode fazer isso com o seguinte comando:

```
fdisk -l
```

Esse comando lista todos os discos detectados junto com os detalhes das partições. A saída inclui:

- Dispositivos de armazenamento conectados (ex: `/dev/sda`, `/dev/sdb`),  
- O tamanho de cada disco,  
- Tipos de partição,  
- Partições disponíveis (ex: `/dev/sda1`, `/dev/sda2`, …),  
- Tipo do sistema de arquivos (se detectado).

No exemplo, o disco `/dev/sda` tem três partições: `/dev/sda1`, `/dev/sda2` e `/dev/sda3`. Certifique-se de selecionar a partição correta antes de montar. A saída do `fdisk -l` ajuda a evitar erros mostrando claramente qual disco contém quais dados. Exemplo:

```
Disk /dev/sda: 111.76 GiB, 119998201240 bytes, 234373120 sectors
Device        Boot   Start       End   Sectors   Size Type
/dev/sda1      *       2048   1050623   1048576   512M EFI System
/dev/sda2           1050624   3147775   2097152     1G Linux filesystem
/dev/sda3           3147776 234440703 231292928   110G Linux LVM
```

Depois de identificar a partição correta, o próximo passo é criar um diretório que servirá como ponto de montagem. Esse será o local onde a partição ficará acessível. Em seguida, monte a partição desejada nesse diretório. Recomendamos montar em **modo somente leitura** para garantir acesso seguro aos dados.

Para criar o ponto de montagem e montar a partição, use os comandos:

```
mkdir /mnt/rescue
mount -o ro /dev/sdaX /mnt/rescue
```

Substitua `/dev/sdaX` pelo identificador correto da partição que você encontrou com o `fdisk -l`. No exemplo, `/dev/sda2` seria a partição correta para nosso disco.

## Configurando a rede

A rede não é configurada automaticamente. Para estabelecer conectividade, os parâmetros básicos da rede devem ser configurados manualmente. Antes de atribuir um endereço IP, é recomendado verificar o nome da placa de rede. Na maioria dos casos, a placa se chama **ens18**, mas isso pode variar. Você pode conferir executando o comando `ip a`.

Com o nome correto da placa, um endereço IP pode ser atribuído manualmente. Exemplo para configurar um endereço numa sub-rede local:

```
ip addr add <IP>/24 dev <adapter>
```

Substitua `<IP>` pelo endereço desejado e `<adapter>` pelo nome do dispositivo detectado, normalmente `ens18`. Para garantir que o sistema possa rotear o tráfego corretamente, também é necessário adicionar um gateway padrão:

```
ip route add default via <gateway>
```

Substitua `<gateway>` pelo endereço válido do gateway da sua rede. Após esses passos, a configuração da rede estará ativa e a conectividade pode ser testada, por exemplo, dando um ping em um host externo.

## Configurando o firewall

Por questões de segurança, o SystemRescue ativa seu firewall por padrão. Isso significa que todas as conexões de entrada são bloqueadas para proteger o sistema contra acessos não autorizados.

No entanto, neste caso, você precisa permitir uma conexão da sua máquina local para o servidor SFTP rodando no SystemRescue. Para isso, você deve configurar o firewall para liberar o tráfego SFTP ou desativá-lo temporariamente.

Se você estiver em uma rede confiável, a solução mais fácil e rápida é parar o serviço do firewall no SystemRescue com o comando:

```
systemctl stop iptables
```

## Definindo a senha do root

O cliente SFTP precisa se autenticar usando um nome de usuário e uma senha para acessar os dados do servidor SFTP. A conta root do sistema é usada para que o cliente possa acessar os arquivos visíveis no SystemRescue. Por padrão, a autenticação como root no SystemRescue não é permitida. É necessário definir uma senha para permitir a autenticação do cliente. Defina uma senha com o comando:

```
[root@sysrescue ~]# passwd root
New password:
Retype new password:
passwd: password updated successfully
```

## Transferência de dados

Agora você está pronto para fazer o backup dos seus dados. Para isso, basta abrir qualquer cliente FTP de sua preferência e estabelecer uma conexão com seu servidor. Certifique-se de selecionar `SFTP` como protocolo de transferência. No hostname, insira o `endereço IP` do seu servidor, use a porta `21` e faça login com o usuário `root` e a `senha` que você definiu anteriormente.

![img](https://screensaver01.zap-hosting.com/index.php/s/armZ9db3nXsJW2o/download)

Ao conectar a um servidor via **SFTP** pela primeira vez, o WinSCP mostra esse aviso de segurança. O alerta aparece porque a **chave do host** do servidor ainda não está armazenada no cache local.

Nessa situação, onde você sabe que o endereço IP está correto e iniciou essa conexão intencionalmente, **é seguro confiar no servidor**. Basta clicar em **"Yes"** para confirmar. Isso adicionará a chave do servidor ao seu cache para que você não seja mais perguntado sobre esse servidor no futuro.

![img](https://screensaver01.zap-hosting.com/index.php/s/y5353jyzky67LxB/preview)

Agora que você está conectado, navegue até o **diretório rescue** que você criou anteriormente. A partir daí, você terá acesso aos seus arquivos e pode começar a baixá-los para sua máquina local. Basta navegar pelas pastas, selecionar os dados que deseja fazer backup e transferi-los com segurança via SFTP.

![img](https://screensaver01.zap-hosting.com/index.php/s/QiS4wiTWXx6g8aT/download)

## Conclusão

Você agora resgatou e fez backup dos seus arquivos importantes com sucesso.  
Isso significa que seus dados estão seguros e prontos para serem restaurados sempre que precisar. A partir daqui, você pode seguir com outras ações, como reinstalar seu servidor, reparar o sistema ou migrar seus dados para um novo ambiente.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />