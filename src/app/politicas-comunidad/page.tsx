'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, FileText, Users, AlertCircle } from 'lucide-react';

export default function PoliticasComunidad() {
  return (
    <div className="min-h-screen bg-[#0E0918] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.jpeg" alt="n8n Seniority" width={50} height={50} className="rounded-lg" />
              <span className="text-xl font-bold hidden sm:block">n8n Seniority</span>
            </Link>
            <div className="hidden md:flex gap-8 text-sm">
              <Link href="/#caracteristicas" className="hover:text-[#FF6D5A] transition-colors">
                Características
              </Link>
              <Link href="/#comunidad" className="hover:text-[#FF6D5A] transition-colors">
                Comunidad
              </Link>
              <Link href="/politicas-comunidad" className="text-[#FF6D5A] transition-colors">
                Políticas comunidad
              </Link>
            </div>
            <Link
              href="/#comunidad"
              className="bg-[#FF6D5A] hover:bg-[#FF5542] px-6 py-2 rounded-lg font-medium transition-colors text-sm"
            >
              Únete
            </Link>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="container mx-auto px-6 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FF6D5A] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-[#FF6D5A]/20 rounded-lg">
              <Shield className="w-8 h-8 text-[#FF6D5A]" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Aviso Legal y Política de Privacidad
              </h1>
              <p className="text-gray-400 text-lg">
                Normas de uso, confidencialidad y cumplimiento RGPD
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12 space-y-8"
          >
            {/* Introduction */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-[#FF6D5A] mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-3">Comunidad hispanohablante de n8n</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Bienvenidos a la mejor comunidad de n8n en habla hispana !!
                  </p>
                  <p className="text-gray-400 mt-3 leading-relaxed">
                    Antes de participar, te invitamos a leer atentamente el presente Aviso Legal y Política de Privacidad, al pertenecer a la comunidad, aceptas las condiciones y normas de la misma.
                  </p>
                </div>
              </div>
              
              <div className="bg-[#FF6D5A]/10 border border-[#FF6D5A]/30 rounded-lg p-4">
                <p className="text-gray-300 leading-relaxed">
                  Este grupo se gestiona desde Colombia, pero adopta voluntariamente el Reglamento Europeo de Protección de Datos (RGPD), el Data Act y el Reglamento de Inteligencia Artificial (REIA), como marcos de referencia para garantizar los más altos estándares de privacidad, transparencia y seguridad.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <p className="text-gray-300 leading-relaxed">
                  La permanencia en el grupo y/o la publicación de cualquier mensaje implica que has leído, comprendido y aceptado expresamente estas condiciones, comprometiéndote a respetar las normas de privacidad, confidencialidad y uso responsable de los datos de los miembros.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-[#FF6D5A] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">1. Responsable del tratamiento</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    El grupo está gestionado por el equipo organizador de la Comunidad n8n Seniority Luis Miguel Giraldo Gonzalez. Para cualquier cuestión de privacidad puedes enviar un correo a esta dirección:
                  </p>
                  <a 
                    href="mailto:gerencia@pymes-ai.com" 
                    className="text-[#FF6D5A] hover:text-[#FF5542] transition-colors font-medium"
                  >
                    gerencia@pymes-ai.com
                  </a>
                  <p className="text-gray-400 mt-4 leading-relaxed">
                    Actuamos conforme al RGPD (UE) 2016/679 como norma básica de referencia y al Data Act y al Reglamento Europeo de IA (REIA), en lo que sea de aplicación.
                  </p>
                  <p className="text-gray-400 mt-3 leading-relaxed">
                    WhatsApp (Meta) actúa como plataforma independiente y responsable de su propio tratamiento de datos, según sus políticas de privacidad y condiciones de uso. El grupo se aloja en su infraestructura, pero es gestionado por el Responsable aquí definido, quien decide la finalidad y normas de uso del grupo.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-xl font-bold mb-4">2. Qué datos se tratan en este grupo</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Al participar, el resto de miembros puede visualizar o acceder a:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>Tu número de teléfono</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>Tu nombre y foto de perfil (si están configurados como públicos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>Tus mensajes, reacciones, archivos compartidos, audios y vídeos enviados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>Metadatos asociados (hora de envío, actividad, etc.)</span>
                </li>
              </ul>
              <p className="text-gray-400 mt-4 leading-relaxed">
                En caso de enviar audios o vídeos, asumes que los contenidos son de carácter profesional o técnico, y que no contienen información sensible, confidencial ni datos biométricos de terceros sin su consentimiento.
              </p>
              <p className="text-gray-400 mt-3 leading-relaxed">
                No se solicitarán otros datos personales ni se almacenarán fuera del grupo, salvo autorización expresa.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-xl font-bold mb-4">3. Finalidad del grupo</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Esta comunidad tiene una finalidad técnica y colaborativa:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>Compartir recursos y experiencias sobre automatización e inteligencia artificial.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>Difundir actividades profesionales y colectivas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>Generar conocimiento útil para la comunidad.</span>
                </li>
              </ul>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mt-4">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-red-400">Queda terminantemente prohibido</strong> usar los datos del grupo para fines personales, comerciales o ajenos a esta finalidad.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-xl font-bold mb-4">4. Base jurídica</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                El tratamiento de datos se fundamenta en:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>El interés legítimo del Responsable para facilitar la actividad de la comunidad.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>El consentimiento explícito e informado que prestas al permanecer y participar en el grupo.</span>
                </li>
              </ul>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Puedes retirarte en cualquier momento. Tu salida implica el cese de participación, pero ten en cuenta que los mensajes previos no se eliminan automáticamente.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3">
                <Lock className="w-6 h-6 text-[#FF6D5A] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4">5. Privacidad, Confidencialidad y Buenas Prácticas</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Para proteger la privacidad de todos:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">No compartas datos personales de terceros (clientes, usuarios, etc.).</span>
                    </div>
                    <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">No reenvíes ni captures mensajes sin permiso del autor.</span>
                    </div>
                    <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">No subas contenido confidencial de empresas o proyectos reales.</span>
                    </div>
                    <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">No insertes datos reales en pruebas de IA, prompts o logs.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-xl font-bold mb-4">6. Base de conocimiento (uso comunitario de aportes)</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Podremos construir una base de conocimiento colectiva con los contenidos compartidos, pero:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>Se aplicará anonimización técnica y organizativa, para que no puedan identificarte directa ni indirectamente.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>No se usará IA sin informar previamente y garantizar supervisión humana en su funcionamiento (Art. 14 REIA).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>No se reutilizarán tus mensajes con fines ajenos a la comunidad ni se cederán a terceros sin tu consentimiento (Art. 5.1 RGPD, Art. 4 Data Act).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>
                    La información generada en la conversación de los grupos de la comunidad se conserva exclusivamente durante un periodo máximo de 3 días, con el propósito de posibilitar el adecuado funcionamiento del bot de la comunidad. Transcurrido dicho plazo, los datos son eliminados de manera automática, en cumplimiento de los principios de minimización y limitación de la conservación establecidos por la normativa vigente.
                  </span>
                </li>
              </ul>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-4">
                <p className="text-gray-300 leading-relaxed">
                  Cualquier mensaje que vulnere estas normas podrá ser eliminado, y su autor podrá ser expulsado del grupo.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-xl font-bold mb-4">7. Ejercicio de tus derechos</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Como miembro de esta comunidad, tienes derecho a:
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>Acceder, rectificar o suprimir tus datos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>Limitar u oponerte al tratamiento.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>Solicitar la portabilidad de los datos que hayas aportado (según el Data Act).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>Obtener información sobre decisiones automatizadas o uso de IA (REIA).</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-2">
                Para ejercer estos derechos, puedes escribir en privado al administrador o contactar a través del correo:
              </p>
              <a 
                href="mailto:gerencia@pymes-ai.com" 
                className="text-[#FF6D5A] hover:text-[#FF5542] transition-colors font-medium"
              >
                gerencia@pymes-ai.com
              </a>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-4">
                <p className="text-gray-300 leading-relaxed text-sm">
                  <strong>Importante:</strong> Este grupo se gestiona en la plataforma WhatsApp, que pertenece a Meta, un proveedor externo y responsable independiente de su propia política de datos. Algunas solicitudes (como eliminación de mensajes, copia de seguridad o datos técnicos) pueden requerir que el usuario gestione directamente sus ajustes o contacte con WhatsApp.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-xl font-bold mb-4">8. Seguridad y brechas de datos</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ante cualquier incidente (filtración, reenvío indebido, etc.):
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>Notifica de inmediato al administrador del grupo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>Se aplicará el protocolo legal correspondiente: evaluación del riesgo, medidas de mitigación y, si procede, notificación a la AEPD en un plazo máximo de 72 horas.</span>
                </li>
              </ul>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <p className="text-gray-300 leading-relaxed text-sm">
                  <strong>Limitación técnica:</strong> Ten en cuenta que este grupo está alojado en WhatsApp (Meta), una plataforma de mensajería externa. El Responsable no tiene control sobre la seguridad interna de la aplicación, ni sobre las copias de seguridad que realice WhatsApp en los dispositivos de los usuarios.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-xl font-bold mb-4">9. Conservación de datos</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Los mensajes publicados permanecen en el grupo mientras esté activo y accesible para sus miembros.
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>No se exportan ni almacenan fuera de WhatsApp, salvo en el caso de creación de una base de conocimiento gestionada con garantías de anonimización previa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>Puedes solicitar la eliminación de tus aportes, y se atenderá dentro de las posibilidades técnicas de la plataforma.</span>
                </li>
              </ul>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <p className="text-gray-300 leading-relaxed text-sm">
                  <strong>Importante:</strong> WhatsApp puede conservar mensajes, archivos o metadatos en sus propios servidores o en las copias de seguridad que configures en tu dispositivo. El Responsable del grupo no accede ni gestiona esos contenidos, por lo que la supresión técnica total depende de las configuraciones individuales y políticas de WhatsApp.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-xl font-bold mb-4">10. Aceptación y actualización</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>Tu participación implica la aceptación expresa de estas condiciones.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>Este Aviso podrá actualizarse para adaptarse a cambios normativos o mejoras en la gestión de la comunidad.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>Se informará a los miembros de cualquier modificación relevante.</span>
                </li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-xl font-bold mb-4">Limitación de responsabilidad</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Este grupo se rige por normas claras de privacidad y uso legítimo de los datos. El Responsable ni asume ni se hace responsable de los actos individuales de los miembros que, incumpliendo estas normas, utilicen los datos visibles en el grupo para fines prohibidos (como spam, prospección comercial o contactos no solicitados).
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                En caso de infracción:
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>El infractor será expulsado de forma inmediata.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>Se podrá bloquear o denunciar ante WhatsApp o ante la AEPD (Autoridad de Control) si procede.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF6D5A] mt-1">•</span>
                  <span>El Responsable del grupo colaborará activamente con las autoridades si fuera necesario.</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                La existencia de este Aviso Legal y Normas de Privacidad demuestra una diligencia activa, conforme al principio de responsabilidad proactiva (Art. 5.2 RGPD).
              </p>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-gray-300 leading-relaxed">
                  Asimismo, si un miembro comparte audios, vídeos o cualquier contenido multimedia que incluya datos personales o biométricos de terceros sin su consentimiento, será el único responsable de dicha infracción. El grupo y su Responsable no asumen ninguna responsabilidad por estos actos no autorizados, y se reservan el derecho de expulsión inmediata y colaboración con las autoridades competentes.
                </p>
              </div>
              <div className="bg-[#FF6D5A]/10 border border-[#FF6D5A]/30 rounded-lg p-4 mt-4">
                <p className="text-gray-300 leading-relaxed font-medium">
                  Participar en esta comunidad implica aceptar y respetar dichas normas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-2">
                <Image src="/logo.jpeg" alt="n8n Seniority" width={32} height={32} className="rounded-lg" />
                <span className="text-xl font-bold">n8n Seniority</span>
              </div>
              <p className="text-gray-400 text-sm">
                Comunidad hispana de n8n
              </p>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="https://discord.gg/mMJBMKdv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Discord
              </a>
              <a href="https://chat.whatsapp.com/LTxvjqtDw9hF3OIxUXPCQB" className="text-gray-400 hover:text-white transition-colors">
                WhatsApp
              </a>
              <a href="https://www.youtube.com/@n8nSeniority" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                YouTube
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
            © 2025 n8n Seniority. Una comunidad independiente para usuarios de n8n.
          </div>
        </div>
      </footer>
    </div>
  );
}

