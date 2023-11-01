import ContactForm from "../features/contact/ContactForm";
import Footer from "../ui/Footer";

function Contact() {
  return (
    <>
      <div className="w-screen h-screen bg-orange-50/90 overflow-auto">
        <div className="text-teal-900 mx-16 md:mx-28 lg:mx-56 xl:mx-64 p-1 flex flex-col justify-center items-center">
          <div className="pb-6 lg:max-w-[1280px] max-w-full">
            <h1 className="font-bold text-4xl mb-4 pt-28">Contact.</h1>
            <p className="text-sm font-bold">
              Get in touch or shoot me an email directly on{" "}
              <span className="text-red-700">xiyemou@gmail.com</span>.
            </p>
            <div className="mt-20">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
