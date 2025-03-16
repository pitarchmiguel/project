import Header from './components/Header.jsx'
import CardPrice from './components/CardPrice.jsx'  

function App() {

  return (
    <>
      <Header />
      <CardPrice 
        plan="Plan Básico" 
        description="Perfecto para emprendedores y pequeñas empresas " 
        priceOld="369€" 
        priceNew="199€"
        features={[
          " Diseño Profesional y Responsive",
          " 2 Secciones",
          " 1 Formulario de Contacto", 
          " Entrega en 7 días",
          " Soporte Básico"
        ]}
      />

      <CardPrice 
        plan="Plan Premium" 
        description="Ideal para empresas o emprendedores que quieren destacar, con más funcionalidades y crecimiento " 
        priceOld="469€" 
        priceNew="299€"
        features={[
          "Diseño a medida y estrategia personalizada",
          "Secciones Ilimitadas",
          "Optimización SEO",
          "Herramientas de Marketing",
          "Soporte Prioritario y Mantenimiento",
          "Entrega en 15 días"
        ]}
      />
    </>
  )
}

export default App
