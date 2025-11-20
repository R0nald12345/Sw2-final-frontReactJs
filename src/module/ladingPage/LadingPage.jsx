import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Car, Shield, Users, Zap, CheckCircle, MessageCircle, Send, X, Sparkles } from 'lucide-react';

const LadingPage = () => {
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '¡Hola! 👋 Soy el asistente virtual de UNICARPOL. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const UNICARPOL_CONTEXT = `
UNICARPOL es una plataforma de transporte colaborativo diseñada exclusivamente para la Universidad Autónoma Gabriel René Moreno (UAGRM).

CARACTERÍSTICAS PRINCIPALES:
- Sistema de carpooling universitario seguro y confiable
- Conecta estudiantes, docentes y administrativos
- Cualquier miembro de la comunidad universitaria puede ser conductor (con licencia vigente)
- Aplicación móvil intuitiva y fácil de usar
- Sistema de verificación de identidad universitaria
- Calificaciones y reseñas de conductores y pasajeros
- Rutas optimizadas dentro y hacia el campus
- Pagos seguros integrados en la app
- Notificaciones en tiempo real
- Chat entre conductor y pasajeros

OBJETIVO GENERAL:
Asegurar la calidad del software desarrollado, garantizando que el sistema cumpla con los requisitos funcionales, de seguridad, rendimiento y usabilidad establecidos.

OBJETIVOS ESPECÍFICOS:
- Sistema de Gestión de Calidad del Software (SQA) alineado con normas IEEE e ISO
- Procesos de verificación y validación en cada fase
- Cumplimiento de estándares de documentación y codificación
- Gestión formal de configuración y cambios
- Mejora continua en calidad del producto
- Cultura de colaboración y transparencia

MISIÓN:
Desarrollar soluciones tecnológicas seguras, sostenibles y confiables que mejoren la movilidad universitaria, conectando de manera inteligente a estudiantes, docentes y administrativos de la UAGRM.

BENEFICIOS:
- Ahorro de costos en transporte
- Reducción de huella de carbono
- Mayor seguridad que transporte público
- Comunidad verificada universitaria
- Horarios flexibles
- Conoce a otros miembros de la UAGRM
- Contribuye a un campus más sostenible

SEGURIDAD:
- Verificación de identidad universitaria obligatoria
- Licencia de conducir verificada para conductores
- Sistema de calificaciones y reportes
- Seguimiento GPS en tiempo real
- Contacto de emergencia integrado
- Soporte 24/7

PRECIOS:
- Tarifas más económicas que taxis tradicionales
- Sistema de precios dinámico justo
- Descuentos para usuarios frecuentes
- Sin comisiones ocultas
`;

  const handleWhatsAppClick = () => {
    // Obtener configuración desde variables de entorno
    const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE_NUMBER || '59176502656';
    const message = import.meta.env.VITE_WHATSAPP_MESSAGE || 'Hola estoy interesado en el UNICARPOL';
    const encodedMessage = encodeURIComponent(message);
    
    // Crear URL de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Intentar abrir WhatsApp
    try {
      // Primero intenta abrir en la app móvil si está disponible
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (isMobile) {
        // Para móviles, intenta abrir la app primero
        window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
        
        // Si no funciona, abre WhatsApp Web después de 1 segundo
        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
        }, 1000);
      } else {
        // Para desktop, abre directamente WhatsApp Web
        window.open(whatsappUrl, '_blank');
      }
    } catch (error) {
      console.error('Error al abrir WhatsApp:', error);
      // Si hay error, abre directamente WhatsApp Web
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      // Obtener configuración desde variables de entorno
      const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'AIzaSyDeEk0JKUX-HpBSlQLCNBRXFtFdC9FvJuM';
      const GEMINI_MODEL = import.meta.env.VITE_GEMINI_MODEL || 'gemini-2.5-flash';
      const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

      const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Eres un asistente virtual experto en UNICARPOL. Responde de manera amigable, concisa y profesional. Si te preguntan algo fuera del contexto de UNICARPOL, redirige amablemente la conversación al tema.

CONTEXTO DE UNICARPOL:
${UNICARPOL_CONTEXT}

Pregunta del usuario: ${userMessage}

Responde en español de manera clara y útil.`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1000,
          }
        })
      });

      const data = await response.json();
      
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        const aiResponse = data.candidates[0].content.parts[0].text;
        setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
      } else {
        throw new Error('Respuesta inválida de la API');
      }
    } catch (error) {
      console.error('Error en el chatbot:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: '❌ Lo siento, hubo un error al procesar tu mensaje. Por favor intenta nuevamente.' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/logos/unicarpol-logo.svg" alt="UNICARPOL Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              UNICARPOL
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#caracteristicas" className="text-gray-700 hover:text-blue-600 transition">Características</a>
            <a href="#como-funciona" className="text-gray-700 hover:text-blue-600 transition">Cómo Funciona</a>
            <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition">Beneficios</a>
            <a href="#precio" className="text-gray-700 hover:text-blue-600 transition">Precio</a>
          </div>
          <button 
            onClick={() => navigate('/auth/login')}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition">
            Descargar App
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold animate-pulse">
            🚀 Movilidad Universitaria del Futuro
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transporte Seguro y
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Colaborativo</span>
            <br />para la UAGRM
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Conecta con estudiantes, docentes y administrativos. Comparte viajes, ahorra dinero y contribuye a un campus más sostenible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/auth/login')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition">
              Comenzar Ahora
            </button>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">
              Ver Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">5K+</div>
              <div className="text-gray-600 mt-2">Usuarios Activos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">98%</div>
              <div className="text-gray-600 mt-2">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">15K+</div>
              <div className="text-gray-600 mt-2">Viajes Realizados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section id="caracteristicas" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Características Principales</h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas para una movilidad segura y eficiente</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transform hover:-translate-y-2 transition">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Seguro</h3>
              <p className="text-gray-600">Verificación de identidad universitaria y licencias. Tu seguridad es nuestra prioridad.</p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transform hover:-translate-y-2 transition">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Comunidad UAGRM</h3>
              <p className="text-gray-600">Solo miembros verificados de la universidad. Viaja con confianza.</p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transform hover:-translate-y-2 transition">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rápido y Fácil</h3>
              <p className="text-gray-600">Encuentra viajes en segundos. Interface intuitiva y simple de usar.</p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-xl transform hover:-translate-y-2 transition">
              <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">Sistema de calificaciones y estándares ISO para asegurar excelencia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section id="como-funciona" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Cómo Funciona?</h2>
            <p className="text-xl text-gray-600">Tres simples pasos para comenzar</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regístrate</h3>
              <p className="text-gray-600">Crea tu cuenta con tu correo universitario y verifica tu identidad.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Busca o Ofrece</h3>
              <p className="text-gray-600">Encuentra viajes disponibles o publica el tuyo si eres conductor.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¡Viaja!</h3>
              <p className="text-gray-600">Conecta, comparte el viaje y califica tu experiencia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Beneficios de UNICARPOL</h2>
              <p className="text-xl text-gray-600">Más que solo transporte</p>
            </div>
            
            <div className="space-y-4">
              {[
                'Ahorra hasta 60% en costos de transporte',
                'Reduce tu huella de carbono y contribuye al medio ambiente',
                'Conoce y conecta con otros miembros de la comunidad UAGRM',
                'Viaja con mayor seguridad que el transporte público',
                'Horarios flexibles adaptados a tu agenda universitaria',
                'Sistema de calificaciones para garantizar calidad',
                'Soporte técnico 24/7 para cualquier eventualidad'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-blue-50 transition">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Plan de Licencia</h2>
            <p className="text-xl text-gray-600">Implementa UNICARPOL en tu institución</p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-600 transform hover:scale-105 transition duration-300">
              {/* Badge */}
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white text-center py-3 px-6">
                <span className="font-bold text-sm uppercase tracking-wide">🎓 Licencia Institucional</span>
              </div>
              
              {/* Price */}
              <div className="p-8 text-center">
                <div className="mb-6">
                  <span className="text-gray-500 text-lg">Desde</span>
                  <div className="flex items-baseline justify-center mt-2">
                    <span className="text-5xl font-bold text-gray-900">$4,999</span>
                    <span className="text-gray-500 text-xl ml-2">/año</span>
                  </div>
                  <p className="text-green-600 font-semibold mt-2">Pago único anual</p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-600 text-lg">
                    Licencia completa para implementar UNICARPOL en tu universidad
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8 text-left">
                  {[
                    'Aplicación móvil iOS y Android',
                    'Panel de administración web completo',
                    'Sistema de verificación de identidad',
                    'Seguimiento GPS en tiempo real',
                    'Sistema de pagos integrado',
                    'Base de datos segura y escalable',
                    'Código fuente completo incluido',
                    'Documentación técnica detallada',
                    'Instalación y configuración',
                    'Capacitación para administradores',
                    'Soporte técnico por 1 año',
                    'Actualizaciones de seguridad',
                    'Personalización de marca',
                    'Usuarios ilimitados',
                    'Sin comisiones por transacción'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-full text-lg font-bold hover:shadow-2xl transform hover:-translate-y-1 transition duration-300">
                  Adquirir Licencia Ahora
                </button>
               
              </div>

              {/* Garantías */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 border-t border-gray-200">
                <div className="text-center space-y-2">
                  <p className="text-sm font-semibold text-gray-700">✅ Garantía de 30 días</p>
                  <p className="text-sm font-semibold text-gray-700">🔒 Cumplimiento ISO y IEEE</p>
                  <p className="text-sm font-semibold text-gray-700">🏆 Calidad empresarial garantizada</p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 italic mb-4">
                "Implementamos UNICARPOL en nuestra universidad y redujo los costos de transporte de nuestros estudiantes en un 65%. ¡Altamente recomendado!"
              </p>
              <p className="font-semibold text-gray-900">- Universidad Ejemplo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para una Movilidad Inteligente?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de estudiantes, docentes y administrativos que ya están viajando de manera más segura y económica.
          </p>
          <button 
            onClick={() => navigate('/auth/login')}
            className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition">
            Descargar UNICARPOL Ahora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src="/logos/unicarpol-logo.svg" alt="UNICARPOL Logo" className="w-12 h-12" />
            <span className="text-2xl font-bold text-white">UNICARPOL</span>
          </div>
          <p className="mb-4">Movilidad universitaria segura, sostenible y colaborativa</p>
          <p className="text-sm">© 2024 UNICARPOL - Universidad Autónoma Gabriel René Moreno</p>
        </div>
      </footer>

      {/* Chatbot Button */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transform hover:scale-110 transition z-50 flex items-center space-x-2"
        >
          <MessageCircle className="w-6 h-6" />
          <Sparkles className="w-4 h-4 animate-pulse" />
        </button>
      )}

      {/* Chatbot Window */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">Asistente UNICARPOL</h3>
                <p className="text-blue-100 text-xs">Powered by Gemini 2.5 Flash</p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-bl-none shadow-sm">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Escribe tu pregunta..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loading}
              />
              <button
                onClick={handleSendMessage}
                disabled={loading || !input.trim()}
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LadingPage;