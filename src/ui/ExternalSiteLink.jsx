import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

function ExternalSiteLink({ link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-3 mt-5 flex items-center gap-1 self-end rounded-md px-2 text-xs text-teal-950/70 underline decoration-solid decoration-1 hover:bg-orange-50/50 hover:text-red-700 hover:decoration-red-700 dark:text-orange-50/70 dark:hover:bg-orange-50/20 dark:hover:text-stone-300 dark:hover:decoration-stone-300 md:mx-5"
    >
      Firm Site
      <ArrowUpRightIcon className="h-3 w-3" />
    </a>
  );
}

export default ExternalSiteLink;
