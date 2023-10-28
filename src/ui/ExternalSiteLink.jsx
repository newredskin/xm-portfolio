function ExternalSiteLink({ link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 mx-3 text-xs text-teal-950/70 underline decoration-1 decoration-solid hover:decoration-red-700 hover:text-red-700 hover:bg-orange-50/50 rounded-md px-2"
    >
      To Firm Site
    </a>
  );
}

export default ExternalSiteLink;
