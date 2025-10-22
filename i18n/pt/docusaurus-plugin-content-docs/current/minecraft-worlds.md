---
id: minecraft-worlds
title: "Minecraft: Gerencie os mundos salvos"
description: "Descubra como gerenciar, converter e fazer backup dos mundos do Minecraft entre plataformas para manter seu progresso seguro e sem interrupções → Saiba mais agora"
sidebar_label: Gerenciar Mundos
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

No fundo, o Minecraft armazena os saves do jogo como **mundos**, sendo cada mundo um save independente. Neste guia, vamos explorar como gerenciar os mundos no seu servidor de jogos Minecraft, incluindo converter mundos entre plataformas, regenerar mundos, fazer backup dos seus mundos locais e do servidor, e enviar mundos para o seu servidor.

<InlineVoucher />

## Preparação

Para gerenciar seus mundos, você precisa começar acessando seu servidor de jogos Minecraft via FTP. Se não estiver familiarizado com FTP, confira nosso [guia de Acesso via FTP](gameserver-ftpaccess.md).

## Comparando Diferenças entre Plataformas

Uma diferença chave entre servidores vanilla e plataformas de servidor é que servidores vanilla combinam o mundo normal, o nether e o end como um único save.

Já plataformas alternativas como Spigot, PaperMC e Bukkit separam cada dimensão em saves de mundo individuais. Veja a tabela abaixo que compara como um mundo exemplo chamado **zapdocs** é tratado por ambos os tipos de plataformas.

| Dimensão do Mundo | Servidor Vanilla (Combinado) | Plataformas de Servidor (Individual) |
| ----------------- | ---------------------------- | ------------------------------------ |
| Normal/Overworld  | zapdocs                      | zapdocs                              |
| Nether            | zapdocs                      | zapdocs_nether                       |
| The End           | zapdocs                      | zapdocs_the_end                      |

## Convertendo Mundos

Ao trocar entre um servidor vanilla e uma plataforma de servidor, você pode querer manter seu save do mundo. Devido às diferenças acima, será necessário ajustar a estrutura dos arquivos para extrair ou mesclar os mundos individuais do nether e do end, dependendo da ação.

:::info
Isso só é necessário se você estiver trocando entre vanilla e plataformas de servidor e quiser manter e mover um mundo existente. Se estiver apenas mudando entre vanilla ou entre plataformas de servidor, não precisa converter nada.
:::

:::note
Certifique-se de desligar o servidor antes de prosseguir para evitar conflitos ou rollbacks.
:::

<Tabs>
<TabItem value="converting-from-vanilla" label="Converter de Vanilla" default>

Para converter um mundo do formato vanilla para plataforma de servidor, você precisará extrair certas pastas para criar mundos individuais para cada dimensão. Claro que espera-se que você mova todos os mundos para um novo servidor rodando uma plataforma como Spigot, PaperMC ou Bukkit.

Acesse seu servidor via FTP e siga o caminho `../vanilla/[seu_mundo]` para acessar o save do mundo que deseja converter. Localize as pastas **DIM1** e **DIM-1**.

![](https://screensaver01.zap-hosting.com/index.php/s/FKiFmjYQembZ7qQ/preview)

A pasta **DIM1** é usada para os dados do end, enquanto a **DIM-1** é para os dados do nether.

Você precisará mover cada pasta para sua própria pasta de mundo nova, assim:
- Para o nether, crie uma nova pasta `[seu_mundo]_nether` na raiz. Mova a pasta **DIM-1** para essa nova pasta separada.
- Da mesma forma para o end, crie uma nova pasta `[seu_mundo]_the_end` na raiz. Mova a pasta **DIM1** para essa nova pasta separada.

:::info
Pode ser necessário sobrescrever as pastas `DIM`, mas isso é normal, pois por padrão as plataformas de servidor geram todas as dimensões imediatamente.
:::

Neste exemplo, o mundo se chama `world`, então as pastas `world_nether` e `world_the_end` foram criadas na raiz, com as pastas `DIM` apropriadas movidas para elas.

![](https://screensaver01.zap-hosting.com/index.php/s/CSgKsHj6fnxZCgy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/iYKHiQNzwmgQaz7/preview)

Os três mundos individuais agora estão prontos para uso em plataformas de servidor.

</TabItem>

<TabItem value="converting-to-vanilla" label="Converter para Vanilla">

Para converter um mundo de uma plataforma de servidor para o formato vanilla, o processo é praticamente o mesmo, mas invertido. Você precisará extrair dados dos mundos individuais do nether e do end para mesclá-los em um único formato de mundo. Claro que espera-se que você mova o mundo combinado para um novo servidor rodando vanilla.

Acesse seu servidor via FTP e entre na raiz. Localize as três pastas individuais de mundo que devem ser `[seu_mundo]`, `[seu_mundo]_nether` e `[seu_mundo]_the_end`, substituindo `[seu_mundo]` pelo nome do mundo.

Abra a pasta individual `[seu_mundo]_nether` e mova a pasta `DIM-1` para a pasta principal `[seu_mundo]`. Neste exemplo, como antes, o mundo padrão é chamado `world`.

![](https://screensaver01.zap-hosting.com/index.php/s/3tAijYDAbymJcrC/preview)

Agora repita o mesmo para a pasta individual `[seu_mundo]_the_end` e mova `DIM1` para a pasta principal `[seu_mundo]`.

![](https://screensaver01.zap-hosting.com/index.php/s/ao663qGk9Sz3WNt/preview)

O mundo combinado agora está pronto para uso em um servidor vanilla.

</TabItem>
</Tabs>

## Gerando Mundos

Gerar mundos é simples e você pode escolher gerar um mundo totalmente novo ou regenerar o mundo atual como novo. O Minecraft usa um sistema de **seed** onde cada mundo tem uma seed única, o que significa que só com a seed você pode regenerar uma cópia exata do começo do mundo.

<Tabs>
<TabItem value="generating-new" label="Gerar novo mundo" default>

Para gerar um novo mundo, basta desligar o servidor e conectar via FTP. Também abra o arquivo de configuração `server.properties`, seja pela seção **Configs** no painel web do seu servidor ou via FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

Agora, para gerar um novo mundo, você pode:
- Pelo FTP, encontrar o mundo com o mesmo nome do parâmetro `level-name` no arquivo de configuração e deletá-lo.
- Editar o parâmetro `level-name` no arquivo para um nome diferente e salvar.

Se quiser manter o save antigo, recomendamos a opção 2, assim o mundo antigo fica no servidor, mas "inativo".

Agora ligue o servidor novamente e ele vai perceber que o mundo com o nome `level-name` está faltando e vai gerar um novo mundo com uma seed nova.

</TabItem>

<TabItem value="regenerating-current" label="Regenerar mundo atual">

Para regenerar o mundo atual, você precisa anotar a seed. Isso pode ser feito pelo console no painel web do servidor ou diretamente no jogo, mas lembre-se que precisa ser OP (operador) para fazer isso no jogo.

Execute o comando `/seed` no console ou no jogo, que vai mostrar a seed do mundo atual. Anote essa seed.

![](https://screensaver01.zap-hosting.com/index.php/s/6s3fWaPMrDGSLrz/preview)

Com a seed em mãos, ajuste o parâmetro `level-seed` no arquivo `server.properties`. Você pode fazer isso pela seção **Configs** no painel web ou via FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

:::note
Desligue o servidor antes para garantir que o arquivo seja salvo corretamente.
:::

Mude o parâmetro `level-seed` para o valor da seed e salve o arquivo. Agora conecte via FTP.

Para regenerar o mundo, você pode:
- Pelo FTP, encontrar o mundo com o mesmo nome do parâmetro `level-name` e deletá-lo.
- Editar o parâmetro `level-name` para um nome diferente e salvar.

Se quiser manter o save antigo, recomendamos a opção 2 para que o mundo antigo fique no servidor, mas "inativo".

![](https://screensaver01.zap-hosting.com/index.php/s/Z7GwpKo8tQjk3cb/preview)

Agora ligue o servidor e ele vai perceber que o mundo com o nome `level-name` está faltando e vai regenerar o mundo atual usando a seed do parâmetro `level-seed`.

</TabItem>
</Tabs>

## Backup dos Mundos Salvos

### Saves Locais

Saves locais são os que você criou jogando no modo single player. Eles ficam dentro do AppData do Windows, especificamente no caminho:
```
../AppData/Roaming/.minecraft/saves
```

:::tip
Você pode acessar esse caminho facilmente pressionando `CTRL` + `R` ao mesmo tempo e digitando `%appdata%/.minecraft/saves/` na janela de executar. Só clicar em **OK** e será levado direto para a pasta.

![](https://screensaver01.zap-hosting.com/index.php/s/jfrnkXX6XtwniEL/preview)
:::

Nessa pasta, você verá todos os saves locais de mundos em um só lugar.

![](https://screensaver01.zap-hosting.com/index.php/s/Li7Qn23Ej6Yiomc/preview)

### Acessando Saves via FTP

Fazer backup do save do seu mundo no servidor é simples. Depois de conectar ao seu servidor de jogos via FTP, acesse a pasta raiz da plataforma de servidor que você está usando. Os saves dos mundos ficam diretamente ali, com o nome padrão do mundo sendo `world`.

![](https://screensaver01.zap-hosting.com/index.php/s/X2FQLSrC5QgrexQ/preview)

### Backup Automático

Também oferecemos uma opção para fazer backup automático do seu save de mundo (e do arquivo de configuração) direto pela nossa interface web. Vá até o painel do seu servidor de jogos e acesse a seção **Ferramentas->Backups**. Lá você pode configurar várias opções para agendar backups automáticos do seu servidor. Fornecemos 10GB de armazenamento gratuito para backups. Para mais detalhes, confira nosso guia dedicado de [Backups](gameserver-backups.md).

## Enviando Save de Mundo

Assim como fazer backup, enviar seu save de mundo é fácil. Primeiro, conecte ao seu servidor de jogos via FTP. Depois, vá até a pasta raiz da plataforma de servidor que você está usando.

:::info Mundos Vanilla & Plataformas de Servidor
Lembre-se que servidores vanilla e plataformas de servidor armazenam mundos em formatos ligeiramente diferentes.

Se estiver movendo um save de vanilla para uma plataforma como PaperMC, ou vice-versa, confira a seção de conversão de mundos deste guia.
:::

Basta arrastar e soltar qualquer save de mundo na pasta raiz pelo seu cliente FTP e ele será enviado para o servidor.

:::tip
Pode ser útil copiar o nome da pasta do save que você enviou, pois vai precisar dele para ativar o mundo na próxima seção.
:::

## Ativando Save de Mundo

Para usar um save de mundo específico, você precisa editar o arquivo de configuração `server.properties`, especificamente o parâmetro `level-name`.

Você pode fazer isso pela seção **Configs** no painel web do seu servidor ou via FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

No arquivo, encontre o parâmetro `level-name` e edite para o nome da pasta do seu save de mundo. Se estiver usando uma plataforma de servidor, use o nome da pasta principal, não as pastas `_nether` ou `_the_end`.





## Conclusão

Agora você sabe como lidar com seus mundos Minecraft com confiança. Desde converter saves entre vanilla e plataformas, gerar mundos novos, regenerar antigos usando seeds, fazer backups confiáveis, enviar mundos personalizados e ativá-los no seu servidor. Com esse conhecimento, você está pronto para gerenciar seus mundos de forma tranquila e manter suas aventuras seguras e organizadas.

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂

<InlineVoucher />