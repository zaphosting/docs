---
id: vserver-linux-lemp-stack
title: "Configure uma Stack LEMP em um Servidor Linux - Implante Aplicações Web de Alta Performance"
description: "Descubra como configurar uma stack LEMP para hospedar sites PHP dinâmicos em servidores VPS Linux → Saiba mais agora"
sidebar_label: Stack Web LEMP
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

A **LEMP** stack é uma seleção popular de softwares open-source configurados juntos para permitir uma hospedagem simples de sites dinâmicos, com foco especial em sites e apps PHP. A sigla significa: **L**inux como sistema operacional, "**E**ngine x" (nginx) como servidor web, **M**ySQL como banco de dados e por fim **P**HP para processamento. Neste guia, vamos cobrir o processo de configurar uma stack LEMP em um VPS Linux, com uma explicação detalhada e exemplo de criação de um site de lista de tarefas.

<InlineVoucher />

## Preparação

Comece conectando ao seu servidor via SSH. Se não souber como fazer isso, dê uma olhada no nosso [guia de Acesso Inicial (SSH)](vserver-linux-ssh.md).

Neste guia, usaremos o Ubuntu como distribuição Linux. As instruções são as mesmas para Debian e devem ser similares para outras distribuições, mas a sintaxe dos comandos pode variar um pouco. Certifique-se de que você tem um sistema operacional instalado e está conectado ao servidor via SSH.

Como sempre, antes de prosseguir com a instalação, garanta que todos os pacotes estejam atualizados com o comando:
```
// Ubuntu & Debian
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

## Instalação

A instalação pode ser dividida facilmente em cada dependência principal da LEMP, começando pelo servidor web Nginx, seguido pelo banco de dados MySQL e por fim o PHP. Durante a instalação, configuraremos um site de teste escrito em PHP que acessará o banco MySQL. Cada requisição web será processada e servida pelo servidor Nginx.

### Configurando o Nginx

O Nginx é o servidor web que processará as requisições e enviará as respostas. Instale-o com o comando:
```
sudo apt install nginx
```

Após a instalação, certifique-se de que as regras apropriadas do firewall estejam criadas para garantir que o servidor web seja acessível pela internet. Neste exemplo, usaremos o **Firewall UFW**, pois o Nginx tem um perfil registrado para ele.

Se estiver usando outro firewall, garanta que a porta 80 (HTTP) esteja liberada. Você pode aprender mais sobre firewalls em Linux no nosso guia [Gerenciando Firewall](vserver-linux-firewall.md).

Ative o firewall UFW e crie uma regra para SSH:
```
# Crie uma regra para permitir SSH
sudo ufw allow OpenSSH

# Ative o Firewall UFW
sudo ufw enable
```

:::caution
Garanta que você tenha uma regra para SSH configurada se estiver usando o firewall UFW! Caso contrário, você **não** conseguirá se conectar via SSH novamente se perder a conexão atual!
:::

Agora crie a regra para liberar o Nginx e depois verifique se as regras estão ativas:
```
# Crie uma regra para liberar o Nginx
sudo ufw allow in "Nginx Full"

# Verifique as regras do firewall UFW
sudo ufw status
```

:::tip
Você pode ver quais perfis estão disponíveis rodando o comando `ufw app list`. No exemplo acima, usar `Nginx Full` significa que as regras para HTTP (porta 80) e HTTPS (porta 443) serão criadas.
:::

Você deve ver as regras `Nginx` e `Nginx (v6)` com a ação `ALLOW`, confirmando que o firewall está pronto. Também verá outras regras que tenha configurado, incluindo a do SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/A36rfRzL3gFGq9x/preview)

Com o firewall liberado para o Nginx, agora verifique se o Nginx está funcionando. Faça isso acessando seu endereço IP no navegador: `http://[seu_endereço_ip]`

Se estiver funcionando, verá uma página de boas-vindas padrão. Se não, verifique o status do serviço com: `systemctl status nginx`

![](https://screensaver01.zap-hosting.com/index.php/s/EqFoyXMJMaHc3dc/preview)

### Configurando o MySQL

Agora instale e configure o servidor MySQL, que atuará como banco de dados para armazenar dados de forma relacional. Instale com:
```
sudo apt install mysql-server
```

Após a instalação, é recomendado rodar um script de instalação segura para garantir que seu MySQL fique protegido. É opcional, mas altamente recomendado. Execute com: `sudo mysql_secure_installation`.

Você passará por uma configuração interativa. Primeiro, será perguntado sobre validação de senha. Recomendamos escolher `Y` para garantir senhas seguras e depois selecionar `MEDIUM` com `1` ou `STRONG` com `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Depois, será perguntado sobre remover o usuário `anonymous` e desabilitar login remoto do root. Recomendamos aceitar ambos com `Y` por questões de segurança. Isso remove o usuário de teste e garante que o root só possa ser usado localmente via SSH, reduzindo riscos.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Por fim, será perguntado sobre remover o banco `test` e recarregar as tabelas de privilégios. Novamente, recomendamos aceitar com `Y` para limpar o banco de testes e aplicar as mudanças.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Agora verifique se o MySQL está rodando tentando logar: `sudo mysql -u root`. Se conseguir, verá uma mensagem de boas-vindas. Saia com o comando `quit` quando quiser.

### Configurando o PHP

A última dependência da LEMP é o PHP. Para o Nginx, é necessário usar um programa externo chamado `php-fpm` (PHP fastCGI process manager). O Nginx será configurado para passar as requisições para o `php-fpm` antes de responder.

Instale a versão mais recente do php-fpm junto com o plugin PHP para MySQL, para que o Nginx funcione com PHP e o PHP possa usar MySQL:
```
sudo apt install php-fpm php-mysql
```

Confirme que a instalação foi bem-sucedida checando a versão. Se aparecer a versão, o PHP está funcionando:
```
php -v
```

:::tip Extensões PHP
Para casos avançados, você pode precisar de extensões PHP extras para funcionalidades adicionais. Veja a lista rodando `apt search php- | less`.

Use as setas para navegar e `Q` para sair. Para instalar uma extensão, use:
```
sudo apt install [php_extensão] [...]
```
Você pode instalar várias extensões de uma vez, separadas por espaço.
:::

### Criando o Site de Teste

Com todas as dependências da LEMP instaladas, vamos criar um site de teste para mostrar como a stack funciona para formar uma solução dinâmica. Isso é opcional, mas ajuda a entender como usar essas ferramentas para seus próprios sites.

Neste exemplo, criaremos um site simples de lista de tarefas em PHP que busca e retorna as tarefas armazenadas em uma tabela MySQL. O site será servido pelo Nginx.

Usaremos o domínio de teste `zapdocs.example.com`, pois no mundo real você provavelmente usaria um domínio. Você **deve** configurar um registro DNS do tipo `A` para o domínio apontando para o endereço IP do seu servidor. Se precisar de ajuda, veja nosso guia [Registros de Domínio](domain-records.md).

:::note
Você pode optar por não usar domínio e substituir `[your_domain]` por um nome comum. Acessaria o site pelo IP. Mas ao criar o arquivo do server block, remova o parâmetro `server_name`.
:::

#### Configurando o Nginx

Normalmente, todos os arquivos e dados dos sites ficam em `/var/www`. Por padrão, o Nginx vem com uma pasta `html` com uma página padrão. Para organizar melhor, especialmente se hospedar vários sites, recomendamos criar uma pasta individual para cada domínio.

Crie uma nova pasta em `/var/www/[your_domain]`. No exemplo, será `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Agora crie um arquivo de configuração de server block no diretório `sites-available` para esse domínio:
```
sudo nano /etc/nginx/sites-available/[your_domain].conf
```

Copie o template abaixo no editor nano, substituindo `[your_domain]` pelo seu domínio:
```
server {
    listen 80;
    server_name [your_domain] www.[your_domain];
    root /var/www/[your_domain];

    index index.php index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php[your_phpversion]-fpm.sock;
     }

    location ~ /\.ht {
        deny all;
    }
}
```

:::important Versão do PHP
É importante trocar `[your_phpversion]` pela versão atual do PHP instalada. Verifique com `php -v`, que retorna algo como: `PHP 8.3.6 (cli) (built: Mar 19 2025 10:08:38) (NTS)`.

No exemplo, use `8.3` como subversão, ficando: `fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;`
:::

Esse arquivo de server block trata requisições na porta 80 (HTTP) e verifica se o pedido bate com o `server_name` (seu domínio). Também aponta para a pasta `/var/www/[your_domain]` para servir os arquivos.

Salve e saia do nano com `CTRL + X`, depois `Y` para confirmar e `ENTER`.

Ative a configuração criando um link simbólico para `sites-enabled`:
```
sudo ln -s /etc/nginx/sites-available/[your_domain].conf /etc/nginx/sites-enabled/
```

:::note Sem Domínio
Se não usar domínio, remova ou comente a linha `server_name` com `#`. Também desative o server block padrão com: `sudo unlink /etc/nginx/sites-enabled/default`.
:::

Recomendamos rodar `sudo nginx -t` para checar erros de sintaxe.

Por fim, reinicie o Nginx para aplicar as mudanças:
```
sudo systemctl reload nginx
```

#### Criando o Site

Com o Nginx configurado, vamos criar o site real que será servido. A pasta está vazia, então nada será exibido ainda. Faremos o site de lista de tarefas mencionado.

##### Preparando o Banco de Dados

Primeiro, crie um banco e uma tabela para armazenar as tarefas. Logue no MySQL:
```
sudo mysql -u root
```

Crie o banco `todowebsite` e a tabela `todoitems`:
```
# Criar banco
CREATE DATABASE todowebsite;

# Usar o banco criado
USE todowebsite;

# Criar tabela de itens
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Agora insira algumas tarefas de exemplo:
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

Por fim, crie um usuário dedicado `todo` para o site:
```
# Criar usuário dedicado
# Substitua [your_password] pela sua senha
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# Definir privilégios para o usuário (copie tudo junto)
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# Recarregar privilégios
FLUSH PRIVILEGES;
```

Saia do terminal MySQL com `quit`.

##### Arquivos PHP do Site

Agora vamos criar o arquivo PHP para a página da lista de tarefas. Crie o arquivo `index.php` em `/var/www/[your_domain]`:
```
sudo nano /var/www/[your_domain]/index.php
```

Copie o código abaixo para o editor nano. A primeira parte PHP conecta ao banco MySQL.

:::important
Você deve trocar `[your_password]` pela senha que definiu para o usuário `todo`.
:::

A parte HTML cria a página principal com uma lista não ordenada, mostrando os itens do banco.

```
<?php
// Preparar conexão MySQL
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão, se falhar retorna erro
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Rodar query para pegar os itens e salvar em $result
$sql = "SELECT id, name, is_completed, creation_date FROM todoitems ORDER BY creation_date DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF--8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>To-Do List</title>
  </head>
  <body>
      <h1>Awesome To-Do List :D</h1>
      <p>For our awesome ZAP-Hosting guide: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack</a></p>
      <ul>
          <?php
          // Verifica se há resultados
          if ($result->num_rows > 0) {
              // Loop pelos itens retornados
              foreach ($result as $entry) {
                  echo "<li>";
                  // Exibe o nome com htmlspecialchars para evitar XSS
                  echo htmlspecialchars($entry["name"]);

                  // Exibe status de conclusão
                  if ($entry["is_completed"]) {
                      echo " <strong>(Completed)</strong>";
                  } else {
                      echo " <strong>(Incomplete)</strong>";
                  }

                  // Exibe data de criação
                  echo " - Creation Date: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // Se não houver itens, mostra mensagem padrão
              echo "<li>No to-do items found.</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
// Fecha conexão com banco
$conn->close();
?>
```

Salve e saia do nano com `CTRL + X`, depois `Y` e `ENTER`.

#### Testando o Site

Você seguiu o passo a passo e configurou um site de lista de tarefas que usa todos os componentes da stack LEMP!

Agora deve conseguir acessar o site pelo domínio (usando `http`/porta 80) que configurou no server block, no exemplo `zapdocs.example.com`. O resultado final deve ser parecido com isso:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusão

Parabéns, você instalou e configurou a stack LEMP com sucesso! Como próximo passo, **recomendamos muito** configurar um domínio e um **certificado SSL** para garantir que os dados sejam transmitidos com segurança para seus sites. Veja nosso [guia Certbot](dedicated-linux-certbot.md) focado no **Plugin Nginx** e siga a configuração interativa para criar um certificado para seu domínio.

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />