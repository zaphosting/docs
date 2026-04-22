---
id: dedicated-linux-phpmyadmin
title: "Configure o phpMyAdmin em um Servidor Linux - Gerencie Seus Bancos de Dados via Interface Web"
description: "Descubra como gerenciar bancos de dados MySQL e MariaDB facilmente com a interface web do phpMyAdmin para uma administração eficiente → Saiba mais agora"
sidebar_label: Instalar phpMyAdmin
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

phpMyAdmin é uma ferramenta gratuita baseada na web para gerenciar bancos de dados MySQL e MariaDB. Ela oferece uma interface amigável que permite criar, editar, gerenciar e excluir bancos de dados sem precisar digitar comandos SQL manualmente.

## Instale o phpMyAdmin com o Instalador One Click Apps

Você pode instalar o **phpMyAdmin** diretamente pelo nosso **Instalador One Click Apps** na interface web da VPS. Após concluir a configuração inicial dos apps, abra o catálogo de apps, busque por **phpMyAdmin** e inicie a implantação com seu projeto, ambiente e configurações de domínio preferidos. Isso te dá uma forma rápida e prática de instalar e gerenciar o **phpMyAdmin** sem precisar configurar via linha de comando, aproveitando a gestão integrada via web, suporte a domínio personalizado e provisionamento SSL quando disponível.

## Preparação

Antes de começar a instalação, certifique-se de que o sistema está atualizado. Atualizações pendentes podem ser feitas com os comandos:

```
sudo apt update -y
sudo apt upgrade -y
```

Você também precisa garantir que o PHP já esteja instalado no seu sistema. Isso é essencial para usar o phpMyAdmin. Para saber como instalar o PHP, confira nosso [guia Instalar PHP](vserver-linux-php.md).

:::warning Pacotes PHP faltando
Se os pacotes PHP necessários estiverem faltando, os arquivos PHP do phpMyAdmin não poderão ser processados e exibidos corretamente.
:::

## Instalação

Com a preparação concluída, agora você pode começar a instalar a interface do phpMyAdmin. Para isso, abra o diretório onde o phpMyAdmin será instalado.

Navegue até o diretório com o comando `cd /usr/share`. A versão mais recente do phpMyAdmin deve ser baixada para o diretório de instalação usando o `wget`:

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
Se o serviço `wget` não for encontrado, ele pode ser instalado com o comando `sudo apt install wget -y`.
:::

Quando o download terminar, descompacte o arquivo ZIP com o comando:

```
unzip phpmyadmin.zip
```
:::warning
Se o serviço `unzip` não for encontrado, ele pode ser instalado com o comando `sudo apt install unzip -y`.
:::

Agora renomeie o arquivo descompactado para um nome mais simples, remova o arquivo ZIP e defina as permissões necessárias:

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## Configuração

### Arquivo de configuração do servidor web

Agora o phpMyAdmin precisa ser adicionado à configuração do servidor web. Para isso, use `nano /etc/apache2/conf-available/phpmyadmin.conf` para criar um novo arquivo de configuração de Virtual Host e preencha com o conteúdo abaixo:

```
# Configuração Apache para phpMyAdmin

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# Bloqueia acesso web por segurança a diretórios que não precisam
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

O arquivo de configuração do virtual host criado deve ser ativado e recarregado. Para isso, execute:

```
a2enconf phpmyadmin
systemctl reload apache2
```

### Criando diretório temporário necessário

Para garantir que o phpMyAdmin funcione corretamente, crie um diretório temporário e defina as permissões necessárias com os comandos:

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## Conclusão

Parabéns, você instalou e configurou o phpMyAdmin com sucesso! Você pode acessar a interface web usando o endereço IP e o caminho do seu servidor (`http://Endereço-IP/phpmyadmin`). Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂
