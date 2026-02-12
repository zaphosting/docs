---
id: vserver-linux-lemp-stack
title: "VPS: Configurar stack LEMP - Linux, Nginx, MySQL, PHP"
description: "Descubra como configurar um stack LEMP para hospedar sites PHP dinâmicos em servidores VPS Linux → Saiba mais agora"
sidebar_label: Web LEMP stack
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O **LEMP** stack é uma seleção popular de softwares open-source configurados juntos para permitir uma hospedagem simples de sites dinâmicos, com foco especial em sites e apps PHP. A sigla significa: **L**inux como sistema operacional, "**E**ngine x" (nginx) como servidor web, **M**ySQL como banco de dados e por fim **P**HP para processamento. Neste guia, vamos cobrir o processo de configurar um stack LEMP em um VPS Linux, com uma explicação detalhada e exemplo de criação de um site de lista de tarefas.

<InlineVoucher />

## Preparação

Comece conectando ao seu servidor via SSH. Se você não sabe como fazer isso, dê uma olhada no nosso [Acesso inicial (SSH)](vserver-linux-ssh.md) guia.

Neste guia, usaremos o Ubuntu como distribuição Linux. As instruções são as mesmas para Debian e devem ser similares para outras distribuições, mas a sintaxe dos comandos pode variar um pouco. Certifique-se de que você tem um sistema operacional instalado e está conectado ao servidor via SSH.

Como sempre, antes de prosseguir com a instalação, garanta que todos os pacotes estejam atualizados com o seguinte comando:
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

A instalação pode ser dividida facilmente em cada dependência principal do LEMP, começando pelo servidor web Nginx, seguido pelo banco de dados MySQL e por fim o PHP. Durante a instalação, configuraremos um site de teste escrito em PHP que acessará o banco MySQL. Cada requisição web será processada e servida pelo servidor Nginx.

### Configurando o Nginx

Nginx é o servidor web que será usado para processar requisições web e servir respostas. Instale-o com o comando:
```
sudo apt install nginx
```

Após a instalação, você deve garantir que as regras apropriadas do firewall estejam criadas para que o servidor web seja acessível pela internet. Neste exemplo, usaremos o **Firewall UFW** já que o Nginx tem uma aplicação registrada para ele.

Se você usa outro firewall, certifique-se de liberar a porta 80 (HTTP) no firewall. Você pode aprender mais sobre firewalls em Linux no nosso guia [Gerenciar Firewall](vserver-linux-firewall.md).

Garanta que o firewall UFW esteja ativado e que uma regra para SSH esteja criada.
```
# Criar regra para permitir SSH
sudo ufw allow OpenSSH

# Ativar firewall UFW
sudo ufw enable
```

:::caution
Certifique-se de ter uma regra configurada para SSH se estiver usando o firewall UFW! Caso contrário, você **não** conseguirá acessar o servidor via SSH novamente se perder a conexão atual!
:::

Agora crie a regra para liberar o Nginx e depois verifique se as regras estão presentes.
```
# Criar regra para liberar Nginx
sudo ufw allow in "Nginx Full"

# Verificar regras do firewall UFW
sudo ufw status
```

:::tip
Você pode ver quais perfis estão disponíveis rodando o comando `ufw app list`. No exemplo acima, usar `Nginx Full` significa que as regras para HTTP (porta 80) e HTTPS (porta 443) são criadas.
:::

Você deve ver as regras `Nginx` e `Nginx (v6)` com ações `ALLOW`, confirmando que o firewall está pronto. Também verá outras regras que tenha configurado antes, incluindo a regra SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/A36rfRzL3gFGq9x/preview)

Com o firewall liberado para o Nginx, agora verifique se o Nginx está funcionando. Faça isso tentando acessar seu endereço IP no navegador, assim: `http://[seu_endereço_ip]`

Se estiver funcionando, você verá uma página de boas-vindas padrão. Se não, verifique o status do serviço com o comando: `systemctl status nginx`

![](https://screensaver01.zap-hosting.com/index.php/s/EqFoyXMJMaHc3dc/preview)

### Configurando o MySQL

Agora você vai instalar e configurar um servidor MySQL que atuará como banco de dados para armazenar dados de forma persistente e relacional. Instale com o comando:
```
sudo apt install mysql-server
```

Após a instalação, é recomendado rodar um script de instalação segura para garantir que sua instância MySQL fique protegida. Isso é opcional, mas altamente recomendado. Execute com o comando `sudo mysql_secure_installation`.

Você passará por uma configuração interativa. Primeiro, será perguntado sobre validação de senha. Recomendamos escolher `Y` para garantir que apenas senhas seguras sejam aceitas no futuro, e depois escolher `MEDIUM` com `1` ou `STRONG` com `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Depois, será perguntado sobre remover o usuário `anonymous` e desabilitar login remoto do root. Recomendamos aceitar ambos com `Y` por questões de segurança. Isso garante que o usuário de teste seja removido e que o usuário master `root` só possa ser usado localmente via SSH, reduzindo riscos.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Por fim, será perguntado sobre remover o banco `test` e recarregar as tabelas de privilégios. Novamente, recomendamos aceitar com `Y` já que a tabela de teste não é necessária e é preciso recarregar as tabelas para aplicar as mudanças.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Agora verifique se o banco MySQL está rodando tentando logar com: `sudo mysql -u root`. Se funcionar, verá uma mensagem de boas-vindas. Saia com o comando `quit` quando quiser.

### Configurando o PHP

A última dependência do LEMP é o PHP e para o Nginx, isso requer usar um programa externo chamado `php-fpm` (PHP fastCGI process manager). O Nginx será configurado para passar requisições para o `php-fpm` antes de responder, usando blocos de servidor.

O comando abaixo instala a versão mais recente do php-fpm junto com o plugin PHP para MySQL, permitindo que o Nginx trabalhe com PHP e que o PHP use MySQL.
```
sudo apt install php-fpm php-mysql
```

Confirme que a instalação foi bem-sucedida checando a versão. Se aparecer uma versão, o PHP está funcionando corretamente.
```
php -v
```

:::tip Extensões PHP
Para casos avançados, você pode precisar de extensões PHP adicionais para funcionalidades extras. Veja a lista rodando `apt search php- | less`.

Use as setas para navegar e pressione `Q` para sair. Para instalar uma extensão, use o comando apt install assim. Pode instalar várias extensões de uma vez, separadas por espaço, para agilizar.

```
sudo apt install [php_extensão] [...]
```
:::

### Criando o Site de Teste

Com a instalação das dependências LEMP concluída, vamos criar um site de teste para mostrar como o stack funciona junto para formar uma ótima solução de site dinâmico. Isso é totalmente opcional, mas útil para entender como usar essas ferramentas para montar seus próprios sites.

Neste exemplo, criaremos um site simples de lista de tarefas em PHP que busca e retorna as tarefas. Os dados ficarão em uma tabela MySQL e o site será servido pelo Nginx.

Usaremos o domínio de teste `zapdocs.example.com` durante o guia, pois no mundo real você provavelmente usaria um domínio. Você **deve** configurar um registro DNS do tipo `A` para o domínio apontando para o endereço IP do seu servidor. Se precisar de ajuda, veja nosso guia [Registros de Domínio](domain-records.md).

:::note
Você pode optar por não usar domínio e substituir as menções de `[your_domain]` por um nome comum. Acessaria o site pelo IP. Mas note que ao criar o arquivo do bloco de servidor depois, deve remover o parâmetro `server_name`.
:::

#### Configurando o Nginx

Normalmente, em servidores web, todos os arquivos e dados do site ficam na pasta `/var/www`. Por padrão, o Nginx vem com uma pasta `html` que contém uma página padrão. Para manter tudo organizado, especialmente se hospedar vários sites no mesmo Nginx, recomendamos criar uma pasta individual para cada site.

Para isso, crie uma nova pasta em `/var/www/[your_domain]` para cada domínio. No exemplo, será `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Agora crie um novo arquivo de configuração de bloco de servidor Nginx na pasta `sites-available` para esse domínio e pasta.
```
sudo nano /etc/nginx/sites-available/[your_domain].conf
```

Use o template abaixo e cole no editor nano, substituindo `[your_domain]` pelo domínio que está usando.
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
É importante trocar `[your_phpversion]` pela versão atual do PHP instalada. Para checar, rode `php -v` que deve retornar algo como: `PHP 8.3.6 (cli) (built: Mar 19 2025 10:08:38) (NTS)`.

No exemplo, coloque `8.3` como subversão principal, ficando: `fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;`
:::

Esse arquivo de bloco de servidor trata requisições na porta 80 (HTTP) e verifica se a requisição bate com o `server_name` especificado, ou seja, seu domínio. Também aponta que a pasta `/var/www/[your_domain]` criada antes será usada para servir os arquivos.

Salve o arquivo e saia do nano com `CTRL + X`, depois `Y` para confirmar e por fim `ENTER`.

O passo final para configurar o Nginx é ativar essa configuração criando um link simbólico na pasta `sites-enabled`.
```
sudo ln -s /etc/nginx/sites-available/[your_domain].conf /etc/nginx/sites-enabled/
```

:::note Sem domínio usado
Se você **não** estiver usando domínio, remova a linha `server_name` ou comente colocando `#` no início. Também desative o bloco padrão com o comando `sudo unlink /etc/nginx/sites-enabled/default`.
:::

Recomendamos usar o comando `sudo nginx -t` para garantir que não há erros de sintaxe no arquivo.

Por fim, reinicie o Nginx para aplicar o novo host virtual com: `sudo systemctl reload nginx`.

#### Criando o Site

Agora que configurou o Nginx com o novo bloco de servidor e pasta de documentos, é hora de criar o site que será servido. No momento, a pasta está vazia, então nada será exibido. Vamos criar o site simples de lista de tarefas mencionado para esse domínio.

##### Preparando o Banco de Dados

Para começar, vamos criar um banco de dados e uma tabela para armazenar cada item da lista. Faça login no MySQL:
```
sudo mysql -u root
```

Agora crie o banco `todowebsite` e a tabela `todoitems` dentro dele.
```
# Criar banco de dados
CREATE DATABASE todowebsite;

# Usar o banco criado
USE todowebsite;

# Criar tabela de itens no banco
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Com a tabela pronta, vamos criar algumas entradas de exemplo.
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

Por fim, crie um usuário dedicado `todo` que será usado só para esse site.
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

Com o banco preparado e usuário criado, saia do terminal MySQL com o comando `quit`.

##### Arquivos PHP do Site

A última parte é criar o arquivo PHP do site da lista de tarefas. Será um arquivo `index.php` na pasta `/var/www/[your_domain]` criada antes. Abra o nano para criar o arquivo:
```
sudo nano /var/www/[your_domain]/index.php
```

Abaixo temos um código simples para colocar no nano, que cria uma página básica de lista de tarefas retornando os itens do banco. A primeira parte PHP estabelece a conexão MySQL.

:::important
Você deve trocar `[your_password]` pela senha que definiu para o usuário `todo` anteriormente.
:::

A parte HTML contém a página principal que cria uma lista não ordenada, percorrendo os resultados.

```
<?php
// Preparar conexão MySQL
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar se a conexão foi bem-sucedida, se não retornar erro
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Rodar consulta SQL para retornar entradas da tabela e salvar no resultado
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
          // Verificar se há resultados
          if ($result->num_rows > 0) {
              // Loop por cada item do array retornado pela consulta
              foreach ($result as $entry) {
                  echo "<li>";
                  // Mostrar o nome e usar htmlspecialchars para evitar XSS (cross-site scripting)
                  echo htmlspecialchars($entry["name"]);

                  // Mostrar status de conclusão
                  if ($entry["is_completed"]) {
                      echo " <strong>(Completed)</strong>";
                  } else {
                      echo " <strong>(Incomplete)</strong>";
                  }

                  // Mostrar data de criação
                  echo " - Creation Date: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // Se não encontrar nada, mostrar mensagem padrão
              echo "<li>No to-do items found.</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
// Fechar conexão com banco
$conn->close();
?>
```

Depois de colar no nano, salve e saia com `CTRL + X`, depois `Y` para confirmar e `ENTER`.

#### Testando o Site

Você seguiu o passo a passo e configurou um site de teste de lista de tarefas que usa todos os componentes do stack LEMP!

Agora deve conseguir acessar o site pelo domínio (usando `http`/porta 80) que definiu no arquivo do bloco de servidor, que no exemplo é `zapdocs.example.com`. O resultado final deve ser parecido com isso:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusão

Parabéns, você instalou e configurou o stack LEMP com sucesso! Como próximo passo, **recomendamos muito** configurar um domínio e um **certificado SSL** para garantir que os dados sejam transmitidos com segurança para seus sites. Veja nosso [guia Certbot](dedicated-linux-certbot.md) focado no **Plugin Nginx** e siga a configuração interativa para configurar um certificado rápido e fácil para seu domínio.

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />