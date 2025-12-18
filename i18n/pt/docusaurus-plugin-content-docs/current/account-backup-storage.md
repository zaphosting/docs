---
id: account-backup-storage
title: Armazenamento de Backup
description: "Descubra como armazenar e gerenciar seus backups com segurança usando opções de armazenamento escaláveis para fácil restauração e acesso → Saiba mais agora"
sidebar_label: Armazenamento de Backup
---

## O que é armazenamento de backup?
O Armazenamento de Backup oferece aos nossos clientes a possibilidade de criar backups via seus serviços. Cada cliente tem um espaço gratuito de 10GB no seu armazenamento de backup, que pode usar totalmente. Porém, por uma pequena taxa adicional, é possível ampliar o armazenamento para até 200GB.

## Como acesso meus arquivos de backup?
Os arquivos de backup são colocados no armazenamento de backup assim que um backup é criado via interface web. Os arquivos podem então ser restaurados para o respectivo serviço usando a função de backup desse serviço ou baixados do armazenamento de backup via conexão FTP.

### Conecte-se ao armazenamento de backup via FTP
Para conectar ao Armazenamento de Backup via FTP, baixe e instale o programa [FileZilla](http://www.filezilla.de/download.htm) para seu sistema operacional. Quando a instalação estiver completa, abra o programa.
Você verá a interface do FileZilla:

![2022-04-08_04-41](https://screensaver01.zap-hosting.com/index.php/s/XHa7gfPBKcGgYj4/preview)

Para conectar ao seu armazenamento de backup, insira os dados de conexão nos campos de texto acima.
Você encontra esses dados na página do seu armazenamento de backup na interface web.
Clique neste ícone no topo da barra de menu:

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

Na página do Armazenamento de Backup, você encontrará seus dados de acesso para a conexão FTP na caixa marcada na imagem:

![2022-04-08_04-39](https://screensaver01.zap-hosting.com/index.php/s/pziwNeT9jmFC5Ax/preview)

Digite o endereço IP no FileZilla no campo **Servidor**, o usuário no campo **Nome de usuário** e a senha no campo **Senha**. Não é necessário incluir a porta se for *21*. Agora clique em **Conectar**.
Se a conexão for bem-sucedida, você encontrará os backups criados pelos seus serviços nas respectivas pastas.

![2022-04-08_04-41_1](https://screensaver01.zap-hosting.com/index.php/s/K9MZHf8napDMCjT/preview)

![2022-04-08_04-41_2](https://screensaver01.zap-hosting.com/index.php/s/ca7DkJ2T6DpxTFH/preview)

Os backups estão em formato compactado como arquivos **\*.tar.gz** nas respectivas pastas e podem ser descompactados com programas como WinRAR ou 7-Zip.

## Mensagem de erro "Transfer connection interrupted"

Se a mensagem de erro "Transfer connection interrupted: ECCONABORTED - Connection aborted" aparecer durante a conexão ou transferência, o modo de transferência pode ser alterado de "**Passivo**" para "**Ativo**".
Os passos a seguir mostram como fazer essa alteração nas configurações do FileZilla.

Clique em "**Editar**" no seu cliente FileZilla, depois abra diretamente "**Configurações...**":

![2022-04-08_05-16](https://screensaver01.zap-hosting.com/index.php/s/AgrmP6i5aAEr2kr/preview)

Depois disso, a janela de "**Configurações**" abrirá. Lá você pode clicar em "**FTP**" para ver as configurações da conexão FTP.
Em "**FTP**", o modo de transferência padrão estará definido como "**Passivo**", você pode selecionar o botão de opção "**Ativo**" e confirmar a mudança com "**OK**".

![2022-04-08_05-17](https://screensaver01.zap-hosting.com/index.php/s/REPQieY3Zbm8arM/preview)

Assim que isso for feito, a conexão FTP pode ser testada novamente.

## Mensagens
Na barra lateral, no subitem *Mensagens*, é exibido o log que mostra qual ação foi executada durante os backups, para qual pacote e quando, com base no gatilho/motivo.

![2022-04-08_04-42](https://screensaver01.zap-hosting.com/index.php/s/GwtGHoDL7d9r3Ds/preview)