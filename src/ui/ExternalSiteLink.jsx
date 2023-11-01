import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

function ExternalSiteLink({ link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 self-end mt-5 mx-3 md:mx-5 text-xs text-teal-950/70 dark:hover:text-stone-300 dark:text-gray-900/70 underline decoration-1 decoration-solid hover:decoration-red-700 dark:hover:decoration-stone-300 hover:text-red-700 hover:bg-orange-50/50 dark:hover:bg-orange-50/20 rounded-md px-2"
    >
      Firm Site
      <ArrowUpRightIcon className="h-3 w-3" />
    </a>
  );
}

export default ExternalSiteLink;
