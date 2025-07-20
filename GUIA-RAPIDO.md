# 🚀 Guia Rápido - 5 Minutos para Personalizar

## ✅ Checklist de Personalização

### 1. Informações Básicas (2 minutos)
Edite o arquivo `src/config/branding.js`:

```javascript
// Altere estas informações:
storeName: "SEU NOME AQUI",
storeSlogan: "SEU SLOGAN AQUI",
storeDescription: "SUA DESCRIÇÃO AQUI",

// Seu contato:
contact: {
  whatsapp: "5511999999999", // ← SEU WHATSAPP (só números)
  email: "seu@email.com",    // ← SEU EMAIL
  instagram: "@seuinsta",    // ← SEU INSTAGRAM
  address: "Sua Cidade, SP"  // ← SUA CIDADE
}
```

### 2. Cores da Marca (1 minuto)
No mesmo arquivo, altere as cores:

```javascript
colors: {
  primary: "#8B4B6B",    // ← COR PRINCIPAL
  secondary: "#E8D5D5",  // ← COR SECUNDÁRIA
  accent: "#6B3A4F",     // ← COR DE DESTAQUE
  background: "#FEFEFE", // ← COR DE FUNDO
  text: "#2D2D2D"        // ← COR DO TEXTO
}
```

### 3. Sua Logo (30 segundos)
- Substitua o arquivo `src/assets/logo.jpeg` pela sua logo
- Mantenha o mesmo nome: `logo.jpeg`

### 4. Seus Produtos (2 minutos)
Edite o arquivo `src/config/products.js`:

```javascript
// Exemplo de produto:
{
  id: 1,
  name: "Nome do Seu Produto",
  category: "categoria",
  price: 89.90,
  originalPrice: 129.90, // Preço original (opcional)
  image: "/api/placeholder/300/300", // Imagem do produto
  description: "Descrição do produto",
  features: [
    "Característica 1",
    "Característica 2",
    "Característica 3"
  ],
  inStock: true,    // true = disponível, false = esgotado
  featured: true,   // true = aparece na home
  rating: 4.8,      // Avaliação (opcional)
  reviews: 127      // Número de avaliações (opcional)
}
```

## 🎯 Dicas Importantes

### WhatsApp
- Use apenas números: `5511999999999`
- Inclua código do país (55) e DDD
- Teste se o número está correto

### Imagens
- Use imagens de boa qualidade
- Tamanho recomendado: 300x300px ou maior
- Formatos: JPG, PNG, WEBP

### Categorias
As categorias são criadas automaticamente baseadas nos produtos:
- `vibradores`
- `kits`
- `lubrificantes`
- `acessorios`
- `massageadores`
- `lingerie`

### Produtos em Destaque
- Marque `featured: true` nos produtos que quer destacar na home
- Máximo recomendado: 3-6 produtos

## 🚀 Deploy Rápido

### GitHub + Netlify (Recomendado)
1. Suba o projeto para seu GitHub
2. Conecte no Netlify
3. Deploy automático!

### Deploy Manual
1. Execute: `pnpm run build`
2. Suba a pasta `dist` no Netlify

## ✅ Teste Final

Antes de publicar, teste:
- [ ] Verificação de idade funciona
- [ ] Produtos aparecem corretamente
- [ ] Carrinho adiciona produtos
- [ ] WhatsApp abre com mensagem
- [ ] Site funciona no mobile
- [ ] Todas as páginas carregam

## 🆘 Problemas?

**Site não carrega:**
- Verifique se executou `pnpm run build`
- Confirme se o arquivo `netlify.toml` existe

**WhatsApp não funciona:**
- Verifique o formato do número
- Teste manualmente: `https://wa.me/5511999999999`

**Imagens não aparecem:**
- Confirme se estão na pasta `src/assets/`
- Verifique os caminhos no `products.js`

---

## 🎉 Pronto!

Seu sexshop está configurado e pronto para vender!

**Tempo total: 5 minutos** ⏱️

