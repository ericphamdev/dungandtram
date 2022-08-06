import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";

export const Header = ({ heading, title }) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <header className="bg-primary-500 pt-8 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-quita text-5xl font-medium leading-relaxed text-gray-700">
          Dung & Tram
        </h1>
        <Link href="/" locale={router.locale === "en" ? "vi" : "en"}>
          <a className="inline-block py-4 px-8 text-base font-light text-yellow-600">
            {" "}
            {t("change-locale", {
              changeTo: router.locale === "en" ? "vi" : "en",
            })}
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
