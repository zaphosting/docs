---
id: vserver-linux-lamp-stack
title: "VPS: Configurar stack LAMP - Linux, Apache, MySQL, PHP"
description: "Descubra como configurar um stack LAMP para hospedar sites PHP dinâmicos em VPS Linux de forma eficiente → Saiba mais agora"
sidebar_label: Stack Web LAMP
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O **LAMP** é uma seleção popular de softwares open-source configurados juntos para permitir uma hospedagem simples de sites dinâmicos, com foco especial em sites e apps PHP. A sigla significa: **L**inux como sistema operacional, **A**pache como servidor web, **M**ySQL como banco de dados e por último **P**HP para processamento. Neste guia, vamos cobrir o processo de configurar um stack LAMP em um VPS Linux, com uma explicação detalhada e um exemplo de criação de um site de lista de tarefas.

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

A instalação pode ser dividida facilmente em cada dependência principal do LAMP, começando pelo servidor web Apache, seguido pelo banco de dados MySQL e por último o PHP. Durante a instalação, vamos configurar um site de teste escrito em PHP que acessará o banco MySQL. Por fim, cada requisição web será processada e servida pelo Apache.

### Configurando o Apache

O Apache é o servidor web que processará as requisições e servirá as respostas. Instale-o com o comando:
```
sudo apt install apache2
```

Após a instalação, certifique-se de que as regras apropriadas do firewall estejam criadas para garantir que o servidor web seja acessível pela internet. Neste exemplo, usaremos o **Firewall UFW**, pois o Apache tem um perfil registrado para ele.

Se você usa outro firewall, certifique-se de liberar a porta 80 (HTTP). Saiba mais sobre firewalls no Linux no nosso guia [Gerenciar Firewall](vserver-linux-firewall.md).

Ative o firewall UFW e crie uma regra para SSH:
```
# Criar regra para permitir SSH
sudo ufw allow OpenSSH

# Ativar firewall UFW
sudo ufw enable
```

:::caution
Garanta que você tenha uma regra para SSH configurada se estiver usando o firewall UFW! Caso contrário, você **não** conseguirá se conectar via SSH novamente se perder a conexão atual!
:::

Agora crie a regra para liberar o Apache e depois verifique se as regras estão ativas:
```
# Criar regra para liberar Apache
sudo ufw allow in "Apache Full"

# Verificar regras do firewall UFW
sudo ufw status
```

:::tip
Você pode ver quais perfis estão disponíveis rodando o comando `ufw app list`. No exemplo acima, usar `Apache Full` cria regras para HTTP (porta 80) e HTTPS (porta 443).
:::

Você deve ver as regras `Apache` e `Apache (v6)` com ação `ALLOW`, confirmando que o firewall está pronto. Também verá outras regras que já tenha configurado, incluindo a do SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

Com o firewall liberado para o Apache, teste se ele está funcionando acessando seu endereço IP no navegador: `http://[seu_endereço_ip]`

Se estiver funcionando, verá uma página de boas-vindas padrão. Se não, verifique o status do serviço com: `systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### Configurando o MySQL

Agora instale e configure o servidor MySQL, que será seu banco de dados para armazenar dados de forma relacional. Instale com:
```
sudo apt install mysql-server
```

Após a instalação, é recomendado rodar um script de instalação segura para garantir que seu MySQL fique protegido. É opcional, mas altamente recomendado. Execute com `sudo mysql_secure_installation`.

Esse script interativo vai te guiar. Primeiro, será perguntado sobre validação de senha. Recomendamos escolher `Y` para garantir senhas seguras e depois selecionar `MEDIUM` com `1` ou `STRONG` com `2`.

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

Depois, será perguntado sobre remover o usuário `anonymous` e desabilitar login remoto do root. Recomendamos aceitar ambos com `Y` por segurança. Isso remove o usuário de teste e garante que o root só possa ser usado localmente via SSH, reduzindo riscos.

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

Por fim, será perguntado sobre remover o banco `test` e recarregar as tabelas de privilégios. Aceite com `Y` para limpar o banco de teste e aplicar as mudanças.

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

Verifique se o MySQL está rodando tentando logar: `sudo mysql -u root`. Se funcionar, verá uma mensagem de boas-vindas. Saia com o comando `quit`.

### Configurando o PHP

A última dependência do LAMP é o PHP, que é simples de instalar. O comando abaixo instala o PHP junto com o plugin para Apache e MySQL, permitindo que o Apache trabalhe com PHP e que o PHP use MySQL.
```
sudo apt install php libapache2-mod-php php-mysql
```

Confirme a instalação checando a versão. Se aparecer a versão, o PHP está funcionando:
```
php -v
```

:::tip Extensões PHP
Para casos avançados, você pode precisar de extensões PHP extras para funcionalidades adicionais. Veja a lista rodando `apt search php- | less`.

Use as setas para navegar e `Q` para sair. Para instalar extensões, use:
```
sudo apt install [php_extensão] [...]
```
Você pode instalar várias extensões ao mesmo tempo separando por espaço.
:::

Recomendamos ajustar o índice de diretório para que arquivos `index.php` tenham prioridade sobre `.html`. Abra o arquivo:
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

No editor nano, remova `index.php` e coloque ele na frente da lista, assim:
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

Salve e saia com `CTRL + X`, depois `Y` e `ENTER`. Reinicie o Apache para aplicar: `sudo systemctl restart apache2`.

### Criando o Site de Teste

Com as dependências LAMP instaladas, vamos criar um site de teste para mostrar como o stack funciona junto para formar uma solução dinâmica. Isso é opcional, mas ajuda a entender como usar essas ferramentas para seus próprios sites.

Neste exemplo, criaremos um site simples de lista de tarefas em PHP que busca e retorna as tarefas armazenadas em uma tabela MySQL, servido pelo Apache.

Usaremos o domínio de teste `zapdocs.example.com`. No mundo real, você provavelmente usaria um domínio. Você **deve** configurar um registro DNS do tipo `A` para o domínio apontando para o endereço IP do seu servidor. Se precisar de ajuda, veja nosso guia [Registros de Domínio](domain-records.md).

:::note
Você pode optar por não usar domínio e substituir `[your_domain]` por um nome comum. Acessaria o site pelo IP. Mas ao criar o arquivo de host virtual, remova o parâmetro `ServerName`.
:::

#### Configurando o Apache

Normalmente, todos os arquivos e dados dos sites ficam em `/var/www`. Por padrão, o Apache vem com uma pasta `html` com uma página padrão. Para organizar melhor, especialmente se hospedar vários sites, recomendamos criar uma pasta individual para cada domínio.

Crie uma nova pasta em `/var/www/[your_domain]`. No exemplo, será `/var/www/zapdocs.example.com`.
```
sudo mkdir /var/www/[your_domain]
```

Agora crie um arquivo de configuração de host virtual para esse domínio em `sites-available`:
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

Copie o template abaixo, substituindo `[your_domain]` pelo seu domínio:
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

Esse arquivo trata requisições na porta 80 (HTTP) e verifica se o pedido bate com o `ServerName` (seu domínio). Também aponta que a pasta `/var/www/[your_domain]` será usada para servir os arquivos.

Salve e saia com `CTRL + X`, `Y` e `ENTER`. Recomendamos rodar `sudo apache2ctl configtest` para garantir que não há erros de sintaxe.

Ative o novo host virtual com:
```
sudo a2ensite [your_domain]
```

:::note Sem Domínio
Se você **não** usar domínio, remova ou comente a linha `ServerName` (prefixando com `#`). Também desative o host virtual padrão com `sudo a2dissite 000-default`.
:::

Reinicie o Apache para aplicar: `sudo systemctl restart apache2`.

#### Criando o Site

Agora que o Apache está configurado com o novo host virtual e pasta, vamos criar o site que será servido. A pasta está vazia, então nada será exibido ainda. Vamos criar um site simples de lista de tarefas para esse domínio.

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
INSERT INTO todoitems (name, is_completed) VALUES ('Criar Guia ZAP-Docs', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Comprar um servidor ZAP-Hosting', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Entrar no Discord da ZAP-Hosting', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Tenha um ótimo dia!', 0);
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

Agora vamos criar o arquivo PHP do site de lista de tarefas. Crie um `index.php` em `/var/www/[your_domain]`:
```
sudo nano /var/www/[your_domain]/index.php
```

Copie o código abaixo para o editor. Ele conecta ao banco MySQL e exibe as tarefas.

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
    die("Falha na conexão: " . $conn->connect_error);
}

// Executar query para retornar entradas da tabela
$sql = "SELECT id, name, is_completed, creation_date FROM todoitems ORDER BY creation_date DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="pt-br">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Lista de Tarefas</title>
  </head>
  <body>
      <h1>Lista de Tarefas Incrível :D</h1>
      <p>Para nosso guia ZAP-Hosting: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack</a></p>
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
                      echo " <strong>(Concluído)</strong>";
                  } else {
                      echo " <strong>(Pendente)</strong>";
                  }

                  // Exibir data de criação
                  echo " - Data de criação: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // Se não houver itens, mostrar mensagem padrão
              echo "<li>Nenhuma tarefa encontrada.</li>";
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

Você seguiu o passo a passo e criou um site de lista de tarefas que usa todo o stack LAMP!

Agora acesse o site pelo domínio (usando `http`/porta 80) que você configurou no host virtual, no exemplo `zapdocs.example.com`. O resultado deve ser parecido com isso:

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## Conclusão

Parabéns, você instalou e configurou o stack LAMP com sucesso! Como próximo passo, **recomendamos muito** configurar um domínio e um **certificado SSL** para garantir que os dados sejam transmitidos com segurança para seus sites. Confira nosso [guia Certbot](dedicated-linux-certbot.md) focando no **Plugin Apache** e siga a configuração interativa para criar um certificado rápido e fácil para seu domínio.

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />