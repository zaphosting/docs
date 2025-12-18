---
id: vserver-linux-rsync
title: "VPS: Fazendo backup de servidores Linux com Rsync"
description: "Aprenda a criar backups incrementais eficientes com Rsync para sincronização local ou remota de dados → Saiba mais agora"
sidebar_label: Criar Backups com Rsync
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Rsync:

Backups podem ser feitos com a ferramenta Rsync.  
Eles podem ser copiados no próprio sistema local para outro diretório/drive ou para um sistema remoto.  

## Copiar dados para outro diretório ou drive local:

:::info
Atenção: A primeira execução pode levar muito mais tempo que as seguintes, dependendo da quantidade de dados. Isso porque na primeira vez o Rsync sincroniza todos os dados, a partir da segunda vez só os dados alterados serão sincronizados. 
:::
>Assim, um backup incremental é criado.  

## Passo 1

O Rsync pode ser instalado com o seguinte comando:

```
apt install rsync
```

Depois de instalado, pode ser usado diretamente. 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Backup diário para um diretório/drive local" label="Backup diário para um diretório/drive local">
## Passo 2

Neste exemplo, a pasta Client dentro de /home deve ser sincronizada com a pasta Backup dentro de /home. 

Isso pode ser feito com o seguinte comando: 

```
rsync -arz /home/Client /home/Backup
```
-a=Arquivamento, os atributos serão copiados  
<br/>
-r=Recursivo, subpastas também são sincronizadas  
<br/>
-z=Compressão, dependendo da quantidade/tamanho dos dados, é comprimido  


A pasta foi sincronizada com sucesso. 

Se um arquivo, etc., na pasta Client for deletado agora, ele permanecerá na pasta Backup.  
Mas como os arquivos devem estar sempre sincronizados 1:1, o comando rsync pode ser facilmente alterado, essa mudança garante que dados que não existem mais na pasta Client também sejam removidos da pasta Backup. 

O comando modificado é: 

```
rsync -arz --delete /home/Client /home/Backup
```
-a=Arquivamento, os atributos serão copiados  
<br/>
-r=Recursivo, subpastas também são sincronizadas  
<br/>
-z=Compressão, dependendo da quantidade/tamanho dos dados, é comprimido  
<br/>
--delete= Deleta dados que não existem mais na origem mas ainda existem no destino

## Passo 3

Para não precisar executar o comando manualmente toda hora, ele pode ser colocado em um cronjob.  
Por exemplo, um backup deve ser criado diariamente às 3 da manhã: 

Abra crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/9ScQ7roDkzWcSFW/preview)

Com o número 1, o "nano" pode ser usado como editor.  
Com o número 2, o "vim" pode ser usado como editor.  

Depois que o arquivo for aberto com, por exemplo, Nano, um crontab pode ser criado e inserido.  
Um crontab pode ser criado com este [Gerador](https://crontab-generator.org/). 

O crontab inserido fica assim: 

 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

Todo dia às 3 da manhã o comando é executado e um backup é criado. 

</TabItem>
<TabItem value="Backup diário para um sistema remoto" label="Backup diário para um sistema remoto">

## Passo 4

Neste exemplo, a pasta Client dentro de /home deve ser sincronizada com a pasta Backup em um sistema remoto. A conexão será feita via chave SSH, para que o backup possa ser automatizado.  
>Importante: O Rsync também deve estar instalado no servidor remoto.  
>```
>apt install rsync
>```

Por exemplo, o seguinte comando pode ser usado para fazer backup dos dados para o host remoto (personalização necessária): 

```
rsync --progress -arz -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```

-a=Arquivamento, os atributos serão copiados  
<br/>
-r=Recursivo, subpastas também são sincronizadas  
<br/>
-z=Compressão, dependendo da quantidade/tamanho dos dados, é comprimido  
<br/>
-e=Especifica a porta SSH (padrão 22)  
<br/>
Especifica a chave SSH (caminho)("ssh -i /home/sshkey/keybackup")= ssh -i /[caminho da chave]  
<br/>
Especifica o diretório a ser salvo (/home/client/)= /[diretório]  
<br/>
RemoteHost(root@123.123.123.123:)= Nome de login do usuário no RemoteHost e endereço: nome@IP/Domínio  
<br/>
Diretório alvo para os dados no RemoteHost(:/home/Backup/Home-Server1/)= :/[caminho do diretório]

A pasta/arquivos foram sincronizados/salvos com sucesso no diretório remoto após executar o comando.
  

Se um arquivo, etc., for deletado na pasta Client, ele permanecerá na pasta Backup no host remoto.  
Mas como os arquivos devem estar sempre sincronizados 1:1, o comando rsync pode ser facilmente modificado para remover dados que não existem mais na pasta Client do backup no host remoto. 

O comando modificado é:

```
rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/
```
-a=Arquivamento, os atributos serão copiados  
<br/>
-r=Recursivo, subpastas também são sincronizadas  
<br/>
-z=Compressão, dependendo da quantidade/tamanho dos dados, é comprimido  
<br/>
--delete= Deleta dados que não existem mais na origem mas ainda existem no destino  
<br/>
-e=Especifica a porta SSH (padrão 22)  
<br/>
Especifica a chave SSH (caminho)("ssh -i /home/sshkey/keybackup")= ssh -i /[caminho da chave]  
<br/>
Especifica o diretório a ser salvo (/home/client/)= /[diretório]  
<br/>
RemoteHost(root@123.123.123.123:)= Nome de login do usuário no RemoteHost e endereço: nome@IP/Domínio  
<br/>
Diretório alvo para os dados no RemoteHost(:/home/Backup/Home-Server1/)= :/[caminho do diretório alvo]

## Passo 5

Para não precisar executar o comando manualmente toda hora, ele pode ser colocado em um cronjob.  
Por exemplo, um backup deve ser criado diariamente às 3 da manhã: 

Abra crontab -e:

![](https://screensaver01.zap-hosting.com/index.php/s/9ScQ7roDkzWcSFW/preview)

Com o número 1, o "nano" pode ser usado como editor.  
Com o número 2, o "vim" pode ser usado como editor.  

Depois que o arquivo for aberto com, por exemplo, Nano, um crontab pode ser criado e inserido.  
Um crontab pode ser criado com este [Gerador](https://crontab-generator.org/). 

O crontab inserido fica assim: 
  
  
 ```
0 3 * * * rsync --progress -arz --delete -e  "ssh -i /home/sshkey/keybackup" /home/Client/ root@123.123.123.123:/home/Backup/Home-Server1/ >/dev/null 2>&1
```

Todo dia às 3 da manhã o comando é executado e um backup é criado. 

</TabItem>
</Tabs>

<InlineVoucher />