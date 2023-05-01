import Contact from "../components/Contact";
import MenuPro from "../components/MenuPro";

// tu nes pas obligé d'attendre que tout soit fini pour déployer. Tu peux de temps en temps faire un commi, un push et ça part sur vercel
// une fois que cest deployé, il suffira de faire un commit push, et ça se redeploie automatiquement sur Vercel en parallele
function contactPage() {
  return (
    <div>
      <MenuPro />
      <Contact />
    </div>
  );
}

export default contactPage;
