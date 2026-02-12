---
id: dedicated-linux-lamp-stack
title: "Servidor Dedicado: Configurar stack LAMP - Linux, Apache, MySQL, PHP"
description: "Descubra como configurar um stack LAMP para hospedar sites PHP dinâmicos em servidores Linux de forma eficiente → Saiba mais agora"
sidebar_label: Web LAMP stack
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O **LAMP** stack é uma seleção popular de softwares open-source configurados juntos para permitir uma hospedagem simples de sites dinâmicos, com foco especial em sites e apps PHP. A sigla significa: **L**inux como sistema operacional, **A**pache como servidor web, **M**ySQL como banco de dados e por fim **P**HP para processamento. Neste guia, vamos cobrir o processo de configurar um stack LAMP em um Servidor Dedicado Linux, com uma explicação detalhada e um exemplo de criação de um site de lista de tarefas. 



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

A instalação pode ser dividida facilmente em cada dependência principal do LAMP, começando pelo servidor web Apache, seguido pelo banco de dados MySQL e por fim o PHP. Durante a instalação, vamos configurar um site de teste escrito em PHP que acessará o banco de dados MySQL. Por fim, cada requisição web será processada e servida pelo servidor Apache.

### Configurando o Apache

O Apache é o servidor web que será usado para processar requisições web e servir respostas. Instale-o com o comando abaixo.
```
sudo apt install apache2
```

Após a instalação, você deve garantir que as regras apropriadas do firewall estejam criadas para que o servidor web seja acessível pela internet. Neste exemplo, usaremos o **UFW Firewall** já que o Apache tem um perfil registrado para ele.

Se você usa outro firewall, certifique-se de liberar a porta 80 (HTTP) no firewall. Você pode aprender mais sobre firewalls no Linux no nosso guia [Gerenciar Firewall](vserver-linux-firewall.md).

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

Você deve ver as regras `Apache` e `Apache (v6)` com ação `ALLOW`, confirmando que o firewall está pronto. Também verá outras regras que você tenha configurado antes, incluindo a regra SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Com o firewall liberado para o Apache, agora verifique se o Apache está funcionando. Você pode fazer isso tentando acessar seu endereço IP no navegador, assim: `http://[seu_endereço_ip]`

Se estiver funcionando, você verá uma página de boas-vindas padrão. Se não, verifique o status do serviço com o comando: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Configurando o MySQL

Agora você vai instalar e configurar um servidor MySQL que atuará como banco de dados para armazenar dados de forma relacional. Instale com o comando:
```
sudo apt install mysql-server
```

Depois de instalado, é recomendado rodar um script de instalação segura para garantir que sua instância MySQL fique protegida. Isso é opcional, mas altamente recomendado. Execute com o comando `sudo mysql_secure_installation`.

Você passará por uma configuração interativa. Primeiro, será perguntado sobre validação de senha. Recomendamos escolher `Y` para garantir que apenas senhas seguras sejam aceitas no futuro e depois escolher `MEDIUM` com `1` ou `STRONG` com `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Em seguida, será perguntado sobre remover o usuário `anonymous` e desabilitar login remoto do root. Recomendamos aceitar ambos com `Y` por questões de segurança. Isso garante que o usuário de teste seja removido e que o usuário root só possa ser usado localmente via SSH, reduzindo riscos.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Por fim, será perguntado sobre remover o banco de dados `test` e recarregar as tabelas de privilégios. Novamente, recomendamos aceitar com `Y` já que a tabela de teste não é necessária e é preciso recarregar as permissões para aplicar as mudanças.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Agora verifique se o MySQL está rodando tentando logar com o comando: `sudo mysql -u root`. Se funcionar, verá uma mensagem de boas-vindas. Você pode sair com o comando `quit` quando quiser.

### Configurando o PHP

A última dependência do LAMP é o PHP e sua instalação é bem simples. O comando abaixo instala o PHP junto com um plugin para Apache e MySQL, permitindo que o Apache trabalhe com PHP e que o PHP use MySQL.
```
sudo apt install php libapache2-mod-php php-mysql
```

Confirme que a instalação foi bem-sucedida checando a versão. Se aparecer a versão, o PHP está funcionando corretamente.
```
php -v
```

:::tip Extensões PHP
Para casos avançados, você pode precisar de extensões PHP adicionais para funcionalidades extras. Veja a lista rodando `apt search php- | less`.

Use as setas para navegar e pressione `Q` para sair. Para instalar uma extensão, use o comando apt install assim. Pode instalar várias extensões de uma vez separando por espaço para agilizar.

```
sudo apt install [php_extension] [...]
```
:::

Recomendamos ajustar o índice de diretório para garantir que arquivos `index.php` tenham prioridade sobre o padrão `.html`. Abra o arquivo com:
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

No editor nano, remova `index.php` e mova para o início da lista, assim:
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

Salve e saia do nano com `CTRL + X`, depois `Y` para confirmar e `ENTER`. Agora reinicie o Apache para aplicar com `sudo systemctl restart apache2`.

### Criando o Site de Teste

Com a instalação de cada dependência LAMP concluída, vamos criar um site de teste para mostrar como o stack LAMP funciona junto para formar uma ótima solução de site dinâmico. Isso é totalmente opcional, mas ajuda a entender como usar essas ferramentas para montar seus próprios sites.

Neste exemplo, criaremos um pequeno site de lista de tarefas em PHP que buscará e retornará as tarefas. Os dados ficarão armazenados em uma tabela MySQL e o site será servido pelo Apache.

Usaremos também um domínio de teste `zapdocs.example.com` durante o guia, já que no mundo real você provavelmente usaria um domínio. Você **deve** configurar um registro DNS do tipo `A` para o domínio apontando para o endereço IP do seu servidor. Se precisar de ajuda, confira nosso guia [Registros de Domínio](domain-records.md).

:::note
Você pode optar por não usar domínio e substituir menções de `[your_domain]` por um nome comum. Assim acessaria o site pelo IP. Mas note que ao criar o arquivo de host virtual depois, deve remover o parâmetro `ServerName`.
:::

#### Configurando o Apache

Normalmente, em servidores web, todos os arquivos e dados dos sites ficam no diretório `/var/www`. Por padrão, o Apache vem com uma pasta `html` que contém uma página padrão. Para manter tudo organizado, especialmente se for hospedar vários sites no mesmo Apache, recomendamos criar uma pasta individual para cada site.

Para isso, crie uma nova pasta em `/var/www/[your_domain]` para cada domínio. No exemplo, será `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Agora crie um novo arquivo de configuração de host virtual Apache na pasta `sites-available` para esse domínio e pasta.
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

Use o template abaixo e cole no nano, substituindo `[your_domain]` pelo domínio que está usando.
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

Esse arquivo de host virtual lida com requisições na porta 80 (HTTP) e verifica se o pedido bate com o `ServerName` especificado, ou seja, seu domínio. Também aponta que a pasta `/var/www/[your_domain]` criada deve ser usada para servir os arquivos.

Salve e saia do nano com `CTRL + X`, depois `Y` e `ENTER`. Recomendamos rodar `sudo apache2ctl configtest` para garantir que não há erros de sintaxe.

O passo final para configurar o Apache é ativar o novo host virtual com `a2ensite`.
```
sudo a2ensite [your_domain]
```

:::note Sem Domínio Usado
Se você **não** usar domínio, remova a linha `ServerName` ou comente colocando `#` na frente. Também precisará desabilitar o host virtual padrão com `sudo a2dissite 000-default`.
:::

Por fim, reinicie o Apache para aplicar o novo host virtual com: `sudo systemctl restart apache2`.

#### Criando o Site

Agora que configurou o Apache com o novo host virtual e pasta de documentos, é hora de criar o site que será servido. No momento a pasta está vazia, então nada será exibido. Vamos criar um site simples de lista de tarefas como mencionado.

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

# Criar tabela de itens
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

Com o banco preparado e o usuário criado, saia do terminal MySQL com `quit`.

##### Arquivos PHP do Site

A última parte do exemplo é criar o arquivo PHP do site de lista de tarefas. Será um arquivo `index.php` na pasta `/var/www/[your_domain]` criada antes. Abra o nano para criar o arquivo:
```
sudo nano /var/www/[your_domain]/index.php
```

Abaixo temos um código simples que você pode colar no nano para uma página básica que retorna os itens da lista armazenados no banco. A primeira parte em PHP cria a conexão MySQL.

:::important
Você deve trocar `[your_password]` pela senha que definiu para o usuário `todo` anteriormente.
:::

A parte HTML cria a página principal com uma lista não ordenada, percorrendo os resultados.

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

// Rodar query SQL para retornar entradas da tabela e salvar no resultado
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
              // Loop por cada item retornado pela query
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

Depois de colar no nano, salve e saia com `CTRL + X`, depois `Y` e `ENTER`.

#### Testando o Site

Você seguiu o passo a passo e configurou um site de lista de tarefas que usa todos os componentes do stack LAMP!

Agora deve conseguir acessar o site pelo domínio (usando `http`/porta 80) que definiu no arquivo de host virtual, que no exemplo é `zapdocs.example.com`. O resultado final deve ser parecido com isso:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusão

Parabéns, você instalou e configurou o stack LAMP com sucesso! Como próximo passo, **recomendamos muito** configurar um domínio e um **certificado SSL** para garantir que os dados sejam transmitidos com segurança para seus sites. Confira nosso [guia Certbot](dedicated-linux-certbot.md) focado no **Plugin Apache** e siga a configuração interativa para configurar um certificado para seu domínio rapidinho.

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂