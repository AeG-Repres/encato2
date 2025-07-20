import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
import AgeVerification from './components/AgeVerification';

// Páginas
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Configurações
import { branding } from './config/branding';

function App() {
  const [ageVerified, setAgeVerified] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Verificar se já foi verificado anteriormente
  useEffect(() => {
    const verified = localStorage.getItem('ageVerified');
    if (verified === 'true') {
      setAgeVerified(true);
    }
  }, []);

  // Carregar carrinho do localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Salvar carrinho no localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAgeVerification = (verified) => {
    setAgeVerified(verified);
    if (verified) {
      localStorage.setItem('ageVerified', 'true');
    }
  };

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Aplicar cores personalizadas
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', branding.colors.primary);
    root.style.setProperty('--secondary', branding.colors.secondary);
    root.style.setProperty('--accent', branding.colors.accent);
    root.style.setProperty('--background', branding.colors.background);
    root.style.setProperty('--text', branding.colors.text);
  }, []);

  // Mostrar verificação de idade se habilitada
  if (branding.ageVerification.enabled && !ageVerified) {
    return <AgeVerification onVerify={handleAgeVerification} />;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header 
          cartItems={cartItems}
          onUpdateQuantity={updateCartQuantity}
          onRemoveItem={removeFromCart}
          onClearCart={clearCart}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/produtos" element={<Products addToCart={addToCart} />} />
            <Route path="/produto/:id" element={<ProductDetail addToCart={addToCart} />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="/termos" element={<Terms />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

