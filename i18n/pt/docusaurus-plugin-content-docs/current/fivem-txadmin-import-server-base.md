---
id: fivem-txadmin-import-server-base
title: "FiveM: Importar base de servidor com txAdmin"
description: "Descubra como importar uma base de servidor pronta para o seu próprio servidor com txAdmin para uma configuração rápida e integração perfeita → Saiba mais agora"
sidebar_label: Importar base de servidor
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introdução

Encontrou uma base de servidor pronta na internet e quer subir ela no seu próprio servidor? Sem problema! Com o txAdmin, você pode importar uma base pronta de forma rápida e fácil – desde que você cuide de alguns requisitos e detalhes importantes. Neste guia, vamos mostrar como importar uma base de servidor.



<InlineVoucher />

## Preparação

Para começar o processo de configuração, é necessário que você já tenha baixado uma base de servidor pronta da internet para o seu computador e que o arquivo já esteja descompactado.

O conteúdo de uma base de servidor pode variar dependendo do tipo e do conteúdo do servidor, e os arquivos podem parecer diferentes. Porém, sua base de servidor geralmente deve conter os seguintes dados:

- **Configuração do servidor - `server.cfg` (obrigatório):** O arquivo de configuração do servidor contém todos os comandos/configurações relevantes para o seu servidor.
- **Pasta de recursos - `resource` (obrigatório):** A pasta de recursos contém todos os recursos prontos usados na base de servidor fornecida.
- **Arquivo SQL - `filenameXY.sql` (opcional):** Este arquivo contém a estrutura pronta do banco de dados necessária para o uso e comunicação entre os recursos e o banco de dados (se usado).

Os **dados (`server.cfg`, `resources`)** da base de servidor baixada devem ser enviados para o seu servidor de jogos. O **arquivo SQL** deve ser importado no banco de dados ZAP fornecido por nós.

### Arquivos do servidor
O upload dos dados da sua Base de Servidor é feito via FTP. Se você ainda não sabe exatamente como funciona, dê uma olhada no seguinte guia: [Acesso FTP](gameserver-ftpaccess.md)

Conecte-se ao seu servidor de jogos via FTP e navegue até a pasta `fivem`. Crie uma pasta para sua base de servidor lá, caso ainda não exista. Neste exemplo, o nome **ExampleServer** é usado para a base de servidor pronta.

![img](https://screensaver01.zap-hosting.com/index.php/s/HzDrADKgK3rqfKm/download)



Depois que a pasta for criada, os dados da Base de Servidor devem ser enviados. Para isso, navegue até a pasta recém-criada e envie a pasta de recursos e sua configuração do servidor. O resultado deve ficar assim:

![img](https://screensaver01.zap-hosting.com/index.php/s/xyAZyt8W5XcxGaF/preview)

 

### Banco de dados

Se sua Base de Servidor também requer o uso de um banco de dados, o arquivo SQL fornecido deve ser importado no seu banco de dados ZAP. Se você ainda não sabe exatamente como fazer isso, confira o seguinte guia: [Importar arquivo SQL](fivem-sql-file-import.md)

Importe seu arquivo SQL no banco de dados conforme descrito no guia. Mas antes, certifique-se de que você ajustou o conteúdo do arquivo SQL e especificou o nome correto do seu banco de dados ZAP. Para isso, substitua o valor original no comando Use '...' pelo nome do seu banco de dados ZAP.

:::warning Confira o conteúdo do arquivo SQL antes de importar
Por favor, certifique-se de que o conteúdo do arquivo SQL foi ajustado e está totalmente correto antes de importar. Caso contrário, aparecerá a seguinte mensagem de erro:

`Access denied for user ‘zapXXXXX-X’@’%’ to database ’originalDatabaseName’`
:::



## Configuração do txAdmin

A preparação para configurar o servidor agora está concluída. A configuração, instalação e ajustes finais do servidor são feitos pelo processo de setup da interface txAdmin. O guia a seguir explica detalhadamente como acessar o txAdmin e como exatamente fazer a configuração: [Configuração do txAdmin](fivem-txadmin-setup.md)



### Boas-vindas

Defina um nome que você gostaria de usar para o seu projeto. Esse nome não é para a lista de servidores, mas apenas para uso dentro da interface txAdmin e para mensagens no Chat/Discord. Continue para a etapa Tipo de Implantação.

![img](https://screensaver01.zap-hosting.com/index.php/s/FCmd5xQ89wSPHfe/preview)

### Tipo de Implantação

Em Tipo de Implantação, você precisa escolher como deseja configurar seu servidor. Você tem as seguintes opções: **Receitas Populares**, **Dados de Servidor Existente**, **Modelo de URL Remota** e **Modelo Personalizado**. Para o seu caso, escolha **Dados de Servidor Existente**.

![img](https://screensaver01.zap-hosting.com/index.php/s/oMSBwf6jmHMwtYn/preview)

### Selecionando os Caminhos

Agora, especifique o caminho onde sua base de servidor está localizada. A estrutura da pasta começa assim e deve ser estendida com o nome da sua base de servidor definida: `/home/zapXXXXX/gXXXXXXXX/fivem/ExampleServer`.

Você pode simplesmente copiar e colar a estrutura de pasta especificada como no screenshot e depois adicionar o nome da pasta da Base de Servidor que você criou. O resultado deve ficar assim:

![img](https://screensaver01.zap-hosting.com/index.php/s/eDPeDzSqfMbk7Tg/download)



Clique em **Next**. O arquivo de configuração do servidor `server.cfg` deve ser reconhecido agora. Confirme isso e finalize a configuração normal pelo botão **Save & Start**.



## Configuração

É bem provável que o servidor não consiga iniciar porque nem todas as informações necessárias estão corretas. Isso acontece, entre outras coisas, por informações incorretas sobre o endereço IP e porta do servidor, falta de informações do banco de dados para uma conexão bem-sucedida, além da falta da chave de licença. Por isso, ajustes finais na configuração do servidor ainda são necessários para concluir.

### Detalhes do servidor

Por padrão, as informações de endereço IP e porta fornecidas geralmente estão ausentes ou incorretas. Certifique-se de que as entradas para os endpoints estejam presentes e corretas no seu arquivo de configuração do servidor. A sintaxe é a seguinte:

```
endpoint_add_tcp "0.0.0.0:30120"
endpoint_add_udp "0.0.0.0:30120"
```

Substitua o endereço IP (0.0.0.0) e a porta (30120) pelas informações do seu servidor. Você pode encontrar esses dados na administração do seu servidor de jogos.

:::warning IP/porta incorretos
Se as informações configuradas não estiverem corretas, você verá a seguinte mensagem de erro:

```
Line XX: [ZAP-Hosting] the 'endpoint_add_tcp' interface MUST be 'XXX.XXX.XXX.XXX'
Line XX: [ZAP-Hosting] the 'endpoint_add_udp' interface MUST be 'XXX.XXX.XXX.XXX'
```
:::


### Banco de dados

Para que seu servidor consiga se conectar ao banco de dados, uma string de conexão MySQL com as informações do banco deve estar especificada no arquivo de configuração do servidor `server.cfg`. Por padrão, pode ser algo assim:

```sql
set mysql_connection_string "mysql://username:password@dataBaseHostname/databaseName?charset=utf8mb4"
```

Se essa string de conexão MySQL já existe ou não no seu arquivo de configuração depende da base de servidor que você está usando. Se não existir ou não contiver as informações necessárias, você precisará adicioná-la e ajustá-la. Você pode ver as informações do banco de dados na administração do servidor de jogos, em Bancos de Dados. O resultado pode ser, por exemplo:

```sql
set mysql_connection_string "mysql://zapXXXXXXX-X:yourDatabasePassword@mysql-mariadb-XX-XXX.zap-hosting.com/zapXXXXXX-X?charset=utf8mb4"
```

:::tip Facilite sua vida
Se quiser pular essa etapa, você pode clicar no botão **[Reconfigurar String de Conexão MySQL](https://screensaver01.zap-hosting.com/index.php/s/zZSmQex6ropFK3X/preview)** na administração do servidor de jogos, nas configurações no final da página.
:::


### Onesync

Se o arquivo de configuração `server.cfg` da sua Base de Servidor contiver informações sobre **Onesync**, elas devem ser removidas. Isso agora é gerenciado pelas configurações da interface txAdmin. Para ativar, você encontra a opção em **Configurações ⟶ FXServer**.

![img](https://screensaver01.zap-hosting.com/index.php/s/Y4LKM8ZRn4ZSFzp/download)

### Chave de licença

Para operar seu servidor, você precisa da sua própria chave de licença da CFX. Saiba como criar sua chave de licença no seguinte guia: [Chave de licença própria](fivem-licensekey.md)

Adicione a chave de licença no arquivo de configuração do servidor:

```
sv_licenseKey "suaChaveDeLicencaAqui"
```



## Conclusão

Parabéns! Depois de enviar os arquivos com sucesso, completar a configuração do txAdmin e fazer as alterações necessárias na configuração do servidor, você já pode iniciar e jogar no seu servidor com a sua base de servidor.

<InlineVoucher />