# Publicar no GitHub Pages

Site: **https://linkcomunicacao.com.br**

## Requisitos

1. Repositório **público** (Settings → General → Danger Zone → Change repository visibility → Public).
2. Branch `gh-pages` com o build do site.
3. DNS do domínio apontando para o GitHub Pages (ver seção abaixo).

## Domínio customizado (linkcomunicacao.com.br)

O DNS do domínio é gerenciado na **Dialhost** (nameservers: `ns1.dialhost.com.br` e `ns2.dialhost.com.br`).

### 1. Configurar DNS na Dialhost

1. Acesse https://www.dialhost.com.br e faça login no painel.
2. Vá em **DNS / Zona DNS** do domínio `linkcomunicacao.com.br`.
3. **Mantenha os registros MX** (e-mail `recepcao@linkcomunicacao.com.br`) — não apague.
4. Remova ou altere registros **A** antigos que apontem para servidores da Dialhost (site antigo).
5. Adicione estes registros para o site no GitHub Pages:

| Tipo | Nome/Host | Valor |
|------|-----------|-------|
| A | `@` (ou vazio) | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `marianamarques01.github.io` |

6. Aguarde a propagação DNS (15 min a 48 h; em geral 1–2 h).

### 2. Configurar domínio no GitHub

1. Abra: https://github.com/marianamarques01/link/settings/pages
2. Em **Custom domain**, digite: `linkcomunicacao.com.br`
3. Clique em **Save**.
4. Quando o DNS estiver correto, marque **Enforce HTTPS**.

### 3. Publicar o site

No terminal, na pasta do projeto:

```bash
npm install
npm run deploy:pages
```

Ou faça `git push` na `main` (o workflow em Actions publica na `gh-pages`).

O arquivo `public/CNAME` já contém `linkcomunicacao.com.br` e vai junto no deploy.

## Passo a passo inicial (primeira publicação)

### 1. Instalar dependências e publicar a branch `gh-pages`

```bash
npm install
npm run deploy:pages
```

### 2. Ativar o GitHub Pages no repositório

1. Abra: https://github.com/marianamarques01/link/settings/pages
2. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
3. **Branch:** `gh-pages`
4. **Folder:** `/ (root)`
5. Clique em **Save**.
6. Configure o **Custom domain** (passo acima).

### 3. Aguardar e abrir o site

- Espere **2 a 10 minutos** após salvar (e DNS propagado).
- Acesse: **https://linkcomunicacao.com.br**

## Se ainda aparecer 404 ou erro de DNS

| Problema | Solução |
|--------|---------|
| “There isn't a GitHub Pages site here” | Repositório privado ou branch `gh-pages` vazia — rode `npm run deploy:pages`. |
| DNS não verificado no GitHub | Confira os 4 registros A na Dialhost; aguarde propagação. |
| Site abre sem CSS/imagens | Rode deploy de novo após mudar o `base` para `/`. |
| E-mail parou de funcionar | Restaure os registros MX na Dialhost. |

## Atualizar o site depois

```bash
npm run deploy:pages
```

Ou faça `git push` na `main`.
