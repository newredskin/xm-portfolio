import ContactForm from "../features/contact/ContactForm";
import Footer from "../ui/Footer";

function Contact() {
  return (
    <>
      <div className="h-screen w-screen overflow-auto bg-gradient-to-b from-orange-50 to-orange-100 to-10% dark:from-gray-950 dark:via-gray-900 dark:via-60% dark:to-gray-800 dark:to-90%">
        <div className="mx-8 flex flex-col items-center justify-center p-1 text-teal-900 dark:text-orange-50/90 sm:mx-14 md:mx-28 lg:mx-56 xl:mx-64">
          <div className="max-w-full pb-6 lg:max-w-[1280px]">
            <h1 className="mb-4 pt-28 text-4xl font-bold text-teal-950 dark:text-orange-50/90">
              Contact.
            </h1>
            <p className="text-sm font-bold lg:text-base">
              Get in touch or shoot me an email directly on{" "}
              <span className="text-red-700">xiyemou@gmail.com</span>.
            </p>
            <div className="mt-16 lg:mt-20">
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
