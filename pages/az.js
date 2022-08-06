import { useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import Image from "next/image";

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function AZPage() {
  const [formStatus, setFormStatus] = useState(false);

  const [query, setQuery] = useState({
    name: "",
    guests: "",
  });

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/ec4ee18c-1a2f-4f66-8582-dbdd86f3c8e9", {
      method: "POST",
      body: formData,
    }).then(() => {
      setFormStatus(true);
      setQuery({
        name: "",
        guests: "",
      });
    });
  };
  const { t } = useTranslation("common");

  return (
    <>
      <NextSeo title={t("home-title")} />
      <section className="relative bg-primary-500 pt-6">
        <div className="relative mx-auto aspect-video max-w-7xl px-4 sm:px-6 lg:px-8">
          <Image src="/hero.jpg" layout="fill" objectFit="cover" />
        </div>
      </section>

      <section className="bg-primary-500 pt-4 pb-8">
        <div className="mx-auto max-w-3xl py-4 px-4 sm:py-8">
          <div className="text-center font-serif text-xl font-extralight uppercase">
            <h2 className="text-xl tracking-[0.6em] text-yellow-600">
              SAVE THE DATE
            </h2>
            <p className="mt-2 text-2xl font-extralight tracking-[0.15em]  text-gray-700">
              10.15.2022
            </p>
          </div>
          <div className="relative mt-8 rounded-md bg-white shadow-xl">
            <div className="mx-auto">
              <div className="relative aspect-video h-full w-full">
                <Image
                  src="/banner.jpg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-md"
                />
              </div>
            </div>
            <div className="mx-auto">
              {/* RSVP form */}
              <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                <h2 className="font-serif text-xl font-extralight tracking-widest text-yellow-600">
                  {t("rsvp")}
                </h2>
                <p className="mt-1 text-base font-light italic text-gray-600">
                  {t("rsvp-message")}
                </p>
                <form
                  onSubmit={formSubmit}
                  className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="name"
                        className="block text-base font-light text-gray-600"
                      >
                        {t("name")}
                      </label>
                      <span
                        id="name-description"
                        className="text-sm text-gray-500"
                      >
                        {t("required")}
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border border-gray-300 text-gray-600 shadow-sm focus:border-primary-600 focus:ring-primary-600"
                        onChange={handleParam()}
                        value={query.name}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="guests"
                        className="block text-base font-light text-gray-600"
                      >
                        {t("guests")}
                      </label>
                      <span
                        id="guests-description"
                        className="text-sm text-gray-500"
                      >
                        {t("required")}
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="guests"
                        id="guests"
                        className="block w-full rounded-md border border-gray-300 text-gray-600 shadow-sm focus:border-primary-600 focus:ring-primary-600"
                        onChange={handleParam()}
                        value={query.guests}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 sm:flex sm:justify-start">
                    <button
                      type="submit"
                      className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-light text-gray-700 shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 sm:w-auto"
                    >
                      {t("submit")}
                    </button>
                  </div>
                  {formStatus ? (
                    <div className="mt-1 text-left text-lg font-light text-gray-700 sm:col-span-2">
                      {t("thank-message")}
                    </div>
                  ) : (
                    ""
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-500 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-2 grid grid-cols-3 gap-y-2 gap-x-2">
            {images.map((imageId) => (
              <div key={imageId} className="relative aspect-square">
                <Image
                  src={`/images/${imageId}.jpg`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
