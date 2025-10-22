---
id: dedicated-linux-lamp-stack
title: "Servidor Dedicado: Configurar stack LAMP - Linux, Apache, MySQL, PHP"
description: "Descubra como configurar um stack LAMP para hospedar sites PHP dinâmicos em servidores Linux de forma eficiente → Saiba mais agora"
sidebar_label: Stack Web LAMP
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O **LAMP** é uma seleção popular de softwares open-source configurados juntos para permitir uma hospedagem simples de sites dinâmicos, com foco especial em sites e apps PHP. A sigla significa: **L**inux como sistema operacional, **A**pache como servidor web, **M**ySQL como banco de dados e por fim **P**HP para processamento. Neste guia, vamos cobrir o processo de configurar um stack LAMP em um Servidor Dedicado Linux, com uma explicação detalhada e um exemplo de criação de um site de lista de tarefas.

<InlineVoucher />

## Preparação

Comece conectando ao seu servidor via SSH. Se você não sabe como fazer isso, dê uma olhada no nosso guia [Acesso inicial (SSH)](vserver-linux-ssh.md).

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

A instalação pode ser dividida facilmente em cada dependência principal do LAMP, começando pelo servidor web Apache, seguido pelo banco de dados MySQL e por fim o PHP. Durante a instalação, vamos configurar um site de teste escrito em PHP que acessará o banco de dados MySQL. Cada requisição web será processada e servida pelo servidor Apache.

### Configurando o Apache

O Apache é o servidor web que processará as requisições e enviará as respostas. Instale-o com o comando:
```
sudo apt install apache2
```

Após a instalação, certifique-se de que as regras apropriadas do firewall estejam criadas para garantir que o servidor web seja acessível pela internet. Neste exemplo, usaremos o **Firewall UFW**, pois o Apache tem uma aplicação registrada para ele.

Se você usa outro firewall, certifique-se de liberar a porta 80 (HTTP). Saiba mais sobre firewalls no Linux no nosso guia [Gerenciar Firewall](vserver-linux-firewall.md).

Garanta que o firewall UFW esteja ativado e que uma regra para SSH esteja criada.
```
# Criar regra para permitir SSH
sudo ufw allow OpenSSH

# Ativar firewall UFW
sudo ufw enable
```

:::caution
Garanta que você tenha uma regra para SSH configurada se estiver usando o firewall UFW! Caso contrário, você **não** conseguirá se conectar via SSH novamente se perder a conexão atual!
:::

Agora crie a regra para liberar o Apache e depois verifique se as regras estão ativas.
```
# Criar regra para liberar Apache
sudo ufw allow in "Apache Full"

# Verificar regras do firewall UFW
sudo ufw status
```

:::tip
Você pode ver quais perfis estão disponíveis rodando o comando `ufw app list`. No exemplo acima, usar `Apache Full` significa que as regras para HTTP (porta 80) e HTTPS (porta 443) são criadas.
:::

Você deve ver as regras `Apache` e `Apache (v6)` com ação `ALLOW`, confirmando que o firewall está pronto. Também verá outras regras que você tenha configurado, incluindo a do SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Com o firewall liberado para o Apache, agora verifique se o Apache está funcionando. Faça isso acessando seu endereço IP no navegador: `http://[seu_endereço_ip]`

Se estiver funcionando, verá uma página de boas-vindas padrão. Se não, verifique o status do serviço com: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Configurando o MySQL

Agora instale e configure o servidor MySQL, que será seu banco de dados para armazenar dados de forma relacional. Instale com:
```
sudo apt install mysql-server
```

Após a instalação, é recomendado rodar um script de instalação segura para garantir que sua instância MySQL fique protegida. É opcional, mas altamente recomendado. Execute com `sudo mysql_secure_installation`.

Você passará por uma configuração interativa. Primeiro, será perguntado sobre validação de senha. Recomendamos escolher `Y` para permitir apenas senhas seguras e depois selecionar `MEDIUM` com `1` ou `STRONG` com `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Depois, será perguntado sobre remover o usuário `anonymous` e desabilitar login remoto do root. Recomendamos aceitar ambos com `Y` por questões de segurança. Isso remove o usuário de teste e garante que o root só possa ser usado localmente via SSH, reduzindo riscos.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Por fim, será perguntado sobre remover o banco de dados `test` e recarregar as tabelas de privilégios. Novamente, recomendamos aceitar com `Y` já que o banco de teste não é necessário e é preciso recarregar as permissões.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Agora verifique se o MySQL está rodando tentando logar: `sudo mysql -u root`. Se funcionar, verá uma mensagem de boas-vindas. Saia com o comando `quit` quando quiser.

### Configurando o PHP

A última dependência do LAMP é o PHP, que é simples de instalar. O comando abaixo instala o PHP junto com um plugin para Apache e MySQL, permitindo que o Apache trabalhe com PHP e que o PHP use o MySQL.
```
sudo apt install php libapache2-mod-php php-mysql
```

Confirme que a instalação foi bem-sucedida checando a versão. Se aparecer a versão, o PHP está funcionando.
```
php -v
```

:::tip Extensões PHP
Para casos avançados, você pode precisar de extensões PHP extras para funcionalidades adicionais. Veja a lista rodando `apt search php- | less`.

Use as setas para navegar e `Q` para sair. Para instalar uma extensão, use:
```
sudo apt install [php_extension] [...]
```
Você pode instalar várias extensões ao mesmo tempo separando por espaço.
:::

Recomendamos ajustar o índice de diretório para garantir que arquivos `index.php` tenham prioridade sobre `.html`. Abra o arquivo:
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

No editor nano, remova `index.php` e coloque ele no início da lista, assim:
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

Salve e saia do nano com `CTRL + X`, depois `Y` para confirmar e `ENTER`. Reinicie o Apache para aplicar: `sudo systemctl restart apache2`.

### Criando o Site de Teste

Com as dependências LAMP instaladas, vamos criar um site de teste para mostrar como o stack funciona junto para formar uma solução dinâmica. Isso é opcional, mas ajuda a entender como usar essas ferramentas para seus próprios sites.

Neste exemplo, criaremos um site simples de lista de tarefas em PHP que busca e retorna as tarefas armazenadas em uma tabela MySQL. O site será servido pelo Apache.

Usaremos o domínio de teste `zapdocs.example.com`. No mundo real, você provavelmente usaria um domínio. Você **deve** configurar um registro DNS do tipo `A` para o domínio apontando para o endereço IP do seu servidor. Se precisar de ajuda, veja nosso guia [Registros de Domínio](domain-records.md).

:::note
Você pode optar por não usar domínio e substituir `[your_domain]` por um nome qualquer. Acessaria o site pelo IP. Mas ao criar o arquivo de host virtual, remova o parâmetro `ServerName`.
:::

#### Configurando o Apache

Normalmente, todos os arquivos e dados dos sites ficam no diretório `/var/www`. Por padrão, o Apache vem com uma pasta `html` com uma página padrão. Para organizar melhor, especialmente se hospedar vários sites, recomendamos criar uma pasta individual para cada domínio.

Crie uma nova pasta em `/var/www/[your_domain]` para cada domínio. No exemplo, será `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Agora crie um arquivo de configuração de host virtual Apache em `sites-available` para esse domínio e pasta.
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

Use o template abaixo, substituindo `[your_domain]` pelo domínio que você usa.
```
<VirtualHost *:80>
    ServerName [your_domain]
    ServerAlias www.[your_domain]
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/[your_domain]
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

Esse arquivo de host virtual trata requisições na porta 80 (HTTP) e verifica se o pedido bate com o `ServerName` (seu domínio). Também aponta que a pasta `/var/www/[your_domain]` será usada para servir os arquivos.

Salve e saia do nano com `CTRL + X`, `Y` e `ENTER`. Recomendamos rodar `sudo apache2ctl configtest` para garantir que não há erros de sintaxe.

O último passo é ativar o novo host virtual com `a2ensite`.
```
sudo a2ensite [your_domain]
```

:::note Sem Domínio
Se você **não** usar domínio, remova ou comente a linha `ServerName` com `#`. Também desative o host virtual padrão com `sudo a2dissite 000-default`.
:::

Reinicie o Apache para aplicar o novo host virtual: `sudo systemctl restart apache2`.

#### Criando o Site

Com o Apache configurado, vamos criar o site que será servido. A pasta está vazia, então nada será exibido ainda. Faremos um site simples de lista de tarefas para esse domínio.

##### Preparando o Banco de Dados

Primeiro, crie um banco de dados e uma tabela para armazenar as tarefas. Logue no MySQL:
```
sudo mysql -u root
```

Crie o banco `todowebsite` e a tabela `todoitems`:
```
# Criar banco de dados
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

Agora vamos criar o arquivo PHP principal para a página de tarefas. Crie o arquivo `index.php` em `/var/www/[your_domain]`:
```
sudo nano /var/www/[your_domain]/index.php
```

Copie o código abaixo para o editor nano. Ele cria uma conexão MySQL e exibe a lista de tarefas.

:::important
Não esqueça de trocar `[your_password]` pela senha que você definiu para o usuário `todo`.
:::

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

// Executar query para retornar entradas da tabela
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
      <p>For our awesome ZAP-Hosting guide: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack</a></p>
      <ul>
          <?php
          // Verificar se há resultados
          if ($result->num_rows > 0) {
              // Loop pelos itens retornados
              foreach ($result as $entry) {
                  echo "<li>";
                  // Exibir nome com htmlspecialchars para evitar XSS
                  echo htmlspecialchars($entry["name"]);

                  // Exibir status de conclusão
                  if ($entry["is_completed"]) {
                      echo " <strong>(Completed)</strong>";
                  } else {
                      echo " <strong>(Incomplete)</strong>";
                  }

                  // Exibir data de criação
                  echo " - Creation Date: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // Se não houver itens, mostrar mensagem padrão
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

Salve e saia do nano com `CTRL + X`, `Y` e `ENTER`.

#### Testando o Site

Você seguiu tudo direitinho e criou um site de lista de tarefas que usa todos os componentes do stack LAMP!

Agora acesse o site pelo domínio (usando `http`/porta 80) que você configurou no host virtual, no exemplo `zapdocs.example.com`. O resultado final deve ser parecido com isso:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusão

Parabéns, você instalou e configurou o stack LAMP com sucesso! Como próximo passo, **recomendamos muito** configurar um domínio e um **certificado SSL** para garantir que os dados sejam transmitidos com segurança para seus sites. Veja nosso [guia Certbot](vserver-linux-certbot.md) focando no **Plugin Apache** e siga a configuração interativa para criar um certificado para seu domínio.

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />