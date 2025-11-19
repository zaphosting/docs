---
id: dedicated-linux-phpmyadmin
title: "Servidor Dedicado: Instalação do phpMyAdmin"
description: "Descubra como gerenciar bancos de dados MySQL e MariaDB facilmente com a interface web do phpMyAdmin para uma administração eficiente → Saiba mais agora"
sidebar_label: Instalar phpMyAdmin
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

phpMyAdmin é uma ferramenta gratuita baseada na web para gerenciar bancos de dados MySQL e MariaDB. Ela oferece uma interface amigável que permite criar, editar, gerenciar e excluir bancos de dados sem precisar digitar comandos SQL manualmente.

## Preparação

Antes de começar a instalação, certifique-se de que o sistema está atualizado. Atualizações pendentes podem ser feitas com os comandos:

```
sudo apt update -y
sudo apt upgrade -y
```

Você também deve garantir que o PHP já esteja instalado no seu sistema. Isso é essencial para usar o phpMyAdmin. Para saber como instalar o PHP, confira nosso [guia Instalar PHP](dedicated-linux-php.md).

:::warning Pacotes PHP faltando
Se os pacotes PHP necessários estiverem faltando, os arquivos PHP do phpMyAdmin não poderão ser processados e exibidos corretamente.
:::

## Instalação

Se a preparação foi concluída, agora pode começar a instalação da interface phpMyAdmin. Para isso, primeiro abra o diretório de instalação onde o phpMyAdmin será instalado.

Navegue até o diretório correspondente com o comando `cd /usr/share`. A versão mais recente do phpMyAdmin deve ser baixada para o diretório de instalação usando o `wget`:

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
Se o serviço `wget` não for encontrado, ele pode ser instalado com o comando `sudo apt install wget -y`.
:::

Assim que o download terminar, o arquivo ZIP baixado pode ser descompactado com o comando:

```
unzip phpmyadmin.zip
```
:::warning
Se o serviço `unzip` não for encontrado, ele pode ser instalado com o comando `sudo apt install unzip -y`.
:::

O arquivo descompactado pode agora ser renomeado para um nome mais simples, o arquivo ZIP removido e as permissões necessárias configuradas:

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## Configuração

### Arquivo de configuração do servidor web

Agora o phpMyAdmin deve ser adicionado à configuração do servidor web. Para isso, use `nano /etc/apache2/conf-available/phpmyadmin.conf` para criar um novo arquivo de configuração de Virtual Host e preencha com o seguinte conteúdo:

```
# Configuração do Apache para phpMyAdmin

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# Bloquear acesso web por segurança para diretórios que não precisam
<Directory /usr/share/phpmyadmin/templates>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/libraries>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/setup/lib>
    Require all denied
</Directory>
```

Depois de preencher a configuração do Apache2 para phpMyAdmin, salve e feche com `CTRL+X`, depois pressione `Y` e confirme com `Enter`.

O arquivo de configuração do virtual host recém-criado deve ser ativado e carregado. Para isso, execute os comandos:

```
a2enconf phpmyadmin
systemctl reload apache2
```

### Criando diretório temporário necessário

Para garantir que o phpMyAdmin funcione corretamente, um diretório temporário deve ser criado e as permissões necessárias configuradas. Faça isso com os comandos:

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## Conclusão

Parabéns, você instalou e configurou o phpMyAdmin com sucesso! Você pode acessar a interface web usando o endereço IP e o caminho do seu servidor (http://Endereço-IP/phpmyadmin). Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂