---
id: account-backup-storage
title: "Armazenamento de Backup: Armazene, Restaure e Baixe Backups"
description: "Descubra como armazenar e gerenciar seus backups com opções escaláveis para restauração e acesso fáceis → Saiba mais agora"
sidebar_label: Armazenamento de Backup
---

## Introdução

O Armazenamento de Backup oferece um local centralizado para guardar os backups criados a partir dos seus serviços. Ele permite que você mantenha os arquivos de backup de forma segura, restaure diretamente nos serviços ou faça o download para armazenamento local.

Cada conta inclui 10 GB de espaço gratuito para Armazenamento de Backup. Se precisar de mais capacidade, o armazenamento pode ser expandido até 200 GB mediante uma taxa adicional.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZBy57k2pbTcteKg/preview)



## Funcionalidade do armazenamento de backup

Os backups são criados diretamente pela interface web do respectivo serviço. Assim que um backup é gerado, ele é automaticamente armazenado no Armazenamento de Backup. Os backups armazenados podem ser usados de duas formas:

- Restaurados diretamente no serviço correspondente via a função de backup
- Baixados do Armazenamento de Backup para uso local



## Acessando arquivos de backup

Os arquivos de backup ficam disponíveis no Armazenamento de Backup imediatamente após a criação. Além de restaurar os backups pela interface do serviço, os arquivos também podem ser acessados via conexão FTP.



## Conectando ao Armazenamento de Backup via FTP

Para acessar o Armazenamento de Backup via FTP, instale um cliente FTP como o FileZilla para o seu sistema operacional e abra o aplicativo após a instalação. Ao abrir, a interface do FileZilla será exibida:

![img](https://screensaver01.zap-hosting.com/index.php/s/4CrofjFEe7TxYCR/preview)

Para estabelecer a conexão, insira os dados de acesso FTP nos campos no topo do FileZilla. Os detalhes necessários para conexão podem ser encontrados na interface web na página do Armazenamento de Backup. Abra a seção Armazenamento de Backup e clique no ícone localizado no topo da barra de menu.

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

Na página do Armazenamento de Backup, os dados de acesso FTP são exibidos na seção destacada abaixo. Insira as seguintes informações no FileZilla:

- **Servidor**: endereço IP
- **Nome de usuário**: nome de usuário FTP
- **Senha**: senha FTP

A porta não precisa ser especificada se estiver configurada como **21**. Clique em **Conectar** para estabelecer a conexão. Após a conexão ser bem-sucedida, os backups criados pelos seus serviços estarão visíveis nos diretórios correspondentes.

Digite o endereço IP no FileZilla no campo **Servidor**, o usuário no campo **Nome de usuário** e a senha no campo **Senha**. Não é necessário incluir a porta se for igual a *21*. Agora clique em **Conectar**.  
Se a conexão for bem-sucedida, você encontrará os backups criados pelos seus serviços nas respectivas pastas.

![img](https://screensaver01.zap-hosting.com/index.php/s/9PAFpxWHiJx9LnT/preview)



## Mensagens e logs de backup

A seção **Mensagens** na barra lateral exibe um log das ações relacionadas a backups. Ela mostra quais eventos de backup foram acionados, para qual serviço ou pacote, e em que horário.

![img](https://screensaver01.zap-hosting.com/index.php/s/nFfDMfQBNeE4Jt4/preview)
