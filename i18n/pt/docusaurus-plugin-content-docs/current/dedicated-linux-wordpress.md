---
id: dedicated-linux-wordpress
title: "Configure o WordPress em um Servidor Linux - Lance Seu Próprio Site ou Blog"
description: "Descubra como instalar o WordPress em um servidor Linux usando o stack LAMP para construir e gerenciar seu site de forma eficiente → Saiba mais agora"
sidebar_label: Instalar WordPress
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

WordPress é um sistema popular de gerenciamento de conteúdo web usado para gerenciar e publicar sites. Atualmente, o WordPress evoluiu para diversas outras áreas como mailing, fóruns, lojas e muito mais. Isso é reforçado por uma comunidade ativa que criou um ecossistema forte de plugins junto com templates que facilitam a configuração para qualquer usuário final. Neste guia, vamos cobrir o processo de instalação do CMS WordPress em um servidor Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)



## Preparação

Comece conectando-se ao seu servidor via SSH. Se você não sabe como fazer isso, dê uma olhada no nosso [guia de Acesso Inicial (SSH)](dedicated-linux-ssh.md).

:::info
Neste guia, usaremos a distro Ubuntu, combinada com Apache como servidor web, MySQL para banco de dados e PHP como dependência principal. Isso é conhecido como stack LAMP: Linux, Apache, MySQL e PHP.
:::

Depois de logado, comece executando o comando de atualização.
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

Neste exemplo, usaremos o **Firewall UFW** já que o Apache tem um aplicativo registrado para ele. Se você usa outro firewall, certifique-se de liberar a porta 80 (HTTP) no firewall. Você pode aprender mais sobre firewalls no Linux através do nosso guia [Gerenciar Firewall](vserver-linux-firewall.md).

Certifique-se de que o firewall UFW esteja ativado e que uma regra para SSH esteja criada.
```
# Crie uma regra para permitir SSH
sudo ufw allow OpenSSH

# Ative o Firewall UFW
sudo ufw enable
```

:::caution
Certifique-se de ter uma regra configurada para SSH se estiver usando o firewall UFW! Caso contrário, você **não** conseguirá acessar o servidor via SSH novamente se perder a conexão atual!
:::

Agora crie a regra para permitir o Apache e depois verifique se as regras estão presentes.
```
# Crie uma regra para permitir Apache
sudo ufw allow in "Apache Full"

# Verifique as regras do firewall UFW
sudo ufw status
```

:::tip
Você pode ver quais perfis estão disponíveis rodando o comando `ufw app list`. No exemplo acima, usar `Apache Full` significa que as regras para HTTP (porta 80) e HTTPS (porta 443) são criadas.
:::

Você deve ver as regras `Apache` e `Apache (v6)` com ações `ALLOW` configuradas, o que confirma que o firewall está pronto. Também deve ver outras regras que você tenha configurado anteriormente, incluindo a regra SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Com o firewall liberado para o Apache, agora você deve garantir que o Apache está funcional. Você pode fazer isso tentando acessar seu endereço IP no navegador, assim: `http://[seu_endereço_ip]`

Se estiver funcionando, você verá uma página de boas-vindas padrão. Se não conseguir, verifique o status do serviço com o comando: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Configuração do MySQL

A próxima etapa é realizar a configuração inicial do MySQL. É recomendado rodar um script de instalação segura, que garante que sua instância do MySQL permaneça protegida. Isso é opcional, mas altamente recomendado. Você pode rodar com o comando `sudo mysql_secure_installation`.

Isso vai te guiar por uma configuração interativa. Primeiro, será perguntado sobre validação de senha. Recomendamos selecionar `Y` para garantir que apenas senhas seguras sejam permitidas no futuro e depois escolher `MEDIUM` com `1` ou `STRONG` com `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Depois, será perguntado sobre remover o usuário `anonymous` e desabilitar login remoto do root. Para ambos, recomendamos aceitar com `Y` por questões de segurança. Isso garante que o usuário de teste seja removido e que o usuário master `root` só possa ser usado localmente via SSH, reduzindo riscos.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Por fim, será perguntado sobre remover o banco de dados `test` e recarregar as tabelas de privilégios. Novamente, recomendamos aceitar com `Y` já que a tabela de teste não é necessária e você precisa recarregar as tabelas para que as mudanças tenham efeito.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Agora verifique se o banco MySQL está rodando tentando logar com o comando: `sudo mysql -u root`. Se funcionar, você verá uma mensagem de boas-vindas. Pode sair usando o comando `quit` quando quiser.

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### Testando o PHP

Por último, você deve garantir que o PHP está funcionando como esperado. Para isso, crie um arquivo `info.php` no diretório Apache `/var/www/html/` com um conteúdo PHP que rode o comando `phpinfo()`.
```
# Abra o editor nano no novo arquivo
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

Para começar a instalação, você precisará criar um novo banco de dados MySQL. Isso é importante pois você usará esses dados no assistente de instalação do WordPress depois, então recomendamos usar nossos exemplos.

Copie os comandos abaixo para criar o banco de dados, tabelas e usuários necessários.
```
# Login no MySQL
sudo mysql -u root

# Crie o banco de dados
CREATE DATABASE wordpress;

# Crie um usuário dedicado para o wordpress
# Substitua [your_password] pela sua senha
CREATE USER wordpress@localhost IDENTIFIED BY '[your_password]';

# Defina privilégios para o usuário (copie tudo junto)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# Recarregue as tabelas
FLUSH PRIVILEGES;
```

Depois de criar o banco e o usuário, saia com o comando `quit`. Agora você está pronto para instalar o WordPress.

### Instalando o WordPress

Para a instalação principal do WordPress, recomendamos usar a versão oficial do **wordpress.org** diretamente, em vez do pacote APT, pois isso é recomendado pelo WordPress para evitar possíveis problemas.

Para baixar o arquivo mais recente, use o comando abaixo que baixa a última versão para o diretório temporário.
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

Agora extraia o arquivo, que vai criar uma pasta `wordpress` com todos os arquivos necessários.
```
tar -xvf latest.tar.gz
```

Com os arquivos extraídos, você precisa copiar a pasta para o diretório Apache `/var/www/html/` para que tudo fique acessível via web. Rode os comandos abaixo para copiar a pasta, criar o diretório `uploads` e ajustar permissões para garantir que o grupo `www-data` do servidor web tenha acesso.
```
# Copie a pasta wordpress e atualize a propriedade
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# Crie o diretório uploads
mkdir /var/www/html/wordpress/wp-content/uploads

# Ajuste as permissões dos arquivos
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

Com isso feito, o WordPress deve estar instalado. Acesse o assistente de instalação do WordPress via: `http://[seu_endereço_ip]/wordpress`

### Assistente de Configuração

No assistente, você poderá configurar o WordPress, que é a última etapa da instalação. Primeiro, será solicitado que escolha o idioma.

Depois, você precisará configurar as opções do banco de dados. Você já preparou isso no MySQL na primeira parte da instalação, então use as mesmas credenciais e valores aqui. Se seguiu nossos exemplos, preencha assim, substituindo `[your_password]` pela senha que você definiu.

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

Com essa etapa concluída, será solicitado que você execute a instalação. Essa é a última parte do processo.

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

Na página seguinte, você deverá informar várias informações, incluindo o título do site, um e-mail, nome de usuário e senha para a conta root do WordPress para acessar o painel. Também pode decidir sobre a visibilidade para motores de busca, se quer que seu site seja indexado ou desencorajado.

:::tip
Escolha uma senha forte e salve as credenciais para não perder o acesso ao painel do WordPress!
:::

Quando estiver pronto, clique no botão **Instalar WordPress** para finalizar o processo.

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

Você será levado para uma página de sucesso que redireciona para a página de **Login**. Clique nela e use as credenciais para acessar seu painel WordPress pela primeira vez!

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

E assim, após o login bem-sucedido, você estará no painel do WordPress, com a instalação completa.

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## Conclusão

Parabéns, você instalou e configurou o WordPress com sucesso! Como próximo passo, **recomendamos muito** configurar um domínio e um **certificado SSL** para garantir que os dados sejam transmitidos com segurança e facilitar o acesso ao painel do WordPress. Confira nosso [guia Certbot](dedicated-linux-certbot.md) focado no **Plugin Apache** e siga a configuração interativa para configurar rapidamente um certificado para seu domínio escolhido.

Para continuar aprendendo e configurando, recomendamos dar uma olhada nos nossos guias de [Plugins WordPress](webspace-wordpress-plugins.md) e [WordPress Elementor](webspace-wordpress-elementor.md), que exploram o processo de instalar plugins e usar o popular construtor de páginas Elementor, super amigável para usuários.

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂