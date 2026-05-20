const fechaActualizacion = "19 de mayo de 2026";

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        
        {/* Encabezado */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
            Aviso de Privacidad
          </h1>
          <p className="text-sm text-gray-500">
            Última actualización: <span className="font-semibold" style={{ color: '#e98b55' }}>{fechaActualizacion}</span>
          </p>
        </div>

        {/* Contenido */}
        <div className="space-y-6 text-gray-600 leading-relaxed text-justify">
          
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Identidad y Domicilio del Responsable</h2>
            <p>
              El responsable del tratamiento de sus datos personales es <strong style={{ color: '#e98b55' }}>ANDANI</strong> (en lo sucesivo, "El Responsable"), 
              con domicilio físico para oír y recibir notificaciones en la ciudad de <strong>Morelia, Michoacán, México</strong>. El Responsable se compromete a resguardar su información 
              bajo los más estrictos estándares de seguridad técnica, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Datos Personales que se Recabarán</h2>
            <p className="mb-2">Dependiendo de su perfil de usuario (comprador, arrendatario o propietario), recabaremos:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Datos de Contacto:</strong> Nombre completo, correo electrónico, teléfono móvil o fijo.</li>
              <li><strong>Datos Patrimoniales:</strong> Información que acredite la legítima propiedad de los inmuebles, datos fiscales para facturación y cuentas bancarias para transferencias (exclusivo para propietarios).</li>
              <li><strong>Datos Técnicos:</strong> Dirección IP, cookies y tokens de sesión para el correcto funcionamiento de la plataforma.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Finalidades del Tratamiento</h2>
            <p className="mb-2">Los datos serán utilizados para las siguientes finalidades esenciales:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Validar la identidad de los usuarios en la plataforma.</li>
              <li>Promocionar digitalmente las propiedades en venta o renta autorizadas en las zonas exclusivas de Morelia y sus alrededores.</li>
              <li>Gestionar el contacto para coordinar visitas físicas o virtuales a los inmuebles.</li>
              <li>Facilitar la documentación ante Notarías Públicas para la formalización de contratos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Protección y seguridad de la información</h2>
            <p>
              ANDANI implementa medidas de seguridad administrativas, técnicas y 
              físicas para proteger los datos personales contra daño, pérdida, alteración, destrucción o acceso no autorizado. <br/>
              Nuestro sitio web utiliza conexiones seguras mediante protocolos HTTPS/TLS y mecanismos de autenticación para 
              fortalecer la seguridad de la información.
              </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Transferencia de datos</h2>
            <p>
              <strong style={{ color: '#e98b55' }}>ANDANI</strong> no venderá ni compartirá sus datos personales con terceros ajenos a la operación inmobiliaria, 
              salvo obligación legal o requerimiento de autoridad competente.
              </p>
          </section>

          <section className="bg-orange-50/50 p-4 rounded-lg border-l-4" style={{ borderColor: '#e98b55' }}>
            <h2 className="text-lg font-semibold text-gray-800 mb-1">6. Derechos ARCO</h2>
            <p className="text-sm">
              Usted tiene derecho al Acceso, Rectificación, Cancelación u Oposición de sus datos. Puede ejercer estos derechos enviando una 
              solicitud formal al correo electrónico: <a href="mailto:andanibienesraices@gmail.com" className="font-semibold underline" 
              style={{ color: '#e98b55' }}>andanibienesraices@gmail.com</a>.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nombre completo del titular.</li>
              <li>Descripción clara de la solicitud.</li>
              <li>Documentos que acrediten su identidad</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">7. Modificaciones al aviso de privacidad</h2>
            <p>
             ANDANI se reserva el derecho de actualizar o modificar el presente Aviso de Privacidad en cualquier momento. 
             Las modificaciones serán publicadas en este mismo sitio web.
              </p>
          </section>

           <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">8. Consentimiento</h2>
            <p>
             Al utilizar este sitio web, usted acepta los términos establecidos en el presente Aviso de Privacidad.
              </p>
          </section>

        </div>
      </div>
    </div>
  );
}