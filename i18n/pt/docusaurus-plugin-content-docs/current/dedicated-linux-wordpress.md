---
id: dedicated-linux-wordpress
title: "Servidor Dedicado: Instalação do WordPress"
description: "Descubra como instalar o WordPress em um servidor Linux usando o stack LAMP para construir e gerenciar seu site de forma eficiente → Saiba mais agora"
sidebar_label: Instalar WordPress
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

WordPress é um sistema popular de gerenciamento de conteúdo web usado para gerenciar e publicar sites. Atualmente, o WordPress evoluiu para diversas outras áreas, como mailing, fóruns, lojas e muito mais. Isso é reforçado por uma comunidade ativa que criou um ecossistema forte de plugins junto com templates que facilitam a configuração para qualquer usuário final. Neste guia, vamos cobrir o processo de instalação do CMS WordPress em um servidor Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

<InlineVoucher />

## Preparação

Comece conectando-se ao seu servidor via SSH. Se você não sabe como fazer isso, dê uma olhada no nosso [guia de Acesso Inicial (SSH)](dedicated-linux-ssh.md).

:::info
Neste guia, usaremos a distro Ubuntu, combinada com Apache como servidor web, MySQL para banco de dados e PHP como dependência principal. Isso é conhecido como stack LAMP: Linux, Apache, MySQL e PHP.
:::

Depois de logado, comece rodando o comando de atualização.
```
sudo apt update
```

Em seguida, você pode instalar todas as dependências necessárias. Basta copiar o comando completo abaixo e colar para instalar tudo de uma vez. Tenha paciência, pois pode levar algum tempo para instalar tudo.
```
sudo apt install apache2 \
                 ghostscript \
                 libapache2-mod-php \
                 mysql-server \
                 php \
                 php-bcmath \
                 php-curl \
                 php-imagick \
                 php-intl \
                 php-json \
                 php-mbstring \
                 php-mysql \
                 php-xml \
                 php-zip
```

Com as dependências instaladas, há alguns pequenos passos recomendados para garantir que todas as dependências principais do stack LAMP estejam funcionando.

### Apache & Firewall

Para começar, você precisará configurar o firewall para permitir que o servidor web Apache se comunique com a internet e garantir que ele esteja funcional. É importante que as regras apropriadas do firewall sejam criadas para garantir que o servidor web seja acessível pela internet.

Neste exemplo, usaremos o **Firewall UFW**, já que o Apache tem uma aplicação registrada para ele. Se você estiver usando outro firewall, certifique-se de liberar a porta 80 (HTTP) no firewall. Você pode aprender mais sobre firewalls no Linux no nosso guia [Gerenciar Firewall](vserver-linux-firewall.md).

Certifique-se de que o firewall UFW esteja ativado e que uma regra para SSH esteja criada.
```
# Criar regra para permitir SSH
sudo ufw allow OpenSSH

# Ativar Firewall UFW
sudo ufw enable
```

:::caution
Certifique-se de ter uma regra configurada para SSH se estiver usando o firewall UFW! Caso contrário, você **não** conseguirá acessar o servidor via SSH novamente se perder a conexão atual!
:::

Agora crie a regra para permitir o Apache e depois verifique se as regras estão presentes.
```
# Criar regra para permitir Apache
sudo ufw allow in "Apache Full"

# Verificar regras do firewall UFW
sudo ufw status
```

:::tip
Você pode ver quais perfis estão disponíveis rodando o comando `ufw app list`. No exemplo acima, usar `Apache Full` significa que as regras para HTTP (porta 80) e HTTPS (porta 443) são criadas.
:::

Você deve ver as regras `Apache` e `Apache (v6)` com ações `ALLOW` configuradas, o que confirma que o firewall está pronto. Você também verá outras regras que tenha configurado anteriormente, incluindo a regra SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Com o firewall liberado para o Apache, agora você deve garantir que o Apache está funcional. Você pode fazer isso tentando acessar seu endereço IP no navegador, assim: `http://[seu_endereço_ip]`

Se estiver funcionando, você verá uma página de boas-vindas padrão. Se não conseguir, verifique o status do serviço com o comando: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Configuração do MySQL

A próxima etapa é realizar a configuração inicial do MySQL. É recomendado rodar um script de instalação segura, que garante que sua instância do servidor MySQL permaneça segura. Isso é opcional, mas altamente recomendado. Você pode rodar com o comando `sudo mysql_secure_installation`.

Isso vai te guiar por uma configuração interativa. Primeiro, você será perguntado sobre a validação de senha. Recomendamos selecionar `Y` para garantir que apenas senhas seguras sejam permitidas no futuro e depois escolher `MEDIUM` com `1` ou `STRONG` com `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Depois, será perguntado sobre remover o usuário `anonymous` e desabilitar o login remoto do root. Para ambos, recomendamos aceitar com `Y` por questões de segurança. Isso garante que o usuário de teste seja removido e que o usuário master `root` só possa ser usado localmente via SSH, reduzindo riscos.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Por fim, será perguntado sobre remover o banco de dados `test` e recarregar as tabelas de privilégios. Novamente, recomendamos aceitar com `Y`, pois a tabela de teste não é necessária e é preciso recarregar as tabelas para que as mudanças tenham efeito.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Agora verifique se o banco de dados MySQL está rodando tentando logar com o comando: `sudo mysql -u root`. Se conseguir, verá uma mensagem de boas-vindas. Você pode sair usando o comando `quit` quando quiser.

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### Testando o PHP

Por último, você deve garantir que o PHP está funcionando como esperado. Para isso, crie um arquivo `info.php` no diretório `/var/www/html/` do Apache com o conteúdo para rodar o comando `phpinfo()`.
```
# Abrir o editor nano no novo arquivo
nano /var/www/html/info.php

# Cole o seguinte conteúdo no editor
<?php
phpinfo();
?>
```

Quando terminar, salve o arquivo pressionando `CTRL+X`, depois `Y` e `Enter` para confirmar as alterações.

Agora acesse a URL abaixo, que deve mostrar uma página de informações do PHP se estiver funcionando corretamente.
```
http://[seu_endereço_ip]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

Com as dependências principais do LAMP testadas e funcionando, você está pronto para seguir com a instalação principal do WordPress CMS.

## Instalação

A instalação do WordPress pode ser dividida em três etapas: preparar o banco de dados MySQL, instalar o WordPress e, por fim, configurar usando o assistente de instalação do WordPress.

### Banco de Dados MySQL

Para começar a instalação, você precisará criar um novo banco de dados MySQL. Isso é importante lembrar, pois você usará essas informações no assistente de instalação do WordPress depois. Recomendamos usar nossos exemplos.

Copie os comandos abaixo para criar o banco de dados, tabelas e usuários necessários.
```
# Logar no MySQL
sudo mysql -u root

# Criar banco de dados
CREATE DATABASE wordpress;

# Criar usuário dedicado para wordpress
# Substitua [your_password] pela sua senha
CREATE USER wordpress@localhost IDENTIFIED BY '[your_password]';

# Definir privilégios para o usuário (copie tudo junto)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# Recarregar as tabelas
FLUSH PRIVILEGES;
```

Depois de configurar o banco e criar o usuário, saia com o comando `quit`. Agora você está pronto para instalar o WordPress.

### Instalando o WordPress

Para a instalação principal do WordPress, recomendamos e usaremos a versão oficial do **wordpress.org** diretamente, em vez do pacote APT, pois isso é recomendado pelo WordPress para evitar possíveis problemas.

Para baixar o arquivo mais recente, use o comando abaixo, que fará o download para o diretório temporário.
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

Agora extraia o arquivo, que criará uma pasta `wordpress` com todos os arquivos necessários.
```
tar -xvf latest.tar.gz
```

Com os arquivos extraídos, você precisará copiar a pasta para o diretório `/var/www/html/` do Apache para tornar tudo acessível via web. Rode os comandos abaixo para copiar a pasta, criar o diretório `uploads` e ajustar permissões para garantir que o grupo `www-data` do servidor web tenha acesso.
```
# Copiar a pasta wordpress e atualizar propriedade
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# Criar diretório uploads
mkdir /var/www/html/wordpress/wp-content/uploads

# Ajustar permissões dos arquivos
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

Com isso feito, o WordPress deve estar instalado. Acesse o assistente de instalação do WordPress via: `http://[seu_endereço_ip]/wordpress`

### Assistente de Configuração

No assistente, você poderá configurar o WordPress, que é a etapa final da instalação. Primeiro, será solicitado que escolha o idioma.

Depois, você terá que configurar as informações do banco de dados. Você já preparou isso no MySQL na primeira parte da instalação, então use as mesmas credenciais e valores aqui. Se seguiu nossos exemplos, preencha as opções assim, substituindo `[your_password]` pela senha que você definiu.

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

Com essa etapa concluída, você será solicitado a iniciar a instalação. Essa é a última parte do processo.

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

Na página seguinte, você deverá inserir várias informações, incluindo o título do site, um e-mail, nome de usuário e senha para a conta root do WordPress para acessar o painel. Também pode decidir sobre a visibilidade para motores de busca, se quer que seu site seja indexado ou desencorajado.

:::tip
Escolha uma senha forte e salve as credenciais para não perder o acesso ao painel do WordPress!
:::

Quando estiver pronto, clique no botão **Instalar WordPress** para finalizar o processo.

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

Você será levado para uma página de sucesso que redireciona para a página de **Login**. Clique nela e use as credenciais para acessar seu painel WordPress pela primeira vez!

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

E assim, ao fazer login com sucesso, você estará no painel do WordPress, com a instalação completa.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## Conclusão

Parabéns, você instalou e configurou o WordPress com sucesso! Como próximo passo, **recomendamos fortemente** configurar um domínio e um **certificado SSL** para garantir que os dados sejam transmitidos com segurança e facilitar o acesso ao painel do WordPress. Confira nosso [guia Certbot](dedicated-linux-certbot.md) com foco no **Plugin Apache** e siga a configuração interativa para configurar um certificado para seu domínio escolhido de forma rápida e fácil.

Para leituras futuras e configurações adicionais, recomendamos dar uma olhada nos nossos guias de [Plugins WordPress](webspace-wordpress-plugins.md) e [WordPress Elementor](webspace-wordpress-elementor.md), que exploram o processo de instalação de plugins e o uso do Elementor, um construtor de páginas popular e fácil de usar.

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />