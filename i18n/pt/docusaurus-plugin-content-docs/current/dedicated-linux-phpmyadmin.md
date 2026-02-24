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

## Preparação

Antes de começar a instalação, certifique-se de que o sistema está atualizado. Atualizações pendentes podem ser feitas com os comandos:

```
sudo apt update -y
sudo apt upgrade -y
```

Você também deve garantir que o PHP já esteja instalado no seu sistema. Isso é essencial para o uso do phpMyAdmin. Para saber como instalar o PHP, confira nosso [guia Instalar PHP](vserver-linux-php.md).

:::warning Pacotes PHP faltando
Se os pacotes PHP necessários estiverem faltando, os arquivos PHP do phpMyAdmin não poderão ser processados e exibidos corretamente.
:::

## Instalação

Com a preparação concluída, agora você pode iniciar a instalação da interface phpMyAdmin. Para isso, abra o diretório onde o phpMyAdmin será instalado.

Navegue até o diretório correspondente com o comando `cd /usr/share`. Em seguida, baixe a versão mais recente do phpMyAdmin para o diretório de instalação usando o `wget`:

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
Se o comando `wget` não for encontrado, instale-o com `sudo apt install wget -y`.
:::

Quando o download terminar, descompacte o arquivo ZIP com o comando:

```
unzip phpmyadmin.zip
```

:::warning
Se o comando `unzip` não for encontrado, instale-o com `sudo apt install unzip -y`.
:::

Agora, renomeie o diretório descompactado para um nome mais simples, remova o arquivo ZIP e defina as permissões necessárias:

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## Configuração

### Arquivo de configuração do servidor web

Agora o phpMyAdmin precisa ser adicionado à configuração do servidor web. Use `nano /etc/apache2/conf-available/phpmyadmin.conf` para criar um novo arquivo de configuração de Virtual Host e preencha com o seguinte conteúdo:

```
# Configuração do phpMyAdmin para Apache

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# Bloqueia acesso web para segurança em diretórios que não precisam
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

Depois de preencher o arquivo de configuração do Apache2 para phpMyAdmin, salve e feche com `CTRL+X`, depois pressione `Y` e confirme com `Enter`.

Ative e recarregue a configuração do Virtual Host recém-criada com os comandos:

```
a2enconf phpmyadmin
systemctl reload apache2
```

### Criando o diretório temporário necessário

Para garantir que o phpMyAdmin funcione corretamente, crie um diretório temporário e defina as permissões necessárias com os comandos:

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## Conclusão

Parabéns, você instalou e configurou o phpMyAdmin com sucesso! Você pode acessar a interface web usando o endereço IP e o caminho do seu servidor (`http://Endereço-IP/phpmyadmin`). Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂